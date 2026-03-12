import { motion } from 'framer-motion'

export default function Header() {
    return (
        <motion.header
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center mb-8 relative z-10"
        >
            {/* Logo */}
            <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.2, type: 'spring', stiffness: 100 }}
                className="flex justify-center mb-5"
            >
                <div className="relative">
                    {/* Glow ring */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-600/30 to-orange-900/30 blur-xl scale-125" />
                    {/* Logo container */}
                    <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-amber-700/50 shadow-2xl flex items-center justify-center"
                        style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(10px)' }}
                    >
                        <img
                            src="/logo.svg"
                            alt="Wood Bahia – Logo"
                            className="w-20 h-20 object-contain logo-glow"
                            style={{ filter: 'brightness(1.2) contrast(1.1)' }}
                            loading="eager"
                        />
                    </div>
                    {/* Small badge */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1, type: 'spring' }}
                        className="absolute -bottom-1 -right-1 bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-lg border border-green-400"
                    >
                        ✓ Online
                    </motion.div>
                </div>
            </motion.div>

            {/* Company name */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="font-display text-2xl md:text-3xl font-bold tracking-wide mb-1"
                style={{
                    background: 'linear-gradient(135deg, #f5efe6 0%, #dcc5a8 40%, #a8794e 70%, #f5efe6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                }}
            >
                Wood Bahia
            </motion.h1>



            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="mt-3 text-sm md:text-base font-light italic leading-relaxed"
                style={{ color: '#b89b7a' }}
            >
                Chalés e Casas Pré-Fabricadas <br /> 
                em Madeira Tratada
            </motion.p>

            {/* Decorative divider */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="mt-4 flex items-center justify-center gap-3"
            >
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-700/60" />
                <div className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                <div className="w-8 h-px bg-amber-600/40" />
                <div className="w-1 h-1 rounded-full bg-amber-500/60" />
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-700/60" />
            </motion.div>
        </motion.header>
    )
}
