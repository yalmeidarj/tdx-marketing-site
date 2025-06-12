import { getMessages } from 'next-intl/server';

export default async function Proof() {
    const messages = await getMessages();
    const stats = (messages.proof?.stats || []) as { number: string; label: string }[]
    return (
        <section className="py-16 bg-[#FCFEFF]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map(({ number, label }) => (
                    <div key={label} className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-[#121852] mb-2">{number}</div>
                        <div className="text-[#6B7280] font-medium">{label}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}