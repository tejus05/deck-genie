import { useSlideStore } from '@/store/useSlideStore';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Skeleton } from '@/components/ui/skeleton';
import { useDrag, useDrop } from 'react-dnd'
import { cn } from '@/lib/utils';
import { v4 as uuidv4 } from 'uuid'
import { useSlideStore } from '@/store/useSlideStore';
import { LayoutSlides } from '@/lib/types';
import React, {useEffect,useRef,useState} from 'react';
import { MasterRecursiveComponent } from './MasterRecursiveComponent';
import { updateSlides } from '@/actions/project';


interface DropZoneProps {
    index: number;
    onDrop: (
        item: {
            type: string;
            layoutType: string;
            component: LayoutSlides;
            index?: number;
        },
        dropIndex: number
    ) => void;
    isEditable: boolean;
}
export const DropZone:React.FC<DropZoneProps> = ({
    index,
    onDrop,
    isEditable,
}) => {

const [{isOver,canDrop,dropRef}]= useDrop({
    accept: ['SLIDE','LAYOUT'],
    drop: (item: {
        type: string;
        layoutType: string;
        component: LayoutSlides;
        index?: number;
    }) => {
        onDrop(item, index)
    },
    canDrop: () => isEditable,
    collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
    }),
})

if (!isEditable) return null

    return (
    <div
    className={cn(
        'h-4 my-2 rounded-md transition-all duration-200',
        isOver && canDrop ? 'border-green-500 bg-green-100' : 'border-gray-300',
        canDrop ? 'border-blue-300' : ''
      )}
    
    >
    {isOver && canDrop && (
        <div className="h-full flex items-center justify-center text-green-600">
            Drop here
        </div>
    )} 
    </div>
    )
}
interface DraggableSlideProps {
    slide: Slide
    index: number
    moveSlide: (dragIndex: number, hoverIndex: number) => void
    handleDelete: (id: string) => void
    isEditable: boolean
  }

  export const DraggableSlide: React.FC<DraggableSlideProps> = ({
    slide,
    index,
    moveSlide,
    handleDelete,
    isEditable,
  }) => {
    const refuseRef = null;
    const { currentSlide, setCurrentSlide, currentTheme, updateContentItem } = useSlideStore()
    const [{ isDragging }, drag] = useDrag({
        type: 'SLIDE',
        item: {
          index,
          type: 'SLIDE',
        },
        collect: (monitor) => ({
          isDragging: monitor.isDragging(),
        }),
        canDrag: isEditable,
      })

      const [_, drop] = useDrop({
        accept: ['SLIDE','LAYOUT'],
        hover: (item: { index: number; type: string }) => {
          if (!ref.current || !isEditable){
            return
          }
          const dragIndex = item.index
          const hoverIndex = index

          if(item.type === 'SLIDE'){
            if (dragIndex === hoverIndex) {
              return
            }
            moveSlide(dragIndex, hoverIndex)
            item.index = hoverIndex
          }
        },
      })

      drag(drop(ref))

      const handleContentChange=(
        contentId:string,
        newContent: string | string[] | string [][]
      ) => {
        console.log('Content Changed',slide,contentId,newContent)
        if(isEditable){
          updateContentItem(slide.id,contentId,newContent)
        }
      }
      
      
  
    return (
        <div
          ref={ref}
          className={cn(
            'w-full rounded-lg shadow-lg relative p-0 min-h-[400px] max-h-[800px]',
            'shadow-xl transition-shadow duration-300',
            'flex flex-col',
            index === currentSlide ? 'ring-2 ring-blue-500 ring-offset-2' : '',
            slide.className,
            isDragging ? 'opacity-50' : 'opacity-100'
          )}
          style={{
            backgroundImage: currentTheme.gradientBackground,
          }}
          onClick={() => setCurrentSlide(index)}
        >
        <div className="h-full w-full flex-grow overflow-hidden">
            <MasterRecursiveComponent
            content={slide.content}
            isPreview={false}
            slideId={slide.id}
            isEditable={isEditable}
            onContentChange={handleContentChange}
            />

</div>

{isEditable && (
  <Popover>
    <PopoverTrigger asChild className="absoulte top-2 left-2">
      <Button
        size="sm"
        variant="outline"
        
      >
        <EllipsisVertical className="w-5 h-5" />
        <span className="sr-only">Slide options</span>
      </Button>
    </PopoverTrigger>
    <PopoverContent className="w-fit p-0">
      <div className="flex space-x-2">
        <Button
          variant="ghost"
          onClick={() => handleDelete(slide.id)}
        >
          <Trash className="w-5 h-5 text-red-500" />
          <span className="sr-only">Delete slide</span>
        </Button>
      </div>
    </PopoverContent>
  </Popover>
)}
</div>
      )
  }

