'use client';

import { useEffect, useState } from 'react';

import { TextComponent } from '@/components/eldoraui/featurefour';
import { cn } from '@/lib/utils';

const data = [
    {
        title: 'Would you build WebApp for me?',
        content: 'Definitely.',
        srcImage:
            'https://res.cloudinary.com/eldoraui/image/upload/v1734107781/Screenshot_2024-12-13_at_10.06.08_PM_molet1.png'
    },
    {
        title: 'Free of charge?',
        content: 'Sorry. It takes efforts and resources, I dont vibe code, so its time-consuming.',
        srcImage:
            'https://res.cloudinary.com/eldoraui/image/upload/v1734107781/Screenshot_2024-12-13_at_10.06.08_PM_molet1.png'
    },
    {
        title: 'Pricing?',
        content: '$15 for single-paged WebApp, $30 for doubly-paged, $70/90+ for multiple-paged.',
        srcImage:
            'https://res.cloudinary.com/eldoraui/image/upload/v1734107781/Screenshot_2024-12-13_at_10.06.08_PM_molet1.png'
    },
    {
        title: 'Are you guys a team?',
        content: "No, I'm an Indie. Anyways, I guarantee you a fully functional Urban-Advanced WebApp.",
        srcImage:
            'https://res.cloudinary.com/eldoraui/image/upload/v1734107781/Screenshot_2024-12-13_at_10.06.08_PM_molet1.png'
    }
];

export function FAQS() {
    const [featureOpen, setFeatureOpen] = useState<number>(0);
    const [timer, setTimer] = useState<number>(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => prev + 10);
        }, 10);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (timer > 10000) {
            setFeatureOpen((prev) => (prev + 1) % data.length);
            setTimer(0);
        }
    }, [timer]);

    return (
        <div className='container mb-16'>
            <div className='mb-20 text-center'>
                <p className='mb-2 text-sm font-medium text-neutral-500 uppercase'>Questions for me?</p>

                <h2 className='mb-4 text-3xl font-semibold tracking-tighter text-neutral-800 dark:text-neutral-300'>
                    Common FAQS
                </h2>
            </div>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                <div className='space-y-6'>
                    {data.map((item, index) => (
                        <button
                            className='w-full'
                            key={item.title}
                            onClick={() => {
                                setFeatureOpen(index);
                                setTimer(0);
                            }}
                            type='button'>
                            <TextComponent
                                content={item.content}
                                isOpen={featureOpen === index}
                                loadingWidthPercent={featureOpen === index ? timer / 100 : 0}
                                number={index + 1}
                                title={item.title}
                            />
                        </button>
                    ))}
                </div>
                {/* <div className='h-full'>
                    <div className={cn('relative h-96 w-full overflow-hidden rounded-lg md:h-[500px]')}>
                        {data.map((item, index) => (
                            <img
                                alt={item.title}
                                className={cn(
                                    'absolute h-[500px] w-full transform-gpu rounded-lg object-cover transition-all duration-300',
                                    featureOpen === index ? 'scale-100' : 'scale-70',
                                    featureOpen > index ? 'translate-y-full' : ''
                                )}
                                key={item.title}
                                src={item.srcImage}
                                style={{ zIndex: data.length - index }}
                            />
                        ))}
                    </div>
                </div> */}
            </div>
        </div>
    );
}
