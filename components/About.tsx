import { Star } from 'lucide-react'
import { getMessages, getTranslations } from 'next-intl/server';

export default async function About() {
    const t = await getTranslations(('about'));
    const messages = await getMessages();
    const points = (messages.about?.points || []) as string[]
    return (
        <section id="about" className="py-20 bg-[#FCFEFF]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="section-title text-left">{t('title')}</h2>
                    <p className="text-lg text-[#6B7280] mb-8 leading-relaxed">{t('text')}</p>
                    <div className="space-y-4">
                        {points.map((item) => (
                            <div key={item} className="flex items-center">
                                <Star className="text-[#6BD8DA] mr-3" size={20} />
                                <span className="text-[#1F1B1C]">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative">
                    <div className="bg-gradient-to-br from-[#6BD8DA] to-[#121852] rounded-2xl p-8 text-white">
                        <h3 className="text-2xl font-bold mb-4">{t('missionTitle')}</h3>
                        <p className="text-[#C9C7C5] leading-relaxed">{t('missionText')}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}