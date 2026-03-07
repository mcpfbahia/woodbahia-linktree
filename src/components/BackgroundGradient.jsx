// Fundo com gradiente radial + grid quadriculado — tema madeira escura
// Grid definido via .bg-grid no index.css para processamento garantido
export default function BackgroundGradient() {
  return (
    <div className="fixed inset-0" style={{ zIndex: -10, backgroundColor: '#0f0c09' }}>

      {/* Glow radial principal — âmbar madeira, bem expresso */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle 400px at 50% 180px, #4a2a0e, transparent)',
        }}
      />

      {/* Grid quadriculado — classe definida no index.css */}
      <div className="bg-grid pointer-events-none absolute inset-0" />

    </div>
  )
}
