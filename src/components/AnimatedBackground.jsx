import { useEffect, useRef } from 'react'

const PARTICLE_COUNT = 18

function createParticle(canvas) {
    const size = Math.random() * 4 + 2
    return {
        x: Math.random() * canvas.width,
        y: canvas.height + 10,
        size,
        speedX: (Math.random() - 0.5) * 0.8,
        speedY: -(Math.random() * 1.5 + 0.5),
        opacity: Math.random() * 0.6 + 0.2,
        color: Math.random() > 0.5 ? '#a8693e' : '#dcc5a8',
        angle: Math.random() * Math.PI * 2,
        angleSpeed: (Math.random() - 0.5) * 0.02,
    }
}

export default function AnimatedBackground() {
    const canvasRef = useRef(null)
    const particlesRef = useRef([])
    const animFrameRef = useRef(null)
    const mouseRef = useRef({ x: 0, y: 0 })

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resize()
        window.addEventListener('resize', resize)

        const onMouseMove = (e) => {
            mouseRef.current = { x: e.clientX, y: e.clientY }
        }
        window.addEventListener('mousemove', onMouseMove)

        // Initialize particles
        particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () => createParticle(canvas))

        let t = 0
        const animate = () => {
            t += 0.005
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Draw organic wave
            ctx.save()
            const grad = ctx.createLinearGradient(0, canvas.height * 0.6, 0, canvas.height)
            grad.addColorStop(0, 'rgba(107,76,59,0.0)')
            grad.addColorStop(1, 'rgba(61,30,14,0.3)')
            ctx.fillStyle = grad

            ctx.beginPath()
            ctx.moveTo(0, canvas.height)
            for (let x = 0; x <= canvas.width; x += 10) {
                const y = canvas.height * 0.75 +
                    Math.sin(x * 0.003 + t) * 30 +
                    Math.sin(x * 0.007 - t * 1.3) * 15 +
                    Math.cos(x * 0.005 + t * 0.7) * 20
                if (x === 0) ctx.lineTo(x, y)
                else ctx.lineTo(x, y)
            }
            ctx.lineTo(canvas.width, canvas.height)
            ctx.closePath()
            ctx.fill()

            // Second wave
            const grad2 = ctx.createLinearGradient(0, canvas.height * 0.7, 0, canvas.height)
            grad2.addColorStop(0, 'rgba(168,105,62,0.0)')
            grad2.addColorStop(1, 'rgba(107,76,59,0.15)')
            ctx.fillStyle = grad2

            ctx.beginPath()
            ctx.moveTo(0, canvas.height)
            for (let x = 0; x <= canvas.width; x += 10) {
                const y = canvas.height * 0.82 +
                    Math.sin(x * 0.004 - t * 1.1) * 25 +
                    Math.cos(x * 0.006 + t * 0.9) * 18
                ctx.lineTo(x, y)
            }
            ctx.lineTo(canvas.width, canvas.height)
            ctx.closePath()
            ctx.fill()
            ctx.restore()

            // Draw and update particles
            particlesRef.current = particlesRef.current.map(p => {
                // Subtle mouse attraction
                const mx = mouseRef.current.x
                const my = mouseRef.current.y
                const dx = mx - p.x
                const dy = my - p.y
                const dist = Math.sqrt(dx * dx + dy * dy)
                if (dist < 150 && dist > 0) {
                    p.speedX += (dx / dist) * 0.01
                    p.speedY += (dy / dist) * 0.01
                }

                p.x += p.speedX
                p.y += p.speedY
                p.angle += p.angleSpeed

                ctx.save()
                ctx.globalAlpha = p.opacity * (1 - (canvas.height - p.y) / canvas.height)
                ctx.fillStyle = p.color
                ctx.translate(p.x, p.y)
                ctx.rotate(p.angle)

                // Draw small diamond/wood chip shape
                ctx.beginPath()
                ctx.moveTo(0, -p.size)
                ctx.lineTo(p.size * 0.6, 0)
                ctx.lineTo(0, p.size)
                ctx.lineTo(-p.size * 0.6, 0)
                ctx.closePath()
                ctx.fill()
                ctx.restore()

                // Reset if off screen
                if (p.y < -20 || p.x < -20 || p.x > canvas.width + 20) {
                    return createParticle(canvas)
                }
                return p
            })

            // Draw subtle grid lines (wood grain)
            ctx.save()
            ctx.strokeStyle = 'rgba(139, 90, 43, 0.04)'
            ctx.lineWidth = 1
            for (let i = 0; i < canvas.width; i += 80) {
                ctx.beginPath()
                ctx.moveTo(i, 0)
                ctx.lineTo(i + Math.sin(t + i * 0.01) * 15, canvas.height)
                ctx.stroke()
            }
            ctx.restore()

            animFrameRef.current = requestAnimationFrame(animate)
        }

        animate()
        return () => {
            window.removeEventListener('resize', resize)
            window.removeEventListener('mousemove', onMouseMove)
            if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 0 }}
        />
    )
}
