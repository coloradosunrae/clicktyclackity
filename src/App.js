import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Navbar from "./components/Navbar";
// import Home from "./components/Home";



class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends, 
    clickedColors: [],
    score: 0
  };


  imageClick = event => {
    const currentPicture = event.target.src;
    const pictureClickedAlready =
      this.state.clickedColors.indexOf(currentPicture) > -1;

      if (pictureClickedAlready) {
        this.setState({
          friends: this.state.friends.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedColors: [],
          score: 0
        });
          alert("You lose. Play again?");


    } else {
      this.setState(
        {
          friends: this.state.friends.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedColors: this.state.clickedColors.concat(
            currentPicture
          ),
          score: this.state.score + 1
        },
     
        () => {
          if (this.state.score === 12) {
            alert("Yay! You Win!");
            this.setState({
              friends: this.state.friends.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedColors: [],
              score: 0
            });
          }
        }
      );
    }
  };

  render() {
    return (
      <Wrapper>
             <Navbar 
          score={this.state.score}
        />
        <Title><h1>Color Click Away</h1>
        </Title>
        {this.state.friends.map(friend => (
          <FriendCard
            imageClick={this.imageClick}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
