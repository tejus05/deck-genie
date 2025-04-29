import { create} from "zustand";
import { persist, devtools } from 'zustand/middleware'


type page = "create" | "create-ai" | "create-scratch"

type PromptStore ={
    page: page
    setPage: (page: page) => void
}

const usePromptStore = create<PromptStrore>()(
    devtools(
        persist((set) => ({
            page: 'create', 
            setPage:(page: page)=>{
                set({page})
            }, 
        }),

    { name: 'prompts'}
        )
)
)
export default usePromptStore