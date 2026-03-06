import { motion } from 'framer-motion'
import { Instagram, Globe, Phone } from 'lucide-react'

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
                <a
                    href="https://www.instagram.com/woodbahiacasasprefabricadas/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                    style={{
                        background: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(168,121,78,0.2)',
                        color: '#dcc5a8',
                    }}
                    aria-label="Instagram Wood Bahia"
                >
                    <Instagram size={16} />
                </a>
                <a
                    href="https://www.woodbahia.site"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                    style={{
                        background: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(168,121,78,0.2)',
                        color: '#dcc5a8',
                    }}
                    aria-label="Site Wood Bahia"
                >
                    <Globe size={16} />
                </a>
                <a
                    href="tel:+5571992936290"
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                    style={{
                        background: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(168,121,78,0.2)',
                        color: '#dcc5a8',
                    }}
                    aria-label="Telefone Wood Bahia"
                >
                    <Phone size={16} />
                </a>
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
