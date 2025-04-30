import { OutlineCard } from '@/lib/types';
import create from 'zustand';
import { persist } from 'zustand/middleware';

type CreativeAIStore = {
    outlines: OutlineCard[] | []
    setCurrentAiPrompt: (prompt: string) => void
    addMultipleOutlines: (outlines: OutlineCard[]) => void
    addOutline: (outline: OutlineCard) => void
    currentAiPrompt: string
    resetOutLines: () => void
}


const useCreativeAIStore = create<CreativeAIStore>() {
    persist((set)=> ({
        currentAiPrompt: '',
        setCurrentAiPrompt: (prompt: string) => {
            set({currentAiPrompt: prompt})
        },
        outlines: [],
        addOutline: (outline: OutlineCard) => { 
            set((state) => ({ 
                outlines: [...state.outlines, outline],
            })),
        },
        addMultipleOutlines: (outlines: OutlineCard[]) => {
            set(() => ({
                outlines: [...outlines],
            }))
        },
        resetOutlines: () => {
            set({ outlines: [] })
        },
    }),
    {
        name: "creative-ai",
    })
}

export default useCreativeAIStore;