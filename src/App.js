import React from 'react';
import './App.css';
import Header from "../src/components/Header";
import CardGrid from "./components/CardGrid";



class App extends React.Component {
  state = {
    score: 0,
    highScore: 0,
    message: "Click an image to begin! "
  }

  increaseScore = () => {

    this.setState({
      score: this.state.score + 1,
      message: "You guessed correctly!",
      highScore: this.state.score + 1 > this.state.highScore ? this.state.score + 1 : this.state.highScore
    })



  }
  resetScore = () => {
    this.setState({score: 0, message: "You guessed incorrectly!"})

  }

  render() {
    console.log(this.state)
    return <>
      <Header score={this.state.score} highScore={this.state.highScore} message={this.state.message}/>
      <CardGrid increaseScore={this.increaseScore} resetScore={this.resetScore}></CardGrid>

    </>
  }

}

export default App;