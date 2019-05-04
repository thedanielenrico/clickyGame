import React from "react";
import ImageCard from "./ImageCard";
import ImageArray from "../ImageArray";


class Main extends React.Component {
    state = {
        clicked: false,
        clickedImgages: [],
        ImageArray: []
    };

componentDidMount(){
    this.setState({ImageArray: ImageArray})
}

  // Shuffle algo
  shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
    // Handle Clicked image and then push to array or say you've already clicked
    clickedImg = (id) => {
        const newSate = this.state;

        if (this.state.clickedImgages.includes(id)) {
            this.props.resetScore();
            // console.log("you clicked already")
        } else {
            newSate.clickedImgages.push(id);
            this.props.increaseScore();

            this.setState({ clicked: true, clickedImgages: newSate.clickedImgages },
                () => {

                    console.log(this.state.clicked)
                }
            )
        }
    }
    render() {


        return <>
            <div className="container">

                <ImageCard ImageArray={this.state.ImageArray} handleClick={this.clickedImg} />
            </div>
        </>
    }
}
export default Main;