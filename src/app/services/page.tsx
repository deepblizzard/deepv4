import React from 'react';

import { AppleCardsCarouselDemo } from '@/components/appleCaraousel';
import { AppleCardsCarouselDemo2 } from '@/components/appleCaraousel2';
import { AppleCardsCarouselDemo3 } from '@/components/appleCaraousel3';
import { HighlighterText } from '@/components/magicui/highlighter';
import ServicesHeader from '@/components/servicesHeader';

function Services() {
    return (
        <main className='min-h-screen w-full'>
            <ServicesHeader />
            <AppleCardsCarouselDemo3 />
            <AppleCardsCarouselDemo />
            <AppleCardsCarouselDemo2 />
        </main>
    );
}

export default Services;
