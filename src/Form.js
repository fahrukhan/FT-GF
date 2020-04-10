import React, {Component} from 'react';
import './App.css';
import Profile from './Profile';

class Form extends Component{
    constructor(props) {
        super(props);
        this.state = {
            fName: '',
            lName: '',
            selectedOption: '',
            name: '',
            age: '',
            gender: '',
            loc: '',
            submit: false
            
        };
    
        this.handleFNameChange = this.handleFNameChange.bind(this);
        this.handleLNameChange = this.handleLNameChange.bind(this);
        this.handleLAgeChange = this.handleLAgeChange.bind(this);
        this.handleLLocChange = this.handleLLocChange.bind(this);

        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleFNameChange(event) {this.setState({fName: event.target.value});}
    handleLNameChange(event) {this.setState({lName: event.target.value});}
    handleLAgeChange(event) {this.setState({age: event.target.value});}
    handleLLocChange(event) {this.setState({loc: event.target.value});}

    handleOptionChange (event) {
        this.setState({
          selectedOption: event.target.value
        });
    }
    
    handleSubmit(event) {
        this.setState({name: this.state.fName+' '+this.state.lName});
        this.setState({gender: this.state.selectedOption});
        event.preventDefault();

        this.setState({submit: true});
    }
    
      render() {
        if(this.state.submit == false){
            return (
            <div className="fo">
            <form onSubmit={this.handleSubmit}>
            <label>
              <br/>First Name:</label>
              <br/><input type="text" value={this.state.fName} onChange={this.handleFNameChange} />
            <br/>
            <label>Last Name:</label>
              <br/><input type="text" value={this.state.lName} onChange={this.handleLNameChange} />
            <br/>
            <label>Age:</label>
              <br/><input type="number" max="105" value={this.state.age} onChange={this.handleLAgeChange} />
            <br/>
            <label>Location:</label>
              <br/><input type="text" value={this.state.loc} onChange={this.handleLLocChange} />
            <br/>

            Gender:<br/>
            <div className="radio">
                <input type="radio" id="male" name="gender" value="male" 
                checked={this.state.selectedOption === 'male'} 
                onChange={this.handleOptionChange}/>
                <label for="male"> Male </label>
                <input type="radio" id="female" name="gender" value="female" 
                checked={this.state.selectedOption === 'female'} 
                onChange={this.handleOptionChange}/>
                <label for="female"> Female </label>
                <input type="radio" id="other" name="gender" value="other"
                checked={this.state.selectedOption === 'other'} 
                onChange={this.handleOptionChange}/>
                <label for="other"> Other </label>
            </div>
            
            <br/><input type="submit" value="Submit" />
          </form> 
        </div>
        );
        }else{
            return(
                <div>
                    <Profile name={this.state.name} 
                            gender={this.state.gender} 
                            age={this.state.age}
                            loc={this.state.loc}/>
                </div>
            )
            
        }
        
      }
}

export default Form;