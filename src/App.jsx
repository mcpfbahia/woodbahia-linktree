import { motion } from 'framer-motion'
import {
    MessageCircle,
    Globe,
    Calculator,
    ImageIcon,
    DollarSign,
    Grid,
    Phone,
} from 'lucide-react'

import BackgroundGradient from './components/BackgroundGradient'
import Header from './components/Header'
import LinkButton from './components/LinkButton'
import SocialProof from './components/SocialProof'
import Footer from './components/Footer'
import RevealOnScroll from './components/RevealOnScroll'

// WhatsApp icon custom
function WhatsAppIcon({ size = 22 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
    )
}

const MAIN_LINKS = [
    {
        id: 'whatsapp',
        href: 'https://wa.me/5571992936290?text=Ol%C3%A1!%20%F0%9F%91%8B%20Seja%20bem-vindo%20%C3%A0%20*Wood%20Bahia%20Casas%20Pr%C3%A9-Fabricadas*.%0A%0APra%20te%20ajudar%20de%20forma%20r%C3%A1pida%20e%20j%C3%A1%20te%20passar%20*valores%20reais*%2C%20me%20conta%20s%C3%B3%203%20coisas%3A%0A%0A%F0%9F%91%89%20*Voc%C3%AA%20busca%3A*%0A1)%20Morar%0A2)%20Investir%20(Airbnb%20%2F%20aluguel)%0A3)%20Lazer%0A%0A%F0%9F%91%89%20*J%C3%A1%20tem%20terreno%3F*%0A(Sim%20%2F%20N%C3%A3o%20%2F%20Em%20an%C3%A1lise)%0A%0A%F0%9F%91%89%20*Em%20qual%20cidade%20ou%20regi%C3%A3o%20pretende%20construir%3F*%0A%0ACom%20isso%20j%C3%A1%20consigo%20te%20mostrar%20*modelos%20e%20valores%20exatos*%20pro%20seu%20caso%20%F0%9F%91%8D',
        icon: WhatsAppIcon,
        label: 'Falar com um especialista',
        description: 'Atendimento rápido pelo WhatsApp',
        variant: 'whatsapp',
        badge: 'Resposta em minutos',
        delay: 0.8,
    },
    {
        id: 'site',
        href: 'https://www.woodbahia.site',
        icon: Globe,
        label: 'Conheça nosso site',
        description: 'Veja todos os nossos projetos e serviços',
        variant: 'primary',
        delay: 0.95,
    },
    {
        id: 'simulador',
        href: 'https://www.woodbahia.site/simulador',
        icon: Calculator,
        label: 'Simulador de investimento',
        description: 'Descubra o valor do seu chalé ideal',
        variant: 'primary',
        badge: 'Novo',
        delay: 1.1,
    },
    {
        id: 'portfolio',
        href: 'https://www.woodbahia.site/portfolio',
        icon: ImageIcon,
        label: 'Ver portfólio de projetos',
        description: 'Galeria com todas as nossas obras',
        variant: 'default',
        delay: 1.25,
    },
    {
        id: 'modelos',
        href: 'https://www.woodbahia.site/modelos',
        icon: Grid,
        label: 'Ver modelos de chalés',
        description: 'Linha completa de projetos',
        variant: 'default',
        delay: 1.4,
    },
]

export default function App() {
    return (
        <div
            className="min-h-screen relative"
            style={{ minHeight: '100dvh' }}
        >
            {/* Gradient background */}
            <BackgroundGradient />

            {/* Main scrollable content */}
            <div className="relative z-10 min-h-screen flex flex-col items-center justify-start py-8 px-4">
                <div className="w-full max-w-sm mx-auto">

                    {/* Header */}
                    <Header />

                    {/* Section label */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="mb-3 flex items-center gap-2"
                    >
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-amber-800/30" />
                        <span className="text-xs tracking-widest uppercase font-medium" style={{ color: 'rgba(185,155,122,0.7)' }}>
                            Links em destaque
                        </span>
                        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-amber-800/30" />
                    </motion.div>

                    {/* Main buttons */}
                    <div className="flex flex-col gap-3 mb-8">
                        {MAIN_LINKS.map((link, i) => (
                            <RevealOnScroll key={link.id} direction="left" delay={i * 0.08} duration={0.5}>
                                <LinkButton {...link} />
                            </RevealOnScroll>
                        ))}
                    </div>

                    {/* Social Proof */}
                    <RevealOnScroll direction="up" delay={0.4} duration={0.8}>
                        <SocialProof />
                    </RevealOnScroll>

                    {/* Footer */}
                    <RevealOnScroll direction="fade" delay={0.1} duration={0.8}>
                        <Footer />
                    </RevealOnScroll>
                </div>
            </div>
        </div>
    )
}
