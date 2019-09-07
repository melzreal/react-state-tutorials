import React from 'react';


const person = (props) => {
 return (
<div>
 	<p> {props.name} I am {props.age}</p>
	 <div> {props.children}</div>
	 <input type ="text" 
	 onChange={props.changed} 
	 value={props.name}/>
</div>
 )
}

export default person;