'use client'
import React from 'react'
import { useRouter } from 'next/router'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { User } from '@prisma/client'

type Props = {}

const NewProjectButton = ({user}: {user:User}) => {
    
    //WIP: Handle click needs completion
    const router = useRouter()
  
    return ( <Button
        className="rounded-lg font-semibold"
        disabled={!user.subcription}
        onClick={() => router.push('/create-page')}
        >
        <Plus />
        New Project
    </Button>
    )
}

export default NewProjectButton
