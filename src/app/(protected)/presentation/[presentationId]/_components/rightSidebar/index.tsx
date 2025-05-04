'use client'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { useSlideStore } from '@/store/useSlideStore'
import React from 'react'
import LayoutChooser from './tabs/LayoutChooser'

type Props = {}

const EditorSidebar = (props: Props) => {
    const { currentTheme } = useSlideStore()
    return <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-10">
        <div className="rounded-xl border-r-0 border border-background-70 shadow-lg p-2 flex flex-col items-center space-y-4">
            <Popover>
                <PopoverTrigger as Child>
                    <Buttton 
                        variant="ghost"
                        size="icon"
                        className="h-10 w-10 rounded-full"
                        >
                            <LayoutTemplete className="w-5 h-5" />
                            <span className="sr-only">Choose Layout</span>
                        </Buttton>
                </PopoverTrigger>
                <PopoverContent side="left"
                    align="center"
                    className="w-[480px] p-0"
                    >
                        <LayoutChooser/>
                    </PopoverContent>
            </Popover>
        </div>
    </div>
}

export default EditorSidebar