import React from "react";
import Sidebar from "components/Sidebar";
import Navbar from "components/Navbar";
import ImageField from "components/ImageField";
import { useState } from "react";

import Upload from "components/Upload";

const HomePage = () => {

    const [ images, setImages ] = useState(null)
    const [file, setFile] = useState()

    return (    
        <>
            <Navbar />
            <Upload 
                setFile = { setFile }
                file = { file }
                setImages = { setImages }
                images = { images }
            />
            <div className="d-flex" style={{overflow: "hidden", flex: 1}}>
                <Sidebar />
                <div className="container-fluid" style={{overflow: "auto"}}>
                    <div className="row">
                        <ImageField 
                            images = { images }
                            setImages = { setImages }
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage

