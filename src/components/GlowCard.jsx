import { useEffect, useRef } from 'react'

// ─── Correção de Performance ────────────────────────────────────────────────
// PROBLEMA 1: background-attachment:fixed desativa GPU compositing no mobile
//             → removido do CSS e do inline style
// PROBLEMA 2: 7 listeners pointermove separados no document
//             → substituídos por UM ÚNICO listener singleton compartilhado
// ────────────────────────────────────────────────────────────────────────────

// Singleton: conjunto de refs de todos os GlowCards montados
const registeredCards = new Set()

function onPointerMove(e) {
  const x = e.clientX
  const y = e.clientY
  const xp = (x / window.innerWidth).toFixed(2)
  const xs = x.toFixed(2)
  const yp = (y / window.innerHeight).toFixed(2)
  const ys = y.toFixed(2)
  // Atualiza TODOS os cards de uma só vez com UM evento
  for (const el of registeredCards) {
    el.style.setProperty('--x', xs)
    el.style.setProperty('--xp', xp)
    el.style.setProperty('--y', ys)
    el.style.setProperty('--yp', yp)
  }
}

function registerCard(el) {
  if (registeredCards.size === 0) {
    // Adiciona o listener apenas quando o PRIMEIRO card é montado
    document.addEventListener('pointermove', onPointerMove, { passive: true })
  }
  registeredCards.add(el)
}

function unregisterCard(el) {
  registeredCards.delete(el)
  if (registeredCards.size === 0) {
    // Remove o listener quando o ÚLTIMO card é desmontado
    document.removeEventListener('pointermove', onPointerMove)
  }
}

// ─── CSS injetado uma única vez ─────────────────────────────────────────────
let stylesInjected = false

const beforeAfterStyles = `
  [data-glow]::before,
  [data-glow]::after {
    pointer-events: none;
    content: "";
    position: absolute;
    inset: calc(var(--border-size) * -1);
    border: var(--border-size) solid transparent;
    border-radius: calc(var(--radius) * 1px);
    background-size: calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)));
    background-repeat: no-repeat;
    background-position: 50% 50%;
    mask: linear-gradient(transparent, transparent), linear-gradient(white, white);
    mask-clip: padding-box, border-box;
    mask-composite: intersect;
  }

  [data-glow]::before {
    background-image: radial-gradient(
      calc(var(--spotlight-size) * 0.75) calc(var(--spotlight-size) * 0.75) at
      calc(var(--x, 0) * 1px)
      calc(var(--y, 0) * 1px),
      hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 50) * 1%) / var(--border-spot-opacity, 1)), transparent 100%
    );
    filter: brightness(2);
  }

  [data-glow]::after {
    background-image: radial-gradient(
      calc(var(--spotlight-size) * 0.5) calc(var(--spotlight-size) * 0.5) at
      calc(var(--x, 0) * 1px)
      calc(var(--y, 0) * 1px),
      hsl(0 100% 100% / var(--border-light-opacity, 1)), transparent 100%
    );
  }

  [data-glow] [data-glow] {
    position: absolute;
    inset: 0;
    opacity: var(--outer, 1);
    border-radius: calc(var(--radius) * 1px);
    border-width: calc(var(--border-size) * 20);
    filter: blur(calc(var(--border-size) * 10));
    background: none;
    pointer-events: none;
    border: none;
  }

  [data-glow] > [data-glow]::before {
    inset: -10px;
    border-width: 10px;
  }
`

const glowColorMap = {
  blue: { base: 210, spread: 50 },
  green: { base: 130, spread: 40 },
  orange: { base: 25, spread: 40 },
  red: { base: 0, spread: 30 },
}

export default function GlowCard({ children, className = '', glowColor = 'blue' }) {
  const cardRef = useRef(null)

  useEffect(() => {
    // Injeta o CSS apenas uma vez em toda a página
    if (!stylesInjected) {
      const tag = document.createElement('style')
      tag.id = 'glow-card-styles'
      tag.textContent = beforeAfterStyles
      document.head.appendChild(tag)
      stylesInjected = true
    }

    const el = cardRef.current
    if (el) registerCard(el)
    return () => { if (el) unregisterCard(el) }
  }, [])

  const { base, spread } = glowColorMap[glowColor] ?? glowColorMap.blue

  const inlineStyles = {
    '--base': base,
    '--spread': spread,
    '--radius': '16',
    '--border': '2',
    '--backdrop': 'hsl(0 0% 8% / 0.65)',
    '--backup-border': 'var(--backdrop)',
    '--size': '250',
    '--outer': '1',
    '--border-size': 'calc(var(--border, 2) * 1px)',
    '--spotlight-size': 'calc(var(--size, 150) * 1px)',
    '--hue': 'calc(var(--base) + (var(--xp, 0) * var(--spread, 0)))',
    // ✅ background-attachment: fixed REMOVIDO — causava repaints completos no mobile
    backgroundImage: `radial-gradient(
      var(--spotlight-size) var(--spotlight-size) at
      calc(var(--x, 0) * 1px)
      calc(var(--y, 0) * 1px),
      hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 70) * 1%) / var(--bg-spot-opacity, 0.12)), transparent
    )`,
    backgroundColor: 'var(--backdrop, transparent)',
    backgroundSize: 'calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)))',
    backgroundPosition: '50% 50%',
    border: 'var(--border-size) solid var(--backup-border)',
    position: 'relative',
  }

  return (
    <div
      ref={cardRef}
      data-glow
      style={inlineStyles}
      className={`relative w-full rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.4)] ${className}`}
    >
      <div data-glow />
      {children}
    </div>
  )
}
