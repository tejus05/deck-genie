'use client';
import { useSlideStore } from '@/store/useSlideStore';
import React from 'react';

type Props = { presentationId: string };

const Navbar = ({ presentationId }: Props) => {
  const { currentTheme } = useSlideStore();
  const [isPresentationMode, setIsPresentationMode] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(
        `${window.location.origin}/share/${presentationId}`
    )
    toast.success('Link Copied', {
        description: 'The link has been copied to your clipboard',
    })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full h-20 flex justify-between items-center py-4 px-7 border-b"
    style={{
        backgroundColor: 
            currentTheme.navBarColor || currentTheme.backgroundColor,
        color: currentTheme.accentColor,
      }}
      >
        <Link 
        href={'/dashboard'} 
        passHref
        >
          <Button
            variant="outline"
            className={'flex items-center gap-2'}
            style={{
                backgroundColor: currentTheme.backgroundColor,
            }}
           >
            <Home className="w-4 h-4" />
            <span className="hidden sm:inline">Return Home</span>
          </Button>
        </Link>

        <Link 
        href="/presentation/template-market" 
        className="text-lg font-semibold hidden sm:block "
        >
            Presentation Editor
        </Link>
        <div className="flex items-center gap-4">
            <Button
                style={{
                    backgroundColor: currentTheme.backgroundColor,
                }}
                onClick={handleCopy}
                variant="outline"
            >
                <Share className="w-4 h-4" />
            </Button>
           {/* WIP: add lemon sq sell templates */}
            {/* <SellTemplate /> */}
            <Button
                variant={'default'}
                className="flex items-center gap-2"
                onClick={() => setIsPresentationMode(true)}
            >
            <Play className="w-4 h-4 " />
            <span className="hidden sm:inline">Present</span>
            </Button> 
        </div>
        {/* WIP: add presentation mode */}
        {/* {isPresentationMode && <PresentationMode />} */}
    </nav>
  );
}

export default Navbar;