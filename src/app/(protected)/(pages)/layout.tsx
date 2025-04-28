import { onAuthenticateUser } from '@/actions/user'
import AppSidebar from '@/components/ui/app-sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import React from 'react'

type Props ={children: React.ReactNode}

const Layout =async ({children}: Props) => {
        const recentProjects = await getRecentProjects();
    const checkUser = await onAuthenticateUser() 

    if(!checkUser.user){
        redirect('/sign-in')
    }


    return <SidebarProvider>
        <AppSidebar 
        user = {checkUser.user}
        recentProjects = {recentProjects.data || []} 
        />          
    </SidebarProvider>
}

export default Layout
