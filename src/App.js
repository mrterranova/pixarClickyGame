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
    isThere : false,
    highScore: 1
  }

restartGame = () => {
  this.setState ({
    idArr : [],
    totalClicks: 0
})
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
    console.log(this.state.idArr)
    //adding up the total number of clicks
    this.setState({ totalClicks: this.state.totalClicks + 1});
      document.querySelector("#score").textContent = this.state.totalClicks
      if (this.state.totalClicks >= this.state.highScore){
      this.setState ({
        highScore : this.state.totalClicks + 1
      })
      document.querySelector("#top-score").textContent = this.state.highScore
    }
    //shuffle the cards
    this.shuffle(this.state.characters);
    document.querySelector(".directions").textContent = `Good guess! But don't click me again!`

    this.state.idArr.map ( checkArr => {
      if (checkArr === id){
        document.querySelector(".directions").textContent = `Oh no! You clicked me already! Click to try again!`
        this.setState ({ isThere : true})
        this.restartGame()
      }
      return characters
    })
    //collect the ids in an array
    const newArr = this.state.idArr.concat(id)
    //changing the array
    this.setState ({
      idArr : newArr
    })
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
