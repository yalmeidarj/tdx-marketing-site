import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import '../globals.css';
import { Toaster } from '@/components/ui/sonner';
import { Metadata } from 'next';

// app/layout.tsx or app/page.tsx
export const metadata: Metadata = {
    title: "Door-to-Door Sales Teams Across Canada | TDX Solution",
    description:
        "TDX Solution delivers ethical, data-driven door-to-door outreach across Canada. We help telecom, energy, home-service, and nonprofit campaigns convert knocks into customers through real-time tracking and expert field reps.",
    keywords: [
        "door-to-door sales",
        "outreach campaigns",
        "TDX Solution",
        "Canada sales teams",
        "ethical marketing",
        "telecom outreach",
        "energy campaigns",
        "nonprofit fundraising",
        "real-time reporting",
        "sales reps Canada"
    ],
    openGraph: {
        title: "Door-to-Door Sales Teams Across Canada | TDX Solution",
        description:
            "TDX Solution delivers data-driven outreach that converts knocks into customers across telecom, energy, home-service, and nonprofit sectors.",
        url: "https://tdx-solutions.vercel.app",
        siteName: "TDX Solution",
        images: [
            {
                url: "https://tdx-solutions.vercel.app/logo.png", 
                alt: "TDX Solution Door-to-Door Campaigns"
            }
        ],
        locale: "en_CA",
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Door-to-Door Sales Teams Across Canada | TDX Solution",
        description:
            "Data-driven outreach that delivers real results for Canadian campaigns.",
        images: ["https://tdx-solutions.vercel.app/logo.png"]
    },
    metadataBase: new URL("https://tdx-solutions.vercel.app")
};
  

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    // Ensure that the incoming `locale` is valid
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    return (
        <html lang={locale}>
            <body>
                <Toaster position="top-center" richColors />
                <NextIntlClientProvider>{children}</NextIntlClientProvider>
            </body>
        </html>
    );
}