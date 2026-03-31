import { motion } from 'framer-motion'
import { Instagram, Globe, Phone } from 'lucide-react'

// Configuração de cor/glow por ícone social
const SOCIAL_LINKS = [
    {
        href: 'https://www.instagram.com/woodbahiacasasprefabricadas/',
        target: '_blank',
        rel: 'noopener noreferrer',
        Icon: Instagram,
        label: 'Instagram Wood Bahia',
        glowColor: 'rgba(225,48,108,0.7)',   // rosa Instagram
        borderHover: 'rgba(225,48,108,0.6)',
        bgHover: 'rgba(225,48,108,0.15)',
        iconColor: '#f472b6',
    },
    {
        href: 'https://www.woodbahia.com',
        target: '_blank',
        rel: 'noopener noreferrer',
        Icon: Globe,
        label: 'Site Wood Bahia',
        glowColor: 'rgba(251,191,36,0.7)',   // âmbar do tema
        borderHover: 'rgba(251,191,36,0.6)',
        bgHover: 'rgba(251,191,36,0.12)',
        iconColor: '#fcd34d',
    },
    {
        href: 'tel:+5571992936290',
        target: undefined,
        rel: undefined,
        Icon: Phone,
        label: 'Telefone Wood Bahia',
        glowColor: 'rgba(74,222,128,0.7)',   // verde WhatsApp/phone
        borderHover: 'rgba(74,222,128,0.6)',
        bgHover: 'rgba(74,222,128,0.12)',
        iconColor: '#4ade80',
    },
]

function SocialButton({ href, target, rel, Icon, label, glowColor, borderHover, bgHover, iconColor }) {
    return (
        <motion.a
            href={href}
            target={target}
            rel={rel}
            aria-label={label}
            initial={false}
            whileHover={{
                scale: 1.1,
                y: -2,
                transition: { type: 'spring', stiffness: 350, damping: 18 },
            }}
            whileTap={{ scale: 0.92 }}
            className="w-10 h-10 rounded-full flex items-center justify-center relative group"
            style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(168,121,78,0.2)',
                color: '#dcc5a8',
                transition: 'background 0.25s, border-color 0.25s, box-shadow 0.25s, color 0.25s',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.background = bgHover
                e.currentTarget.style.borderColor = borderHover
                e.currentTarget.style.color = iconColor
                e.currentTarget.style.boxShadow = `0 0 10px ${glowColor}, 0 0 3px ${glowColor}`
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                e.currentTarget.style.borderColor = 'rgba(168,121,78,0.2)'
                e.currentTarget.style.color = '#dcc5a8'
                e.currentTarget.style.boxShadow = 'none'
            }}
        >

            <Icon size={17} strokeWidth={2} />
        </motion.a>
    )
}

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.2 }}
            className="mt-8 pb-6 text-center relative z-10"
        >
            {/* Divider */}
            <div className="flex items-center justify-center gap-3 mb-5">
                <div className="h-px w-20 bg-gradient-to-r from-transparent to-amber-800/40" />
                <div className="w-1 h-1 rounded-full bg-amber-700/60" />
                <div className="h-px w-20 bg-gradient-to-l from-transparent to-amber-800/40" />
            </div>

            {/* Social icons */}
            <div className="flex justify-center gap-4 mb-4">
                {SOCIAL_LINKS.map((link) => (
                    <SocialButton key={link.label} {...link} />
                ))}
            </div>

            {/* Company info */}
            <p className="text-sm font-medium mb-1" style={{ color: '#dcc5a8' }}>
                Wood Bahia Casas Pré Fabricadas
            </p>
            <p className="text-xs" style={{ color: 'rgba(185,155,122,0.7)' }}>
                Projetos inteligentes em madeira tratada.
            </p>

            {/* Copyright */}
            <p className="mt-3 text-xs" style={{ color: 'rgba(185,155,122,0.45)' }}>
                © {new Date().getFullYear()} Wood Bahia · Todos os direitos reservados
            </p>
        </motion.footer>
    )
}
