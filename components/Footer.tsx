import { getMessages, getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';


export default async function Footer() {
    const t = await getTranslations(('footer'));
        const messages = await getMessages();
    const sections = (messages.footer?.sections || []) as { title: string; links: string[] }[]
    return (
        <footer className="bg-[#1F1B1C] text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8">
                    <div className="md:col-span-1">
                        <Image src="/logo.png" alt="Logo" width={180} height={180} className="mb-8" />
                        <p className="text-[#C9C7C5] leading-relaxed">{t('summary')}</p>
                    </div>
                    {sections.map(({ title, links }) => (
                        <div key={title}>
                            <h1 className="font-semibold mb-4">{title}</h1>
                            <ul className="space-y-2 text-[#C9C7C5]">
                                {links.map((l) => (
                                    <li key={l}>
                                        <a href="#" className="hover:text-[#6BD8DA] transition-colors">
                                            {l}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="border-t border-[#C9C7C5]/20 mt-12 pt-8 text-center text-[#C9C7C5]">
                    <p>{t('copyright')}</p>
                </div>
                <div className="mt-4 text-xs text-center text-[#C9C7C5]">
                    
                    <p>{t('developer.description') +" "}
                        <span>
                            <Link
                                target="_blank"
                                href="https://yalmeida.vercel.app/" className="text-[#6BD8DA] hover:underline">
                                {t('developer.name')}
                        </Link>
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    )
  }