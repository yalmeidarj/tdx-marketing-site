import { ArrowRight } from 'lucide-react'
import { getMessages, getTranslations } from 'next-intl/server'


export default async function Hero() {
    const t = await getTranslations(('hero'))
    const messages = await getMessages();
    return (
        <section id="home" className="relative min-h-screen flex items-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[#121852] via-[#1e2a5e] to-[#6BD8DA]" />
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
                <p className="text-sm tracking-wider uppercase text-[#C9C7C5] mb-4">{t('subheading')}</p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                    {t('title')}
                    <span className="block bg-gradient-to-r from-[#6BD8DA] to-[#FCFEFF] bg-clip-text text-transparent">
                        {t('highlight')}
                    </span>
                </h1>
                <p className="text-xl md:text-2xl text-[#C9C7C5] max-w-3xl mx-auto leading-relaxed mb-8">
                    {t('text')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#contact" className="btn-primary group">
                        {t('ctaPrimary')} <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </a>
                </div>
            </div>
        </section>
    )
}