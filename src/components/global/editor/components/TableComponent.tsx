'use client'
import { Input } from '@/components/ui/input'
import { ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import { TableHead } from '@/components/ui/table'
import { useSlideStore } from '@/store/useSlideStore'
import React from 'react'

interface TableComponentProps  {
    content: string[][]
    onChange: (newContent: string[][]) => void
    isPreview?: boolean
    isEditable?: boolean
    initialRowSize?: number
    initialColSize?: number
}

const TableComponent = ({
    content,
    onChange,
    isPreview,
    isEditable,
    initialRowSize,
    initialColSize,
}: TableComponentProps) => {
    const { currentTheme } = useSlideStore()
    const [rowSizes, setRowSizes] = useState<number[]>([])
    const [colSizes, setColSizes] = useState<number[]>([])
    const [tableData, setTableData] = useState<string[] []>( () => {
        if(content.length === 0 || content[0].length === 0) {
            return Array(initialRowSize).fill(Array(initialColSize).fill(''))
        }
        return content
    })

  const handleResizeCol = (index: number, newSize: number) => {
    if( !isEditable) return
    const newSizes = [...colSizes]
    newSizes[index] = newSize
    setColSizes(newSizes)
  }

  const updateCell = (rowIndex: number, colIndex: number, value: string) => {
    if(!isEditable) return
    const newData = tableData.map((row, rIndex) => 
        rIndex === rowIndex
         ? row.map((cell, cIndex) => (cIndex === colIndex ? value : cell))
         : row
    )
    setTableData(newData)
    onChange(newData)
  }

  useEffect(() => {
    setRowSizes(new Array(tableData.length).fill(100 / tableData.length))
    setColSizes(new Array(tableData[0].length).fill(100 / tableData[0].length))
  }, [tableData])

  if(isPreview)
    return (
        <div className="w-full overflow-x-auto text-xs">
        <table className="w-full">
            <thead>
                <tr>
                    {tableData[0].map((cell, index) => (
                        <th
                            key={index}
                            className="p-2 border"
                            style={{ width: `${colSizes[index]}%` }}
                        >
                            {cell || 'Type here'}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {tableData.slice(1).map((row, rowIndex) => 
                    <tr
                        key={cellIndex}
                        style={{ height: `${rowSizes[rowIndex + 1]}%`}}
                    >
                        {row.map((cell, cellIndex) => (
                            <td
                                key={cellIndex}
                                className="p-2 border"
                            >
                                {cell || 'Type here'}
                            </td>
                        ))}
                    </tr>
                )}
            </tbody>
        </table>
    </div>
    )

    return (
    <div
        className="w-full h-full relative"
        style={{
            background:
              currentTheme.gradientBackground || currentTheme.backgroundcolor,
            borderRadius: '8px',
        }}
    >
        <ResizablePanelGroup
            direction="vertical"
            className={`h-full w-full rounded-lg border ${
                initialColSize === 2
                   ? 'min-h-[100px]'
                   : initialColSize === 3
                   ? 'min-h-[150px]'
                   : initialColSize === 4
                   ? 'min-h-[200px]'
                   : 'min-h-[100px]'
            }`}

            onLayout={(sizes) setRowSizes (sizes)}
        >
            {tableData.map((row, rowIndex) => (
              <React.Fragment key={rowIndex}>
                {rowIndex > 0 && <ResizableHandle />}
                <ResizablePanelGroup
                   direction="horizontal"
                   onLayout={(sizes) => setColSizes (sizes)}
                   className="w-full h-full"
                >
                  {row.map((cell, colIndex) => (
                    <React.Fragment key={colIndex}>
                      {colIndex > 0 && <ResizableHandle />}
                      <ResizablePanel
                        defaultSize={colSizes[colIndex]}
                        onResize={(size) => handleResizeCol(colIndex, size) }
                        className="w-full h-full min-h-9"
                      >
                        <div className="relative w-full h-full min-h-3">
                            <Input
                              value={cell}
                              onChange={(e) => 
                                updateCell(rowIndex, colIndex, e.target.value)
                              }
                              className="w-full h-full p-4 bg-transparent focus:outline-none
                              focus:ring-2 focus:ring-blue-500 rounded-md"
                              style={{ color: currentTheme.fontcolor }}
                              placeholder="Type here"
                              readOnly={!isEditable}
                            ></Input>
                        </div>
                      </ResizablePanel>
                    </React.Fragment>
                  ))}
                </ResizablePanelGroup>
              </React.Fragment>
            ))}
        </ResizablePanelGroup>
    </div>
    )
}

export default TableComponent 