import React, {Component} from 'react';
import './App.css';


class Greeting extends Component {
    render() {
    return <div className="greeting">"Hi, My name {this.props.name}, {this.props.gender}, and I'm {this.props.age} years old"</div>
    }
}

export default Greeting;