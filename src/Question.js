import React, { useEffect } from "react";
import Button from "./Button.js";

const Question = props => {
	let buttons = [];
	buttons.push(<Button correct={true} text={props.correct} clicked={false} key={props.correct} />);
	props.wrong.forEach(answer => 
		buttons.push(<Button correct={false} text={answer} clicked={false} key={answer}/>));

	buttons.sort((a, b) => 0.5 - Math.random()); // rough shuffle on component init

	return (
		<div>
			<p>{props.question}</p>
			<div>{buttons}</div>
		</div>
	);
}

export default Question;