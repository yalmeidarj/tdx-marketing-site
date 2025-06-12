// components/contact-form.tsx
'use client';

import * as React from 'react';
import { toast } from 'sonner';          // 👈 Sonner aqui!

interface Props {
    action: string;
    placeholders: {
        first: string;
        last: string;
        email: string;
        message: string;
        send: string;
    };
}

export default function ContactForm({ action, placeholders }: Props) {
    const [submitting, setSubmitting] = React.useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setSubmitting(true);

        const form = e.currentTarget;
        const res = await fetch(action, { method: 'POST', body: new FormData(form) });
        const { ok } = await res.json();

        if (ok) {
            toast.success('Mensagem enviada! 🎉');
            form.reset();
        } else {
            toast.error('Ops! Não foi possível enviar. Tente de novo.');
        }
        setSubmitting(false);
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <input name="first" className="input" placeholder={placeholders.first} required />
            <input name="last" className="input" placeholder={placeholders.last} required />
            <input name="email" className="input" placeholder={placeholders.email} type="email" required />
            <textarea
                name="message"
                className="input h-32 resize-none"
                placeholder={placeholders.message}
                required
            />
            <button className="btn-primary w-full" disabled={submitting}>
                {submitting ? '…' : placeholders.send}
            </button>
        </form>
    );
}
