import React, {useState, useEffect} from 'react'

export default function Home() {

    const [selectedFile, setSelectedFile] = useState();
    const [preview, setPreview] = useState();

    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
    }



    return (
        <div className="Home">
            <div className="InputField">
                <input type="file" name="file" onChange={onSelectFile} />
            </div>
            <br/>
            {selectedFile &&  <img src={preview} width="450" /> }

            <div className="Output">

            </div>
        </div>
    )
}
