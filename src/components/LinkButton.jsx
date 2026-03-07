import { motion } from 'framer-motion'
import { useState } from 'react'
import GlowCard from './GlowCard'

// Mapeia a variante do botão para a cor do GlowCard
const variantToGlowColor = {
    whatsapp: 'green',
    primary: 'orange',
    default: 'blue',
    secondary: 'blue',
}

// Cor do ícone e texto por variante
const variantStyles = {
    whatsapp: {
        iconBg: 'bg-green-600',
        labelColor: '#dcfce7',
        badgeBg: 'bg-green-500',
        arrowColor: '#86efac',
        accentColor: 'via-green-500/50',
    },
    primary: {
        iconBg: 'bg-amber-700',
        labelColor: '#fdf8f3',
        badgeBg: 'bg-amber-600',
        arrowColor: '#fcd34d',
        accentColor: 'via-amber-600/50',
    },
    default: {
        iconBg: 'bg-stone-600',
        labelColor: '#f5efe6',
        badgeBg: 'bg-stone-500',
        arrowColor: '#93c5fd',
        accentColor: 'via-blue-500/40',
    },
    secondary: {
        iconBg: 'bg-purple-700',
        labelColor: '#ede9fe',
        badgeBg: 'bg-purple-600',
        arrowColor: '#c4b5fd',
        accentColor: 'via-purple-500/40',
    },
}

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
    const style = variantStyles[variant] ?? variantStyles.default
    const glowColor = variantToGlowColor[variant] ?? 'blue'

    return (
        <motion.div
            initial={{ opacity: 0, x: -30, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.5, delay, ease: 'easeOut' }}
            whileHover={{ scale: 1.025, y: -2 }}
            whileTap={{ scale: 0.975 }}
        >
            <GlowCard glowColor={glowColor}>
                <a
                    href={href}
                    target={external ? '_blank' : '_self'}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="relative block w-full cursor-pointer select-none"
                    style={{ textDecoration: 'none' }}
                    onMouseDown={() => setIsPressed(true)}
                    onMouseUp={() => setIsPressed(false)}
                    aria-label={label}
                >
                    {/* Content */}
                    <div className="relative flex items-center gap-4 px-5 py-4">
                        {/* Icon */}
                        {Icon && (
                            <div
                                className={`flex-shrink-0 w-11 h-11 rounded-xl ${style.iconBg} flex items-center justify-center shadow-lg`}
                            >
                                <Icon size={22} color="white" strokeWidth={2} />
                            </div>
                        )}

                        {/* Text */}
                        <div className="flex-1 min-w-0 text-left">
                            {/* Label */}
                            <span
                                className="block font-semibold text-sm md:text-base leading-tight"
                                style={{ color: style.labelColor }}
                            >
                                {label}
                            </span>

                            {/* Badge + description */}
                            <div className="flex items-center gap-1.5 mt-0.5">
                                {badge && (
                                    <span
                                        className={`${style.badgeBg} text-white text-xs px-1.5 py-0.5 rounded-md font-bold flex-shrink-0`}
                                    >
                                        {badge}
                                    </span>
                                )}
                                {description && (
                                    <p
                                        className="text-xs font-light truncate"
                                        style={{ color: 'rgba(220,197,168,0.7)' }}
                                    >
                                        {description}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Arrow */}
                        <motion.div
                            animate={{ x: isPressed ? 2 : 0 }}
                            className="flex-shrink-0 opacity-70"
                            style={{ color: style.arrowColor }}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </motion.div>
                    </div>

                    {/* Bottom accent line */}
                    <div
                        className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${style.accentColor} to-transparent`}
                    />
                </a>
            </GlowCard>
        </motion.div>
    )
}
