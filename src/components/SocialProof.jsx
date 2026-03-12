import { motion } from 'framer-motion'
import { TreePine, Building2, Award, MapPin, Clock, Star } from 'lucide-react'
import GlowCard from './GlowCard'

const stats = [
    { icon: Clock, value: '2+', label: 'Anos de experiência' },
    { icon: Building2, value: '+100', label: 'Projetos entregues' },
    { icon: MapPin, value: 'BA & SE', label: 'Bahia e Sergipe' },
]

export default function SocialProof() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10"
            aria-label="Credibilidade e experiência"
        >
            <GlowCard glowColor="amber" className="p-1">
                <div 
                    className="rounded-2xl p-6 text-center relative overflow-hidden"
                    style={{
                        background: 'rgba(107,76,59,0.08)',
                        backdropFilter: 'blur(8px)',
                    }}
                >
                    {/* Stars highlight */}
                    <div className="flex justify-center gap-1 mb-4">
                        {[1, 2, 3, 4, 5].map((s) => (
                            <motion.div
                                key={s}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 + s * 0.1, type: 'spring' }}
                            >
                                <Star size={16} fill="#dcc5a8" color="#dcc5a8" />
                            </motion.div>
                        ))}
                    </div>

                    <p
                        className="font-display italic text-base md:text-lg relative z-10 leading-relaxed mb-6"
                        style={{ color: '#f5efe6' }}
                    >
                        "Referência em <strong className="font-bold not-italic" style={{ color: '#dcc5a8' }}>chalés premium</strong> e casas pré-fabricadas na Bahia, transformando sonhos em realidade com qualidade máxima."
                    </p>

                    {/* Stats row */}
                    <div className="grid grid-cols-3 gap-3">
                        {stats.map((stat, i) => {
                            const Icon = stat.icon
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                                    className="flex flex-col items-center"
                                >
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center mb-1.5"
                                        style={{ background: 'rgba(168,121,78,0.15)', border: '1px solid rgba(168,121,78,0.2)' }}>
                                        <Icon size={14} style={{ color: '#dcc5a8' }} />
                                    </div>
                                    <div className="font-bold text-sm" style={{ color: '#f5efe6' }}>{stat.value}</div>
                                    <div className="text-[10px] leading-tight uppercase tracking-tighter opacity-60" style={{ color: '#dcc5a8' }}>{stat.label}</div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </GlowCard>

            {/* Quality Badges */}
            <div className="flex justify-center gap-4 mt-4">
                <motion.div 
                    whileHover={{ scale: 1.1, opacity: 1, y: -2 }}
                    className="flex items-center gap-1.5 opacity-70 cursor-default transition-opacity duration-300"
                >
                    <TreePine size={14} style={{ color: '#dcc5a8' }} />
                    <span className="text-[10px] uppercase tracking-wider font-medium" style={{ color: '#dcc5a8' }}>Madeira Tratada</span>
                </motion.div>
                <motion.div 
                    whileHover={{ scale: 1.1, opacity: 1, y: -2 }}
                    className="flex items-center gap-1.5 opacity-70 cursor-default transition-opacity duration-300"
                >
                    <Award size={14} style={{ color: '#dcc5a8' }} />
                    <span className="text-[10px] uppercase tracking-wider font-medium" style={{ color: '#dcc5a8' }}>Garantia Wood</span>
                </motion.div>
            </div>
        </motion.section>
    )
}
