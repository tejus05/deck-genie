'use client'
import { Heading1 } from '@/components/global/editor/components/Headings';
import { ContentItem } from '@/lib/types'
import {motion} from 'framer-motion'
import React, {useCallback} from 'react'
import { DropZone } from './Editor';

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
        return( <motion.div className="w-full h-full"
          {...animationProps}
          >
            <Heading1 {...commonProps}/>
        </motion.div>
        )
        case 'heading2':
          return( <motion.div className="w-full h-full"
            {...animationProps}
            >
              <Heading2 {...commonProps}/>
          </motion.div>
          )
          case 'heading3':
            return( <motion.div className="w-full h-full"
              {...animationProps}
              >
                <Heading3 {...commonProps}/>
            </motion.div>
            )
            case 'heading4':
              return( <motion.div className="w-full h-full"
                {...animationProps}
                >
                  <Heading4 {...commonProps}/>
              </motion.div>
              )
              case 'title':
                return( <motion.div className="w-full h-full"
                  {...animationProps}
                  >
                    <Title {...commonProps}/>
                </motion.div>
                )
                case 'paragraph':
        return( <motion.div className="w-full h-full"
          {...animationProps}
          >
            <Paragraph {...commonProps}/>
        </motion.div>
        )
      
                
        
      

        case 'column':
  if (Array.isArray(content.content)) {
    return (
      <motion.div
        {...animationProps}
        className={cn('w-full h-full flex flex-col', content.className)}
      >
        {content.content.length > 0         ? (
          (content.content as ContentItem[]).map(
              (subItem: ContentItem, subIndex: number) => (
                <React.Fragment key={subItem.id || `item-${subIndex}`}>
                  {!isPreview &&
                    !subItem.restrictToDrop &&
                    subIndex === 0 &&
                    isEditable && <DropZone
                    index={0}
                    parentId={content.id}
                    slideId={slideId}
                     />
                     )}
                     <React.Fragment key={subItem.id || item-${subIndex}}>
  <MasterRecursiveComponent
    content={subItem}
    onContentChange={onContentChange}
    isPreview={isPreview}
    slideId={slideId}
    index={subIndex}
    isEditable={isEditable}
  />

  {!isPreview &&
    !subItem.restrictToDrop &&
    isEditable && (
      <DropZone
        index={subIndex + 1}
        parentId={content.id}
        slideId={slideId}
      />
    )}

                </React.Fragment>
               ) 
              )
            
            
         ) :  isEditable ? (
              <DropZone 
              index={0}
              parentId={content.id}
              slideId={slideId}
              />
            ) : null}
      </motion.div>
    );
  }
  return null

      default:
        return null
    }
  }
);


ContentRenderer.displayName= 'ContentRenderer'

export const MasterRecursiveComponent: React.FC<MasterRecursiveComponentProps> = React.memo(
  ({
    content,
    onContentChange,
    slideId,
    index,
    isPreview = false,
    isEditable = true,
  }) => {
    if (isPreview) {
      return (
        <ContentRenderer
          content={content}
          onContentChange={onContentChange}
          isPreview={isPreview}
          isEditable={isEditable}
          slideId={slideId}
          index={index}
        />
      )
    }

    return (
      <React.Fragment>
        <ContentRenderer
          content={content}
          onContentChange={onContentChange}
          isPreview={isPreview}
          isEditable={isEditable}
          slideId={slideId}
          index={index}
        />
      </React.Fragment>
    )
  }
)

MasterRecursiveComponent.displayName = 'MasterRecursiveComponent'