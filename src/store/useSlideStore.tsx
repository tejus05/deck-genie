import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface SlideState {
    slides: Slide[]
    project: Project| null 
    setProject: (id: Project) => void
    SetSliders: (slides: Slide[]) => void
}


export const useSlideStore = create 
(persist<SlideState>(
    (set, get) => ({
        project:null,
    slides: [],
    setSlides: (slides: Slide[]) => set({ slides }),
    setProjects:(project)=> set({project}),
}),
 {
    name: 'slides-storage',
}
)
)