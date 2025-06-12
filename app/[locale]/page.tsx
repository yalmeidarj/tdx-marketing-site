import About from '@/components/About';
import CaseStudies from '@/components/CaseStudies';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Process from '@/components/Process';
import Proof from '@/components/Proof';
import Services from '@/components/Services';
import Contact from '@/components/Contact';

export default function HomePage() {
    return (
        <div className="min-h-screen bg-white scroll-smooth">
            <Header />
            <Hero />
            <Proof />
            <Services />
            <Process />
            <CaseStudies />
            <About />
            <Contact />
            <Footer />
        </div>
    );
}

// In case of async components, you can use the
//  awaitable getTranslations function instead:

// import { getTranslations } from 'next-intl/server';

// export default async function HomePage() {
//     const t = await getTranslations('HomePage');
//     return <h1>{t('title')}</h1>;
// }