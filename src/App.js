import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import NavTabs from "./components/NavTabs";
import Home from "./components/Home";



class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  clickAmount = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
         <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
      </div>
    </Router>
        <Title>Friends List</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            clickAmount={this.clickAmount}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;