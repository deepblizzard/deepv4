import React from 'react';

import FeatureSection from '@/components/features';
import { RainbowButton } from '@/components/magicui/rainbow-button';
import { TextAnimate } from '@/components/magicui/text-animate';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { Button } from '@/registry/new-york-v4/ui/button';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from '@/registry/new-york-v4/ui/drawer';

function About() {
    return (
        <div className='flex h-auto min-h-screen flex-col items-center justify-center p-12'>
            <h1 className='text-2xl font-bold'></h1>
            <TextAnimate className='text-2xl font-bold' by='word' animation={'slideUp'}>
                Hi there, I'm Abhyudaya, 19 years old, a full-time everyday Indian. Interested in Web/App development
                and cybersecurity.
            </TextAnimate>
            <FeatureSection />
            {/* <div className='flex h-auto w-full items-center justify-center pt-12'>
                <Drawer>
                    <DrawerTrigger>
                        <RainbowButton className='border-t-2 border-r-0 border-l-0 p-6' variant='outline'>
                            My Hobbies
                        </RainbowButton>
                    </DrawerTrigger>
                    <DrawerContent>
                        <div className='mx-auto mb-4 h-2 w-20 rounded-full bg-zinc-300 dark:bg-zinc-700'></div>
                        <div className='h-full w-full px-6'>
                        <TextGenerateEffect
                                className='flex opacity-80'
                                words='Anime, Dynamic Programming, Developing Websites, Apps and WebApps, Gaming, Functional Programming.'
                            />
                        </div>
                    </DrawerContent>
                </Drawer>
            </div> */}
        </div>
    );
}

export default About;
