import React, { Component} from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import characters from "./Character.json";


class App extends Component {
  state = {
    characters,
    wasClicked: false,
    idArr: [],
    totalClicks: 1, 
    highScore: 1
  }

restartGame = () => {
  this.setState ({
    idArr : [],
    totalClicks: 1, 
})
  console.log(this.state.idArr)
  document.querySelector("#score").textContent = 0
}


  shuffle = (characters) => {
    let currentIndex = characters.length;

    let shuffleCharacters = characters;
    while(currentIndex !== 0){
      //Get a random index
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      
      //Swap the values
      let temporaryValue = shuffleCharacters[currentIndex];
      shuffleCharacters[currentIndex] = shuffleCharacters[randomIndex];
      shuffleCharacters[randomIndex] = temporaryValue;
    }
    this.setState ({ characters : shuffleCharacters })
  }

  clicked = (id) => {
  console.log("1",this.state.totalClicks,this.state.highScore )
    //adding up the total number of clicks
    if (this.state.totalClicks >= this.state.highScore){
    this.setState ({
      highScore : this.state.totalClicks + 1
    })
    document.querySelector("#top-score").textContent = this.state.highScore
  }
    this.setState({ totalClicks: this.state.totalClicks + 1});
    document.querySelector("#score").textContent = this.state.totalClicks
    document.querySelector(".directions").textContent = `Good guess! But don't click me again!`
    console.log("2",this.state.totalClicks,this.state.highScore )
    if (this.state.totalClicks === this.state.characters.length){
      document.querySelector(".directions").textContent = `Congratulations! You won!`
      this.restartGame()
    }
    //shuffle the cards
    this.state.idArr.map ( checkArr => {
      if (checkArr === id){
        document.querySelector(".directions").textContent = `Oh no! You clicked me already! Click to try again!`
        if (this.state.totalClicks >= (this.state.highScore)) {
        document.querySelector("#top-score").textContent = this.state.highScore -1
        this.setState ({
          highScore : this.state.highScore - 1
        })
        }
        console.log("3",this.state.totalClicks,this.state.highScore )
        this.restartGame()
      } 
      return characters
    })
    this.shuffle(this.state.characters);
    console.log("4",this.state.totalClicks,this.state.highScore )
      this.state.idArr.push(id)
  }

  render() {
    return (
      <div>
        <Nav />
        <Header />
        <div className="game-container">
          {this.state.characters.map(character => {
            return (
              <Card
                id={character.id}
                key={character.id}
                characterName={character.characterName}
                characterImage={character.characterImage}
                clicked={ this.clicked }
              />
            )
          })}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
