import React from "react";
import axios from "axios";

const Upload = ({ setFile, file, setImages, images }) => {

    const handleUpload = (e) => {
        const formdata = new FormData()
        formdata.append("file", file)
        axios.post("http://localhost:5000/upload", formdata)
        .then(res => setImages(images.concat(res.data)))
        .catch(err => console.log(err))
        document.getElementById("upload-input").value = null
        setFile(null)
        document.getElementById("exampleModal").ariaHidden = true
    }

    return (
        <div className="modal fade text-dark" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">File Upload</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <input id="upload-input" type="file" onChange={e => setFile(e.target.files[0])} />
                    <button onClick={handleUpload}>Upload</button>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Upload