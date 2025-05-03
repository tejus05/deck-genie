import React from 'react'
import { FileUploaderRegular } from '@uploadcare/react-uploader/next';
import '@uploadcare/react-uploader/core.css';

type Props = {
    contentId:string
    onContentChange:(
        contentId: string,
        newContent: string | string[] | string[][]
    ) => void

}

const UploadImage = ({contentId, onContentChange}: Props) 
=> {

    const handleChangeEvent = (e:{
        cndUrl:string | string[] | string[][]
    }) => {
        onContentChange(contentId, e.cndUrl)
    }

    return (
        <div>
            <FileUploaderRegular sourceList="local, url, dropbox"
            classNameUploader="uc-light"
            pubkey=({/*envfile*/})
            multiple={false}
            onFileUploadSuccess={handleChangeEvent}
            maxLocalFileSizeBytes={10000000}
            />
        </div>
    )
}

export default UploadImage