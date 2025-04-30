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

export const containerVariants = {
   hidden : { opacity: 0},
   visible: {
      opacity: 1,
      transition: {
         staggerChildren: 0.1,
      },
   },
}

export const itemVariants = {
   hidden: { y:20, opacity: 0 },
   visible: {
      y: 0,
      opacity: 1,
      transition: {
         type: 'spring'
         stiffness: 100,
      },
   },
}

export const CreatePageCard = {
   {
      title: 'Use a',
      highlightedText: 'Template',
      description: 'Write a prompt and leave everything else for us to handle ',
      type: 'template',
   },
   {
      title: 'Generate with',
      highlightedText: 'Creative AI',
      description: 'Write a prompt and leave everything else for us to handle ',
      type: 'creative-ai',
      highlight: true,
   },
   {
      title: 'Start from',
      highlightedText: 'Scratch',
      description: 'Write a prompt and leave everything else for us to handle ',
      type: 'create-scratch',
   },
}
