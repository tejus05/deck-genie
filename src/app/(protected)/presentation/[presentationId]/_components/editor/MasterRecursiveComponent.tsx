'use client'
import { Heading1 } from '@/components/global/editor/components/Headings';
import { ContentItem } from '@/lib/types'
import {motion} from 'framer-motion'
import React, {useCallback} from 'react'

type MasterRecursiveComponentProps = {
  content: ContentItem;
  onContentChange: (
    contentId: string,
    newContent: string | string[] | string[][]
  ) => void;
  isPreview?: boolean;
  isEditable?: boolean;
  slideId: string;
  index?: number;
};


const ContentRenderer: React.FC<MasterRecursiveComponentProps> = React.memo(
  ({ content, onContentChange, slideId, index,isPreview,isEditable }) => {
    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLTextAreaElement>) => {
          onContentChange(content.id, e.target.value);
        },
        [content.id, onContentChange]
      );
      
      const commonProps = {
        value: content.content as string,
        placeholder: content.placeholder,
        onChange: handleChange,
        isPreview: isPreview,
      }
      const animationProps = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
      }

    switch (content.type) {
      case 'heading1':
        return <motion.div className="w-full h-full">
            <Heading1 {...commonProps}/>
        </motion.div>;
      default:
        return <h1>Nothing</h1>
    }
  }
);


ContentRenderer.displayName= 'ContentRenderer'

export const MasterRecursiveComponent : React.FC<MasterRecursiveComponentProps>
=

