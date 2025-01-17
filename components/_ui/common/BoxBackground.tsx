import React from 'react'
import { Boxes } from './background-boxes'
import { cn } from '@/utils/cn'
import Button from '../button'
import { BOX_BACKGROUND_CONTEXT } from '@/services/data'

function BoxBackground() {
    return (
        <div className="hidden lg:flex h-96 relative w-full overflow-hidden bg-slate-900  flex-col items-center justify-center my-[6rem]">
            <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

            <Boxes />
            <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
                {BOX_BACKGROUND_CONTEXT.title}
            </h1>
            <p className="text-center mt-2 w-1/2 text-neutral-300 relative z-20 my-6">
                {BOX_BACKGROUND_CONTEXT.description}
            </p>
            <Button
                title="Request An Estimate"
                classsName="py-3 z-50"
            />
        </div>
    )
}

export default BoxBackground