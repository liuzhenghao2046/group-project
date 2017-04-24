import React, { Component } from 'react';
import Home from './components/Home';
import Login from './components/Login';




class App extends Component {
  constructor(props){
    super(props);
    this.state = {isLoggedIn: false, user: null, idtoken: null};
  }

  onLoginChanged(newisLoggedIn, newuser, newidtoken) {
    this.setState({isLoggedIn: newisLoggedIn, user: newuser, idtoken: newidtoken});
  }

  render() {
    if (this.state.isLoggedIn){
      return (
        <Home user={this.state.user} idtoken={this.state.idtoken}/>
      )
    }
    else {
      return (
        <Login isLoggedIn={this.state.isLoggedIn} userId={this.state.user} idtoken={this.state.idtoken} callbackParent={(newisLoggedIn, newuser, newidtoken) => this.onLoginChanged(newisLoggedIn, newuser, newidtoken)}/>
      );
   }
 }
}

export default App;
