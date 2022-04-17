import {useState} from "react";
import makeQuestion from "./Question.js";
import React from "react";

class Trivia extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		const qList = this.props.questions.results.map((qInfo) => makeQuestion(qInfo));

		return (
			<>
				{qList}
			</>
		)
	}
}

export default Trivia;