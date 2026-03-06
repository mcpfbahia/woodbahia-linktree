import { motion } from 'framer-motion'
import { TreePine, Building2, Hammer, Award, MapPin, Clock } from 'lucide-react'

const stats = [
    { icon: Clock, value: '2+', label: 'Anos de experiência' },
    { icon: Building2, value: '+100', label: 'Projetos entregues' },
    { icon: MapPin, value: 'BA & SE', label: 'Bahia e Sergipe' },
]

const highlights = [
    { icon: TreePine, text: 'Madeira tratada sustentável' },
    { icon: Award, text: 'Qualidade e acabamento premium' },
    { icon: Hammer, text: 'Construção rápida e eficiente' },
]

export default function SocialProof() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.4 }}
            className="relative z-10"
            aria-label="Credibilidade e experiência"
        >
            {/* Main credibility text */}
            <div
                className="rounded-2xl p-5 mb-4 text-center relative overflow-hidden"
                style={{
                    background: 'rgba(107,76,59,0.12)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(168,121,78,0.25)',
                }}
            >
                {/* Quote mark */}
                <div className="absolute top-2 left-4 text-5xl leading-none font-serif opacity-20 select-none"
                    style={{ color: '#dcc5a8' }}>
                    "
                </div>
                <p
                    className="font-display italic text-base md:text-lg relative z-10 leading-relaxed"
                    style={{ color: '#e8ddd0' }}
                >
                    Mais de <strong className="font-bold not-italic" style={{ color: '#dcc5a8' }}>2 anos</strong> construindo
                    chalés e casas pré-fabricadas na Bahia e Sergipe.
                </p>
                <div className="absolute bottom-2 right-4 text-5xl leading-none font-serif opacity-20 select-none rotate-180"
                    style={{ color: '#dcc5a8' }}>
                    "
                </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 mb-4">
                {stats.map((stat, i) => {
                    const Icon = stat.icon
                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 1.6 + i * 0.1 }}
                            className="rounded-xl py-3 px-2 text-center"
                            style={{
                                background: 'rgba(255,255,255,0.04)',
                                border: '1px solid rgba(168,121,78,0.15)',
                            }}
                        >
                            <Icon size={18} className="mx-auto mb-1" style={{ color: '#a8793e' }} />
                            <div className="font-bold text-sm" style={{ color: '#f5efe6' }}>{stat.value}</div>
                            <div className="text-xs leading-tight" style={{ color: 'rgba(220,197,168,0.7)' }}>{stat.label}</div>
                        </motion.div>
                    )
                })}
            </div>

            {/* Highlights */}
            <div className="flex flex-col gap-2">
                {highlights.map((h, i) => {
                    const Icon = h.icon
                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 1.8 + i * 0.1 }}
                            className="flex items-center gap-3 px-4 py-2.5 rounded-xl"
                            style={{
                                background: 'rgba(255,255,255,0.03)',
                                border: '1px solid rgba(168,121,78,0.12)',
                            }}
                        >
                            <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                                style={{ background: 'rgba(168,105,62,0.2)' }}>
                                <Icon size={15} style={{ color: '#c4894a' }} />
                            </div>
                            <span className="text-sm" style={{ color: 'rgba(220,197,168,0.85)' }}>{h.text}</span>
                        </motion.div>
                    )
                })}
            </div>
        </motion.section>
    )
}
