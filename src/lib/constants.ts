import Home from "@/app/page";

export const data = {
    user:{
        name:'Abcd',
        email: 'm@example.com',
        avatar: '/avatars/abcd.jpg',
    },

    navMain:[
        {
           title:'Home',
           url:'/dashboard',
           icon: Home,
        },
        {
            title:'Templates',
            url:'/templates',
            icon: Template
         },
         {
            title:'Trash',
            url:'/trash',
            icon: Trash
         },
         {
            title:'Settings',
            url:'/settings',
            icon: Settings
         },
    ],
}
