'use client'
import { itemVariants, themes } from '@/lib/constants'
import { useSlideStore } from '@/store/useSlideStore'
import { JsonValue } from '@prisma/client/runtime/library'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import React from 'react'
import ThumnailPreveiw from './thumbnail-preveiw'
import { timeAgo } from '@/lib/utils'
import { AlertDialog } from '@/components/ui/alert-dialog'
import AlertDialogBox from '../alert-dialog'
import { Button } from '@/components/ui/button'

type props = {
    projectId: string
    title: string 
    createdAt: string
    src: string
    isDelete?: boolean
    slideData: JsonValue
    themeName: string
}

const projectCard = ({
    createdAt,
    projectId,
    slideData,
    src,
    title,
    themeName,
    isDelete
    }: Props) => {

        const [loading, setLoading] = useState(false)
        const [open, setOpen] = useState(false)
        const { setSlides } = useSlideStore()
        const router = useRouter()

        const handleNavigation = () => {
            setSlides(JSON.parse(JSON.stringify(slideData)))
            router.push(`/presentation/${projectId}`)
        }

    const theme = themes.find((theme) => theme.name===themeName) || themes[0]

    const handleRecover = async () => {
        setLoading(true)
        if(!projectId)
        {
            setLoading(false)
            toast('Error', {
                description: 'Project not found.',
            })
            return
        }
        try{
            const res = await recoverProject(projectId);
        }catch(error){

        }
    } 

    return ( 
    <motion.div
    className={`group w-full flex flex-col gap-y-3 rounded-xl p-3 transition-colors ${
        !isDelete && 'hover:bg-muted/50'
    }`}
    variants = {itemVariants}
    >
        <div className="relative aspect-[16/10] overflow-hidden rounded-lg cursor-pointer"
        onClick={handleNavigation}
        >
            <ThumnailPreveiw 
                theme={theme}
                //WIP: Add the slide data
               // slide={JSON.parse(JSON.stringify(slideData))?.[0]}
            />
        </div>
        <div className="w-full">
            <div className="space-y-1">
                <h3 className="font-semibold text-base text-primary line-clamp-1">
                    {title} This is the title I want to see.
                </h3>
                <div className="flex w-full justify-between items-center gap-2">
                    <p
                     className="text-sm text-muted-foreground"
                     suppressHydrationWarning
                    >
                        { timeAgo(createdAt)}
                    </p>
                    {/* {isDelete ? ( */}
                        <AlertDialogBox description="This will recover your project and restore your data."
                        className="bg-green-500 text-white dark:bg-green-600 hover:bg-green-600 dark:hover:bg-green-700"
                        loading={loading}
                        open={open}
                        onClick={handleRecover}
                        handleOpen={() => setOpen(!open)}
                        >
                            <Button
                                size="sm"
                                variant="ghost"
                                className="bg-background-80 dark:hover:bg-background-90"
                                disabled={loading}
                            >
                                Recover
                            </Button>
                        </AlertDialogBox>
                    {/* ) : ( 
                        '' 
                    )} */}
                </div>
            </div>
        </div>
    </motion.div>
    )
}

export default projectCard 