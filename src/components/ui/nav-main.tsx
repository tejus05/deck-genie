"use client"
import React from 'react'
import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '../sidebar'

type Props = {}

const NavMain = ({items,
}: {
    items:{
        title:string 
        url:string 
        icon: React.FC<React.SVGProps<SVGSVGElement>>
        isActive?: boolean
        items?:{
            title:string 
            url:string
        }[]
    }[]
}) => {
  const pathname = usePathname()  
    return (
    <SidebarGroup className="p-0">
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton 
                asChild 
                tooltip={'TEST'} 
                className={`${pathname.includes('TEST') &&
                'bg-background-80'}`}>
                    <Link 
                    href={'TEST'}
                    className={`text-lg ${
                        pathname.includes('TEST') && 'font-bold'
                    }`}>
                        <Clock className="text-lg"/>
                        <span>Test Sidebar item</span>
                    </Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
    </SidebarGroup>
    )
}

export default NavMain