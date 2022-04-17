import React from "react";
import Button from "./Button.js";

class Question extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let buttons = [];
		buttons.push(<Button correct={true} text={this.props.correct} clicked={false}/>);
		this.props.wrong.forEach(answer => 
			buttons.push(<Button correct={false} text={answer} clicked={false}/>));

		return (
			<div>{this.props.question}</div>
		);
	}
}

export default Question;