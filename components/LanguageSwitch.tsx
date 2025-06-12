'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Globe, ChevronDown } from 'lucide-react';

/* -------------------------------------------------------------------------- */
/* Shared i18n constants – exactly the same list used in i18n-config.ts       */
/* -------------------------------------------------------------------------- */
const LANGS = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'pt-BR', name: 'Português', flag: '🇧🇷' },
] as const;

type Lang = (typeof LANGS)[number];

/* -------------------------------------------------------------------------- */

interface Props {
    isScrolled: boolean;          // keeps your header styling intact
}

export default function LanguageSwitch({ isScrolled }: Props) {
    const router = useRouter();
    const pathname = usePathname();      // e.g. /fr/services or /en
    const dropdown = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState(false);

    /* Figure out which locale is active from the first path segment */
    const current: Lang = useMemo(() => {
        const seg = pathname.split('/')[1];          // '' | 'en' | 'fr' …
        return LANGS.find((l) => l.code === seg) ?? LANGS[0];
    }, [pathname]);

    /* ---------------------------------------------------------------------- */
    /* Click-outside to close                                                 */
    /* ---------------------------------------------------------------------- */
    useEffect(() => {
        const onClick = (e: MouseEvent) => {
            if (dropdown.current && !dropdown.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        if (open) document.addEventListener('mousedown', onClick);
        return () => document.removeEventListener('mousedown', onClick);
    }, [open]);

    /* ---------------------------------------------------------------------- */
    /* Change locale                                                          */
    /* ---------------------------------------------------------------------- */
    function changeLanguage(lang: Lang) {
        if (lang.code === current.code) {
            setOpen(false);
            return;
        }

        // 1. Persist visitor choice for middleware (1 year)
        document.cookie = `tdx_locale=${lang.code};path=/;max-age=31536000`;

        // 2. Compute the same path but under the new locale
        //    Strip the current locale prefix (if any) and prepend the new one.
        const [, , ...rest] = pathname.split('/');           // drop '' and locale
        const newPath = `/${lang.code}/${rest.join('/')}`.replace(/\/+$/, ''); // rm trailing /

        router.push(newPath || `/${lang.code}`);
        setOpen(false);
    }

    /* ---------------------------------------------------------------------- */
    /* UI                                                                     */
    /* ---------------------------------------------------------------------- */
    return (
        <div ref={dropdown} className="relative">
            {/* Trigger button */}
            <button
                onClick={() => setOpen(!open)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 group ${isScrolled
                        ? 'text-[#1F1B1C] hover:bg-[#6BD8DA]/10'
                        : 'text-white/90 hover:bg-white/10'
                    }`}
                aria-label="Select language"
                aria-expanded={open}
                aria-haspopup="true"
            >
                <Globe size={18} className="text-[#6BD8DA]" />
                <span className="text-sm font-medium hidden sm:inline">
                    {current.flag} {current.name}
                </span>
                <span className="text-sm font-medium sm:hidden">{current.flag}</span>
                <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                />
            </button>

            {/* Dropdown */}
            <div
                className={`absolute top-full right-0 mt-2 w-48 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-[#C9C7C5]/20 overflow-hidden z-50 transition-all duration-200 ${open ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'
                    }`}
            >
                {LANGS.map((lang) => (
                    <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition-colors ${current.code === lang.code
                                ? 'bg-[#6BD8DA]/10 text-[#121852] font-medium'
                                : 'text-[#1F1B1C] hover:bg-[#6BD8DA]/5'
                            }`}
                    >
                        <span className="text-lg">{lang.flag}</span>
                        <span className="text-sm font-medium">{lang.name}</span>
                        {current.code === lang.code && (
                            <div className="ml-auto w-2 h-2 bg-[#6BD8DA] rounded-full" />
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
}
