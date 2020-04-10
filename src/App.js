import React from 'react';
import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form.js';
import Profile from './Profile';

class App extends Component{
  constructor(){
    super();
    this.state ={
      view: 'greeting'
    } 
  }

  changeView = () => {
    this.state.view === "greeting" ? this.setState({view: "profile"}) : this.setState({view: "greeting"})
  }



  render(){
      return(
        <Form/>
      );    
      // if(this.state.view === "greeting")
      // return(
      // <div>
      //   <button onClick={this.changeView}>Go to Profile</button>
      //   <Greeting name="Amin" gender="male" age="24" />
      // </div>  
      // );
      // if(this.state.view === "profile")
      // return(
      //   <div>
      //     <button onClick={this.changeView}>Go to Greeting</button>
      //     <Profile />
      //   </div>
      // );
  }
}

export default App;
