import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import React from 'react'

type Props = {
    children: React.ReactNode
    className?: string
    description: string
    loading?: boolean
    onclick?: () => void
    open: boolean
    handleOpen: () => void
}

const AlertDialogBox = ({
    children,
    className,
    description,
    loading = false,
    onclick,
    handleOpen,
    open,
}: Props) => {
  return (
    <AlertDialog
        open={open}
        onOpenChange={handleOpen}
    >
     <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
    <AlertDialogContent> 
        <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
    <AlertDialogFooter>
    <AlertDialogCancel>Cancel</AlertDialogCancel>
    <Button
        variant={'destructive'}
        className={`${className}`}
        onClick={onclick}
    >
        {loading ? (
        <>
            <Loader2 className="animate-spin" />
            Loading...
            </>
        ):(
            'Continue'
        )}
    </Button>
    </AlertDialogFooter>
    </AlertDialogContent>
    </AlertDialog>
  )
}

export default AlertDialogBox