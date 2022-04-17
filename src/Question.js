import React from "react";

class Question extends React.Component {
	constructor(props) {
		super(props);
		let isAnswered = false;
	}
}

export function makeQuestion(info) {
	console.log(info);
	return info;
}

export default makeQuestion;