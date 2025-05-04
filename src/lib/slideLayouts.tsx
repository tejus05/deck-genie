import { v4 as uuidv4 } from 'uuid';
import { ContentType, LayoutSlides } from '@/lib/types';



export const BlankCard = {
    slideName: 'Blank Card',
    type: 'blank-card',
    className: 'p-8 mx-auto flex justify-center items-center min-h-[200px]',
    content: {
        id: uuidv4(),
        type: 'column' as  ContentType,
        name: 'Column',
        content: [
            {
                id: uuidv4(),
                type: 'title' as ContentType,
                name: 'Title',
                content: '',
                placeholder: 'Untitled Card',
            },
        ],
    }

}

export const AccentLeft = {
    slideName: 'Accent Left',
    type: 'accent-left',
    className: 'min-h-[300px]',
    content: {
        id: uuidv4(),
        type: 'column' as  ContentType,
        name: 'Column',
        restrictDropTo: true,
        content: [
            {
                id: uuidv4(),
                type: 'resizable-column' as ContentType,
                name: 'Resizable Column',
                restrictToDrop: true,
                content: [
                    {
                        id: uuidv4(),
                        type: 'image' as ContentType,
                        name: 'Image',
                        content: '',
                        alt: 'Title',
                    },
                {
                id: uuidv4(),
                type: 'column' as ContentType,
                name: 'Column',
                content: [
                    {
                        id: uuidv4(),
                        type: 'heading1' as ContentType,
                        name: 'Heading 1',
                        content: '',
                        placeholder: 'HEADING 1',
            },
            {
                id: uuidv4(),
                type: 'paragraph' as ContentType,
                name: 'Paragraph',
                content: '',
                placeholder: 'Description',
            },
        ],
        className: 'w-full h-full p-8 flex justify-center items-center',
        placeholder: 'Heading1',
    }
    ],
},
],
},
}


export const AccentRight = {
    slideName: 'Accent Right',
    type: 'accent-right',
    className: 'min-h-[300px]',
    content: {
        id: uuidv4(),
        type: 'column' as  ContentType,
        name: 'Column',
        restrictDropTo: true,
        content: [
            {
                id: uuidv4(),
                type: 'resizable-column' as ContentType,
                name: 'Resizable Column',
                restrictToDrop: true,
                content: [
                    {
                        id: uuidv4(),
                        type: 'column' as ContentType,
                        name: 'Column',
                        content: [
                            {
                                id: uuidv4(),
                                type: 'heading1' as ContentType,
                                name: 'Heading 1',
                                content: '',
                                placeholder: 'HEADING 1',
                            },
                            {
                                id: uuidv4(),
                                type: 'paragraph' as ContentType,
                                name: 'Paragraph',
                                content: '',
                                placeholder: 'Description',
                            },
                        ],
                        className:
                            'w-full h-full p-8 flex justify-center items-center',
                        placeholder: 'Heading1',
                    },
                ],
            },
            {
                id: uuidv4(),
                type: 'image' as ContentType,
                name: 'Image',
                content: '',
                alt: 'Title',
            },
        ],
    },
}

export const TwoImageColumns = {
    slideName: 'Two Image Columns',
    type: 'two-image-columns',
    className: 'min-h-[300px]',
    content: {
        id: uuidv4(),
        type: 'column' as  ContentType,
        name: 'Column',
        content: [
            {
                id: uuidv4(),
                type: 'multiColumn' as ContentType,
                name: 'Multi Column',
                content: [
                    {
                        id: uuidv4(),
                        type: 'image' as ContentType,
                        name: 'Image',
                        content: '',
                        alt: 'Title',
                    },
                    {
                        id: uuidv4(),
                        type: 'image' as ContentType,
                        name: 'Image',
                        content: '',
                        alt: 'Title',
                    },
                ],
            },
        ],
    },
}

export const ThreeImageColumns = {
    slideName: 'Three Image Columns',
    type: 'three-image-columns',
    className: 'min-h-[300px]',
    content: {
        id: uuidv4(),
        type: 'column' as  ContentType,
        name: 'Column',
        content: [
            {
                id: uuidv4(),
                type: 'multiColumn' as ContentType,
                name: 'Multi Column',
                content: [
                    {
                        id: uuidv4(),
                        type: 'image' as ContentType,
                        name: 'Image',
                        content: '',
                        alt: 'Title',
                    },
                    {
                        id: uuidv4(),
                        type: 'image' as ContentType,
                        name: 'Image',
                        content: '',
                        alt: 'Title',
                    },
                    {
                        id: uuidv4(),
                        type: 'image' as ContentType,
                        name: 'Image',
                        content: '',
                        alt: 'Title',
                    },
                ],
            },
        ],
    },
}




