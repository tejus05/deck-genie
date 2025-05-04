'use client'
import { ScrollArea } from '@/components/ui/scroll-area'
import { layouts } from '@/lib/constants'
import { Layout } from '@/lib/types'
import { useSlideStore } from '@/store/useSlideStore'
import React from 'react'


export const DraggableLayotItem = ({
    component,
    icon,
    layoutType,
    name,
    type
}:Layout) => {
    
    return <div>DraggableLayoutItem</div>
}





const LayoutChooser = (props: Props) => {
    const { currentTheme } = useSlideStore()
  return (
    <ScrollArea
        className="h-[400px]"
        style={{
            backgroundColor: currentTheme.slideBackgroundColor,
        }}
        >

            <div className="p-4">
                { layouts.map(() =>(
                    <div 
                    key={group.name}
                    className="mb-b"
                    >
                        <h3 className="text-sm font-medium mb-3">{group.name}</h3>
                        <div className="grid grid-cols-3 gap-2">
                            {group.layouts.map((layout) => (
                                <DraggableLayotItem
                                    key={layout.layoutType}
                                    {...layout}
                                />
                            ))}
                    </div>
                    </div>
                ))}

            </div>
        </ScrollArea>
  )
}

export default LayoutChooser