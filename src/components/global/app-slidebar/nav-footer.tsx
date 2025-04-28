'use client'

import { SidebarMenu } from '@/components/ui/sidebar'
import { useUser } from '@clerk/nextjs'
import { User } from '@prisma/client'
import React, { useState } from 'react'

type Props = {}

const NavFooter = ({prismaUser}: { prismaUser: User }) => {
    const { isLoaded, isSignedIn, user } = useUser()
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    if(!isLoaded || !isSignedIn) {
        return null
    }



  return <SidebarMenu>
    <SidebarMenuItem>
        <div className = "flex flex-col gap-y-6 items-start group-data-[collapsible=icon]:hidden">
            {!prismaUser.subcription && (
                <div className="flex flex-col items-start p-2 pb-3 gap-4 bg-background-80"> 
                        <div className = "flex flex-col items-start gap-1">
                        <p className = "text-base font-bold">
                            Get <span className = "text-vivid">Creative AI</span>
                        </p>
                        </div>
                </div>
            )}
        </div>
    </SidebarMenuItem>
  </SidebarMenu>

}
export default NavFooter