type Props = {
  isEditable: boolean;
};

const Editor = ({ isEditable }: Props) => {
  const {
    getOrderedSlides,
    currentSlide,
    removeSlide,
    addSlideAtIndex,
    reorderSlides,
    slides,
    project,
  } = useSlideStore();
    const orderedSlides = getOrderedSlides()
    const slideRefs = useRefs<(HTMLDivElement | null) [] >([])
    const autosaveTimeoutRef = useRef<NodeJS.Timeout | null>(null)

 
    const [loading, setLoading] = useState(true)

    const moveSlide = (dragIndex: number, hoverIndex: number) => {
        if (isEditable) {
            reorderSlides(dragIndex, hoverIndex)
        }
    }

    const handleDrop = (item: {
        type: string;
        layoutType: string;
        component: LayoutSlides;
        index?: number;
    },
    dropIndex: number
) => {
    if (!isEditable) return;

    if (item.type === 'layout') {
        addSlideAtIndex(
            {
                ...item.component,
                id: uuidv4(),
                slideOrder: dropIndex,
            },
            dropIndex
        )
    } else if (item.type === 'SLIDE' && item.index !== undefined) {
        moveSlide(item.index, dropIndex)
    }
}



  const handleDelete=(id: string) => {
    if(isEditable) {
      console.log('Deleting',id)
      removeSlide(id)
    }
  }

  useEffect(() => {
    if (slideRefs.current[currentSlide]) {
      slideRefs.current[currentSlide]?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [currentSlide])

  useEffect(() => {
    if (typeof window !== 'undefined') setLoading(false)
  }, [])

  const saveSlides = useCallback(() => {
    if (isEditable && ){
      ;(async () => {
        await updateSlides(project.id, JSON.parse(JSON.stringify(slides)))
    })()
    }
  },[isEditable, slides, project] )

  useEffect(() => {
    // if() we alerady have a timer> cancel the timer and then create a new one
    if (autosaveTimeoutRef.current) {
        clearTimeout(autosaveTimeoutRef.current)
    }

    if (isEditable) {
      autosaveTimeoutRef.current = setTimeout(() => {
        saveSlides()
      }, 2000)
    }


    return () => {
        if (autosaveTimeoutRef.current) {
            clearTimeout(autosaveTimeoutRef.current)
        }
    }

    // inside the timer make the save request




  }, [slides, isEditable, project])


    return (
    <div className="flex-1 flex flex-col h-full max-w-3xl mx-auto p-4">
        {loading ? (
        <div className="w-full px-4 flex flex-col space-y-6">
            <Skeleton className="h-52 w-full" />
            <Skeleton className="h-52 w-full" />
            <Skeleton className="h-52 w-full" />
        </div>
    ) : (
      <ScrollArea className="flex-1 mt-8">
        <div className="px-4 pb-4 space-y-4 pt-2">
          {isEditable && (
          <DropZone  
            index={0}
            onDrop={handleDrop}
            isEditable={isEditable}
            />
            )}
            {orderedSlides.map((slide, index) => (
                <React.Fragment key={slide.id || index}>
                    <DraggableSlide
                    slide={slide}
                    index={index}
                    moveSlide={moveSlide}
                    handleDelete={handleDelete}
                    isEditable={isEditable}
                    />
                </React.Fragment>
            ))}
        </div>
      </ScrollArea>
    )}
  </div>
);
}

export default Editor;