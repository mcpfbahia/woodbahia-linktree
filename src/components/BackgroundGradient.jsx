// Fundo com gradiente radial + grid inspirado no tema madeira
// Substituição do AnimatedBackground (canvas) por uma solução CSS pura
export default function BackgroundGradient() {
    return (
        <div className="fixed inset-0 -z-10" style={{ backgroundColor: '#0c0a09' }}>
            {/* Glow radial central — marrom madeira profundo */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(circle 600px at 50% 180px, #6b3d1e, transparent)',
                }}
            />

            {/* Grid sutil — mesma cor com baixa opacidade */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    backgroundImage: `
            linear-gradient(to right,  #6b3d1e18 1px, transparent 1px),
            linear-gradient(to bottom, #6b3d1e18 1px, transparent 1px)
          `,
                    backgroundSize: '20px 20px',
                }}
            />

            {/* Vinheta suave nas bordas para dar profundidade */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background: 'radial-gradient(ellipse 100% 100% at 50% 0%, transparent 60%, #0c0a09 100%)',
                }}
            />
        </div>
    )
}
