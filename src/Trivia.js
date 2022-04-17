import {useState} from "react";

function Trivia(props) {
	const qList = props.questions.results.map((qInfo) => makeQuestion(qInfo));

	return (
		<>
			{qList}
		</>
	)
}