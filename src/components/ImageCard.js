import React from "react";



const ImageCard = (props) => {


    return <div
            onClick={() => props.handleClick() }

            style={{
                width: "25%",
                cursor: "pointer",
                background: `url(${props.image})`,
                height: "200px",
                backgroundRepeat: "no-repeat",
                margin: "5px"
            }} />
}
ImageCard.defaultProps = {
    image: ""
}
export default ImageCard;