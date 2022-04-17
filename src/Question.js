import React, { useState } from "react";
import Button from "./Button.js";

const Question = props => {
	const [isAnswered, setIsAnswered] = useState(false);
	const [isCorrect, setIsCorrect] = useState(false);
	const [isShuffled, setIsShuffled] = useState(false);

	const incorrect = () => {
		setIsAnswered(true);
	}

	const correct = () => {
		setIsAnswered(true);
		setIsCorrect(true);
	}

	let buttons = [];
	buttons.push(<Button 
		correct={true} 
		text={props.correct} 
		key={props.correct} 
		onClick={correct} 
		disabled={isAnswered} />);
	props.wrong.forEach(answer => 
		buttons.push(<Button 
			correct={false} 
			text={answer} 
			key={answer}
			onClick={incorrect} 
			disabled={isAnswered}
			/>));

	// answer shuffle on component init
	if (!isShuffled) {
		buttons.sort((a, b) => 0.5 - Math.random()); 
		setIsShuffled(true);
	}

	let response = "";
	if (isAnswered && isCorrect) response = " Correct!";
	else if (isAnswered) response = " Incorrect!";

	return (
		<div>
			<p>{props.question + response}</p>
			<div>{buttons}</div>
		</div>
	);
}


export default Question;