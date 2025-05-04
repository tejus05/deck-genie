import React from 'react';

export function BlankCardIcon() {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="w-3/4 h-2 bg-gray-200 rounded"/>
        </div>
    )
}

export function ImageAndTextIcon() {
    return (
        <div className="w-full half-full flex gap-2">
            <div className="w-1/2 bg-gray-200 rounded" />
            <div className="w-1/2 flex flex-col gap-1">
                <div className="h-2 bg-gray-200 rounded w-full" />
                <div className="h-2 bg-gray-200 rounded w-2/3" />
            </div>
        </div>
    )
}

export function TextAndImageIcon() {
    return (
        <div className="w-full half-full flex gap-2">
            <div className="w-1/2 flex flex-col gap-1">
                <div className="h-2 bg-gray-200 rounded w-full" />
                <div className="h-2 bg-gray-200 rounded w-2/3" />
            </div>
            <div className="w-1/2 bg-gray-200 rounded" />
        </div>
    )
}

export function TwoColumnIcon() {
    return (
        <div className="w-full h-full flex gap-3 flex-col items-center justify-center">
            <div className="w-full h-4 bg-gray-200 rounded" />
            <div className="w-full h-full flex gap-2">
                {
                    Array.from({ length: 2}, (_, i) => (
                        <div 
                        className="w-1/2 flex flex-col gap-1"
                        key={i}
                        >
                            <div className="h-2 bg-gray-200 rounded w-full" />
                            <div className="h-2 bg-gray-200 rounded w-full" />
                            <div className="h-2 bg-gray-200 rounded w-2/3" />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}


export function ThreeColumnIcon() {
    return (
        <div className="w-full h-full flex gap-3 flex-col items-center justify-center">
            <div className="w-full h-4 bg-gray-200 rounded" />
            <div className="w-full h-full flex gap-2">
                {
                    Array.from({ length: 3}, (_, i) => (
                        <div 
                        className="w-1/2 flex flex-col gap-1"
                        key={i}
                        >
                            <div className="h-2 bg-gray-200 rounded w-full" />
                            <div className="h-2 bg-gray-200 rounded w-full" />
                            <div className="h-2 bg-gray-200 rounded w-2/3" />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export function FourColumnIcon() {
    return (
        <div className="w-full h-full flex gap-3 flex-col items-center justify-center">
            <div className="w-full h-4 bg-gray-200 rounded" />
            <div className="w-full h-full flex gap-2">
                {
                    Array.from({ length: 4}, (_, i) => (
                        <div 
                        className="w-1/2 flex flex-col gap-1"
                        key={i}
                        >
                            <div className="h-2 bg-gray-200 rounded w-full" />
                            <div className="h-2 bg-gray-200 rounded w-full" />
                            <div className="h-2 bg-gray-200 rounded w-2/3" />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export function TwoColumnsWithHeadingsIcon() {
    return (
        <div className="w-full h-full flex gap-3 flex-col items-center justify-center">
            <div className="w-full h-4 bg-gray-200 rounded" />
            <div className="w-full h-full flex gap-2">
                {
                    Array.from({ length: 2}, (_, i) => (
                        <div 
                        className="w-1/2 flex flex-col gap-1"
                        key={i}
                        >
                            <div className="h-2 bg-gray-200 rounded w-full" />
                            <div className="h-1 bg-gray-200 rounded w-full" />
                            <div className="h-1 bg-gray-200 rounded w-full" />
                            <div className="h-1 bg-gray-200 rounded w-2/3" />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export function ThreeColumnsWithHeadingsIcon() {
    return (
        <div className="w-full h-full flex gap-3 flex-col items-center justify-center">
            <div className="w-full h-4 bg-gray-200 rounded" />
            <div className="w-full h-full flex gap-2">
                {
                    Array.from({ length: 2}, (_, i) => (
                        <div 
                        className="w-1/2 flex flex-col gap-1"
                        key={i}
                        >
                            <div className="h-2 bg-gray-200 rounded w-full" />
                            <div className="h-1 bg-gray-200 rounded w-full" />
                            <div className="h-1 bg-gray-200 rounded w-full" />
                            <div className="h-1 bg-gray-200 rounded w-2/3" />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export function BulletsIcon() {
    return (
        <div className="w-full h-full flex flex-col gap-1">
            <div className="h-3 bg-gray-300 rounded w-3/4 mb-1" />
                {
                    [...Array(3)].map((_,i) => (
                        <div 
                        key={i}
                        className="flex gap-2 items-center"
                        >
                            <div className="h-1 w-1 bg-gray-200 rounded-full" />
                            <div className="h-2 bg-gray-200 rounded flex-1" />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export function TwoImageColumnsIcon() {
    return (
        <div className="w-full h-full flex flex-col gap-1">
            <div className="w-full h-3 bg-gray-200 rounded" />
            <div className="w-full h-full flex gap-2">
                {
                    Array.from({ length: 2}, (_, i) => (
                        <div 
                        className="w-1/2 flex flex-col gap-1"
                        key={i}
                        >
                            <div className="h-2 bg-gray-200 rounded w-full" />
                            <div className="h-1 bg-gray-200 rounded w-full" />
                            <div className="h-1 bg-gray-200 rounded w-full" />
                            <div className="h-1 bg-gray-200 rounded w-2/3" />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export function ThreeImageColumnsIcon() {
    return (
        <div className="w-full h-full flex flex-col gap-1">
            <div className="w-full h-3 bg-gray-200 rounded" />
            <div className="w-full h-8 bg-gray-200 rounded flex justify-center items-center"></div>
            <div className="w-full h-full flex gap-2">
                {
                    Array.from({ length: 3}, (_, i) => (
                        <div 
                        className="w-1/2 flex flex-col gap-1"
                        key={i}
                        >
                            <div className="h-2 bg-gray-200 rounded w-full" />
                            <div className="h-1 bg-gray-200 rounded w-full" />
                            <div className="h-1 bg-gray-200 rounded w-full" />
                            <div className="h-1 bg-gray-200 rounded w-2/3" />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}