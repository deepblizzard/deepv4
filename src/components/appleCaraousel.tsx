'use client';

import React from 'react';

import { Card, Carousel } from '@/components/ui/apple-cards-carousel';

import ShimmerText from './kokonutui/shimmer-text';

export function AppleCardsCarouselDemo() {
    const cards = data.map((card, index) => <Card key={card.src} card={card} index={index} layout={true} />);

    return (
        <div className='h-full w-full px-8 py-20'>
            <p className='text-3xl font-black'> Productivity</p>
            <Carousel items={cards} />
        </div>
    );
}

const DummyContent = () => {
    return (
        <>
            {[...new Array(3).fill(1)].map((_, index) => {
                return (
                    <div key={'dummy-content' + index} className='mb-4 rounded-3xl bg-[#F5F5F7] p-8 md:p-14'>
                        {/* <p className='mx-auto max-w-3xl font-sans text-base text-neutral-600 md:text-2xl'>
                            <span className='font-bold text-neutral-700'>
                                The first rule of Apple club is that you boast about Apple club.
                            </span>{' '}
                            Keep a journal, quickly jot down a grocery list, and take amazing class notes. Want to
                            convert those notes to text? No problem. Langotiya jeetu ka mara hua yaar is ready to
                            capture every thought.
                        </p>
                        <img
                            src='https://assets.aceternity.com/macbook.png'
                            alt='Macbook mockup from Aceternity UI'
                            height='500'
                            width='500'
                            className='mx-auto h-full w-full object-contain md:h-1/2 md:w-1/2'
                        /> */}
                    </div>
                );
            })}
        </>
    );
};

const data = [
    {
        category: 'DeepServices_PTY',
        title: 'DeepNotebooks',
        src: '/deepservices.jpg',
        content: <DummyContent />
    },
    {
        category: 'DeepServices_PTY',
        title: 'DeepNotes',
        src: '/deepservices.jpg',
        content: <DummyContent />
    },
    {
        category: 'DeepServices_PTY',
        title: 'DeepProjects',
        src: '/deepservices.jpg',
        content: <DummyContent />
    },
    {
        category: 'DeepServices_PTY',
        title: 'DeepTasks',
        src: '/deepservices.jpg',
        content: <DummyContent />
    }
];
