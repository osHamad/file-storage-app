import React from "react";

const ImagePage = (props) => {
    return (    
        <>
            <img src={props.img} id={props.id} />
        </>
    )
}

export default ImagePage