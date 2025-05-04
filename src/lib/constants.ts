import Home from "@/app/page";
import { LayoutGroup } from "./types";
import { BlankCardIcon, ImageAndTextIcon, TextAndImageIcon } from "./iconsComponent";

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

export const layouts: LayoutGroup[] = [
   {
      name: 'Basic',
      layouts: [
         {
            name: 'Blank card',
            icon: BlankCardIcon,
            type: 'layout',
            layoutType: 'blank-card',
            component: BlankCard,
         },
         {
            name: 'Image and text',
            icon: ImageAndTextIcon,
            type: 'layout',
            layoutType: 'imageAndText',
            component: ImageAndText,
         }
         {
            name: 'Text and image',
            icon: TextAndImageIcon,
            type: 'layout',
            layoutType: 'textAndImage',
            component: TextAndImage,
         },
         {
            name: 'Two images',
            icon: Two,
            type: 'layout',
            layoutType: 'twoImages',
            component: TwoImages,
         },
         {
            name: 'Two text',
            icon: TwoTextIcon,
            type: 'layout',
            layoutType: 'twoText',
            component: TwoText,
         },
         {
            name: 'Three text',
            icon: ThreeTextIcon,
            type: 'layout',
            layoutType: 'threeText',
            component: ThreeText,
         }
         
      ]
   }
