import React, {Component} from 'react';
import './App.css';
import avatar from './avatar.jpg';
import Greeting from './Greeting.js';

class Profile extends Component{

    render() {
        return (
        <div className="container">
            <div className="center">
                <div className="row">
                <div className="column">
                        <div className="card square-left">
                        <div className="profname">{this.props.name}<br/></div>
                            <div className="profdetails">
                                sex:<br/>{this.props.gender}<br/><br/>
                                location:<br/>{this.props.loc}<br/><br/>
                                greeting:<br/><Greeting name={this.props.name} 
                                        gender={this.props.gender} age={this.props.age}/>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="square">
                        <img src={avatar}/></div>
                    </div>
                    
                </div>  
            </div>
        </div>
        );
    }
}

export default Profile;