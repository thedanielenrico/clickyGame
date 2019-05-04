import React from "react";
import ImageCard from "./ImageCard";
import ImageArray from "../ImageArray";
import "./cardGrid.css"

class Main extends React.Component {
    state = {
        clicked: false,
        clickedImgages: [],
        imageArray: ImageArray
    };


    // Handle Clicked image and then push to array or say you've already clicked
    clickedImg = (id) => {
        this.setState({imageArray: this.state.imageArray.sort(() => Math.random() - 0.5)});

        if (this.state.clickedImgages.includes(id)) {
            this.props.resetScore();
            this.setState({clickedImgages: []});
        } else {
            this.setState({clickedImgages: [...this.state.clickedImgages, id]})
            this.props.increaseScore();
        }
    }
    render() {


        return <>
            <div className="container">

                {this.state.imageArray.map(img => <ImageCard handleClick={() => this.clickedImg(img.id)} key={img.id} image={img.url}/>)}
                {/* <ImageCard ImageArray={this.state.ImageArray} handleClick={this.clickedImg} /> */}
            </div>
        </>
    }
}
export default Main;