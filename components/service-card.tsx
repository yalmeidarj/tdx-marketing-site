// components/service-card.tsx
'use client';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface Props {
    icon: React.ReactNode;
    title: string;
    description: string;
    maxHeight?: string;              
}

export default function ServiceCard({
    icon: Icon,
    title,
    description,
    maxHeight = 'max-h-60',          
}: Props) {
    const [open, setOpen] = useState(false);

    return (
        <Collapsible open={open} onOpenChange={setOpen} asChild>
            <div
                className={`card group hover:-translate-y-2 transition ${maxHeight} overflow-hidden`}
            >
                <div className="icon-wrapper group-hover:scale-110 mb-6">
                    <Icon className="text-white" size={32} />
                </div>

                <h3 className="card-title">{title}</h3>

                {/* texto que pode crescer */}
                <CollapsibleContent asChild>
                    <p className="card-text pb-4">{description}</p>
                </CollapsibleContent>

                {/* trigger */}
                <CollapsibleTrigger asChild>
                    <button
                        className="flex items-center text-sm font-medium text-primary hover:underline focus:outline-none"
                    >
                        {open ? 'Ver menos' : 'Saiba mais'}
                        <ChevronRight
                            size={16}
                            className={`ml-1 transition-transform ${open ? 'rotate-90' : 'translate-x-1 group-hover:translate-x-2'}`}
                        />
                    </button>
                </CollapsibleTrigger>
            </div>
        </Collapsible>
    );
}
