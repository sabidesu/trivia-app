import {useState, useEffect} from "react";
import makeQuestion from "./Question.js";

function Trivia() {
	let trivia_api = 'https://opentdb.com/api.php?amount=10';
	let qList = [];

	useEffect(() => {
		fetch(trivia_api)
			.then(response => response.json())
			.then(data => {
				console.log(data);
				qList = data.results.map((qInfo) => makeQuestion(qInfo));
			})
			.catch(error => console.error("error fetching questions: ", error))
	}, [])

	return (
		<>
			{qList}
		</>
	)
}

export default Trivia;