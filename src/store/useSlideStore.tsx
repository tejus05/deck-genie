import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface SlideState {
    slides: Slide[]
    SetSliders: (slides: Slide[]) => void
}


export const useSlideStore = create 
(persist<SlideState>((set, get) => ({
    slides: [],
    setSlides: (slides: Slide[]) => set({ slides }),
}),
 {
    name: 'slides-storage',
}
)
)