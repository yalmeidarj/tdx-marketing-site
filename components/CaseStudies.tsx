import { Star } from 'lucide-react'
import { getMessages, getTranslations } from 'next-intl/server';

export default async function CaseStudies() {
    const t = await getTranslations(('cases'));
    const messages = await getMessages();
    const items = (messages.cases?.items || []) as { company: string; problem: string; solution: string; result: string }[]
    return (
        <section id="cases" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="section-title">{t('title')}</h2>
                <p className="section-sub max-w-2xl mx-auto">{t('subtitle')}</p>
                <div className="mt-16 grid md:grid-cols-2 gap-12">
                    {items.map(({ company, problem, solution, result }) => (
                        <div key={company} className="relative bg-white p-8 rounded-xl shadow-lg">
                            <Star className="absolute -top-5 left-1/2 -translate-x-1/2 text-[#6BD8DA]" size={40} />
                            <h3 className="text-xl font-bold text-[#1F1B1C] mb-4">{company}</h3>
                            <p className="text-[#6B7280] mb-2"><strong>Challenge: </strong>{problem}</p>
                            <p className="text-[#6B7280] mb-2"><strong>Solution: </strong>{solution}</p>
                            <p className="text-[#1F1B1C] font-semibold"><strong>Result: </strong>{result}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}