import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {

    return (
        
            <div className="mt-3 col-sm-6 col-md-4 col-lg-3">
                <Link to={"/image/" + props.id}>
                <div className="card">
                        <img className="card-img-top" src={ props.src } alt="could not load" />
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                    </div>
                </div>
                </Link>
            </div>
    )
}

export default Item

Item.defaultProps = {
    src: "https://pixy.org/src/20/201310.jpg"
}


