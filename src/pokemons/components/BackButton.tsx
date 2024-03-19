'use client';

import { useRouter } from 'next/navigation';
import React from 'react'

export const BackButton = () => {
    const router = useRouter();

    const goBack = () => {
        router.back()
    };

    return (
        <button
            className="middle none center mr-3 rounded-lg bg-slate-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-slate-500/20 transition-all hover:shadow-lg hover:shadow-slate-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            data-ripple-light="true"
            onClick={ goBack }
        >
            Go back
        </button>
    )
}
