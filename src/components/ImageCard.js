import React from "react";


const ImageCard = (props) => {


    return <>
        <div className="container">
            <div className="row">
                {props.ImageArray.map(url => <div
                    key={url.id}
                    onClick={() => { props.handleClick(url.id) }}
                    className="card col-4"
                    id={url.id}
                    style={{ background: `url(${url.url})`, height: "200px", width: "200px" }}>
                </div>)}
            </div>
        </div>
    </>
}
ImageCard.defaultProps = {
    imageArray: []
  }
export default ImageCard;