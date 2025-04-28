import { onAuthenticateUser } from '@/actions/user'
import AppSidebar from '@/components/ui/app-sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import React from 'react'

type Props ={children: React.ReactNode}

const Layout =async ({children}: Props) => {
        //const recent Projects = await getRecentProjects();
    const checkUser = await onAuthenticateUser() 

    if(!checkUser.user){
        redirect('/sign-in')
    }


    return <SidebarProvider>
        <AppSidebar>
            
        </AppSidebar>
    </SidebarProvider>
}

export default Layout
