import React from 'react';

import { Button } from '@/registry/new-york-v4/ui/button';

import { HighlighterText } from './magicui/highlighter';
import { PulsatingButton } from './magicui/pulsating-button';
import { SparklesText } from './magicui/sparkles-text';

function ServicesHeader() {
    return (
        <div className='mt-20 flex flex-col items-center justify-center gap-5'>
            <div className='text-center'>
                <SparklesText sparklesCount={8}>DeepServices</SparklesText>
            </div>
            <Button variant={'outline'}>Beta</Button>
        </div>
    );
}

export default ServicesHeader;
