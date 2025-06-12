import { UserPlus, School, Truck, BarChart2 } from 'lucide-react'
import { getMessages, getTranslations } from 'next-intl/server';

export default async function Process() {
    const t = await getTranslations(('process'));
        const messages = await getMessages();
    const steps = (messages.process?.steps || []) as { title: string; text: string }[]
    const icons = [UserPlus, School, Truck, BarChart2]
    return (
        <section id="process" className="py-20 bg-[#FCFEFF]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="section-title">{t('title')}</h2>
                <p className="section-sub max-w-2xl mx-auto">{t('subtitle')}</p>
                <div className="mt-16 grid md:grid-cols-4 gap-8">
                    {steps.map(({ title, text }, idx) => {
                        const Icon = icons[idx] || UserPlus
                        return (
                            <div key={title} className="flex flex-col items-center text-center">
                                <div className="icon-wrapper mb-6">
                                    <Icon className="text-white" size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-[#1F1B1C] mb-2">{title}</h3>
                                <p className="text-[#6B7280] leading-relaxed max-w-xs">{text}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}