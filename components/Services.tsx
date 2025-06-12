import {
    Signal,
    Flashlight,
    Home as HomeIcon,
    HeartHandshake,
    ChevronRight,
} from "lucide-react";
import {
    Collapsible,
    CollapsibleTrigger,
    CollapsibleContent,
} from "@/components/ui/collapsible";
import { getMessages, getTranslations } from "next-intl/server";

export default async function Services() {
    const t = await getTranslations("services");
    const messages = await getMessages();
    const items = (messages.services?.items || []) as {
        title: string;
        description: string;
    }[];

    const icons = [Signal, Flashlight, HomeIcon, HeartHandshake];

    return (
        <section id="services" className="py-20 lg:py-32 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16 lg:mb-20">
                    <h2 className="section-title">{t("title")}</h2>
                    <p className="section-sub">{t("subtitle")}</p>
                </div>

                {/* Cards */}
                <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
                    {items.map(({ title, description }, idx) => {
                        const Icon = icons[idx] || Signal;

                        return (
                            <Collapsible
                                key={title}
                                className="flex flex-col justify-between card group transition hover:-translate-y-2"
                            >
                                {/* Icon + title */}
                                <div className="icon-wrapper group-hover:scale-110 mb-6">
                                    <Icon className="text-white" size={32} />
                                </div>
                                <h3 className="card-title mb-2">{title}</h3>

                                {/* Description – clamped until open */}
                                <CollapsibleContent
                                    asChild                                      
                                    forceMount                                  
                                >
                                    <p
                                        className={`
                        card-text
                        line-clamp-3
                        transition-all                        
                        group-data-[state=open]:line-clamp-none
                      `}
                                    >
                                        {description}
                                    </p>
                                </CollapsibleContent>

                                {/* Trigger */}
                                <CollapsibleTrigger
                                    className="text-green-900 learn-more inline-flex items-bottom  mt-4
                               group-data-[state=open]:font-medium cursor-pointer"
                                >
                                    <span>{t("more")}</span>
                                    <ChevronRight
                                        size={16}
                                        className="ml-1 transition-transform duration-200
                                 group-data-[state=open]:translate-x-1
                                 group-data-[state=open]:rotate-90"
                                    />
                                </CollapsibleTrigger>
                            </Collapsible>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
  