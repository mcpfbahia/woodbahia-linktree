import { motion } from 'framer-motion'
import { useState } from 'react'

export default function LinkButton({
    href,
    icon: Icon,
    label,
    description,
    variant = 'default',
    delay = 0,
    badge,
    external = true,
}) {
    const [isPressed, setIsPressed] = useState(false)

    const variantStyles = {
        whatsapp: {
            base: 'from-green-800/80 to-green-900/80 border-green-600/40 hover:border-green-500/60',
            iconBg: 'bg-green-600',
            glow: 'rgba(37,211,102,0.35)',
            labelColor: '#dcfce7',
            badgeBg: 'bg-green-500',
        },
        primary: {
            base: 'from-amber-900/70 to-stone-900/70 border-amber-700/40 hover:border-amber-600/60',
            iconBg: 'bg-amber-700',
            glow: 'rgba(168,105,62,0.35)',
            labelColor: '#fdf8f3',
            badgeBg: 'bg-amber-600',
        },
        default: {
            base: 'from-stone-800/60 to-stone-900/60 border-stone-600/30 hover:border-amber-700/50',
            iconBg: 'bg-stone-700',
            glow: 'rgba(107,76,59,0.3)',
            labelColor: '#f5efe6',
            badgeBg: 'bg-stone-600',
        },
        secondary: {
            base: 'from-wood-900/50 to-stone-900/50 border-wood-700/30 hover:border-wood-600/50',
            iconBg: 'bg-wood-800',
            glow: 'rgba(61,30,14,0.3)',
            labelColor: '#e8ddd0',
            badgeBg: 'bg-wood-700',
        },
    }

    const style = variantStyles[variant] || variantStyles.default

    return (
        <motion.div
            initial={{ opacity: 0, x: -30, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.5, delay, ease: 'easeOut' }}
            whileHover={{ scale: 1.025, y: -2 }}
            whileTap={{ scale: 0.975 }}
        >
            <a
                href={href}
                target={external ? '_blank' : '_self'}
                rel={external ? 'noopener noreferrer' : undefined}
                className={`
          ripple relative block w-full rounded-2xl overflow-hidden
          bg-gradient-to-r ${style.base}
          border transition-all duration-300
          cursor-pointer select-none
        `}
                style={{
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    boxShadow: `0 4px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)`,
                    textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 8px 32px rgba(0,0,0,0.4), 0 0 24px ${style.glow}, inset 0 1px 0 rgba(255,255,255,0.08)`
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)'
                }}
                onMouseDown={() => setIsPressed(true)}
                onMouseUp={() => setIsPressed(false)}
                aria-label={label}
            >
                {/* Shimmer overlay on hover */}
                <div className="absolute inset-0 shimmer opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Content */}
                <div className="relative flex items-center gap-4 px-5 py-4">
                    {/* Icon */}
                    {Icon && (
                        <div className={`flex-shrink-0 w-11 h-11 rounded-xl ${style.iconBg} flex items-center justify-center shadow-lg`}>
                            <Icon size={22} color="white" strokeWidth={2} />
                        </div>
                    )}

                    {/* Text */}
                    <div className="flex-1 min-w-0 text-left">
                        <div className="flex items-center gap-2">
                            <span
                                className="font-semibold text-sm md:text-base leading-tight"
                                style={{ color: style.labelColor }}
                            >
                                {label}
                            </span>
                            {badge && (
                                <span className={`${style.badgeBg} text-white text-xs px-1.5 py-0.5 rounded-md font-bold badge-shine flex-shrink-0`}>
                                    {badge}
                                </span>
                            )}
                        </div>
                        {description && (
                            <p className="text-xs mt-0.5 font-light truncate" style={{ color: 'rgba(220,197,168,0.7)' }}>
                                {description}
                            </p>
                        )}
                    </div>

                    {/* Arrow */}
                    <motion.div
                        animate={{ x: isPressed ? 2 : 0 }}
                        className="flex-shrink-0 text-bark-medium opacity-60"
                        style={{ color: '#dcc5a8' }}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </motion.div>
                </div>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent ${variant === 'whatsapp' ? 'via-green-500/60' : 'via-amber-600/60'
                    } to-transparent`} />
            </a>
        </motion.div>
    )
}
