import React, { useState } from "react";
import Button from "./Button.js";

const Question = props => {
	const [isAnswered, setIsAnswered] = useState(false);
	const [isCorrect, setIsCorrect] = useState(false);

	const answered = () => {
		setIsAnswered(true);
	}

	let buttons = [];
	buttons.push(<Button 
		correct={true} 
		text={props.correct} 
		key={props.correct} 
		onClick={answered} 
		disabled={isAnswered} />);
	props.wrong.forEach(answer => 
		buttons.push(<Button 
			correct={false} 
			text={answer} 
			key={answer}
			onClick={answered} 
			disabled={isAnswered}
			/>));

	buttons.sort((a, b) => 0.5 - Math.random()); // rough shuffle on component init

	return (
		<div>
			<p>{props.question}</p>
			<div>{buttons}</div>
		</div>
	);
}


export default Question;