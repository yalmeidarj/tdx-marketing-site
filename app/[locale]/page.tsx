import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import App from '@/components/App';

export default function HomePage() {
    const t = useTranslations('HomePage');
    return (
        <div>
            <App />
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