import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {

state = {
	people: [
	{ name: 'Momo', age: 29},
	{ name: 'Popo', age: 45},
	{ name: 'Crayfish', age: 188}

	]
}

switchNameHandler = () => {

  this.setState({
  	people: [
	{ name: 'Mufasa', age: 29},
	{ name: 'Popo', age: 45},
	{ name: 'Simba', age: 4}

	]
  })
}

nameChangeHandler = (event) => {


  this.setState({
  	people: [
	{ name: 'Pow', age: 29},
	{ name: event.target.value, age: 2},
	{ name: 'PowPowPow', age: 4}

	]
  })

}


render(){

  return (
    <div className="App">
   <h1> HAAAY </h1>
   <Person 
   name={this.state.people[0].name} 
   age ="29"/> 
   <Person 
   name="Myra" 
   age ="29"/> 
   <Person 
   name={this.state.people[1].name} 
   age ={this.state.people[1].age}
   changed={this.nameChangeHandler}/>
   <Person 
   name={this.state.people[2].name} 
   age ={this.state.people[2].age}/>
   <Person > the Children of props </Person>

   <button onClick={this.switchNameHandler}> Playing Button </button>
    </div>
  );

 }
}

export default App;
