import { motion } from 'framer-motion'

/**
 * RevealOnScroll – envolve qualquer conteúdo com animação de entrada ao entrar no viewport.
 * Props:
 *   direction: 'up' | 'down' | 'left' | 'right' | 'fade'  (default: 'up')
 *   delay: número em segundos  (default: 0)
 *   duration: número em segundos (default: 0.6)
 *   amount: fração visível para disparar (default: 0.15)
 *   once: boolean – anima só na primeira vez (default: true)
 */
const offsets = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: -40 },
    right: { y: 0, x: 40 },
    fade: { y: 0, x: 0 },
}

export default function RevealOnScroll({
    children,
    direction = 'up',
    delay = 0,
    duration = 0.6,
    amount = 0.15,
    once = true,
    className = '',
    style,
}) {
    const { x, y } = offsets[direction] ?? offsets.up

    return (
        <motion.div
            className={className}
            style={style}
            initial={{ opacity: 0, x, y, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            viewport={{ once, amount }}
            transition={{
                duration,
                delay,
                ease: [0.22, 1, 0.36, 1],  // custom ease-out spring
            }}
        >
            {children}
        </motion.div>
    )
}
