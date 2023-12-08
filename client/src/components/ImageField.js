import React from "react";
import axios from "axios";
import { useEffect } from "react";
import Item from "./Item";

const ImageField = ( {images, setImages }) => {

    useEffect(() => {

        axios.get("http://localhost:5000/upload/images")
            .then(res => setImages(res.data))

      }, [])
      

      if (images) {
        return (
          images.map(e => <Item key={e.location} src={"http://localhost:5000/" + e.location}/>)
        )
      } else {
        return (
          <p>images are empty</p>
        )
      }
}

export default ImageField

