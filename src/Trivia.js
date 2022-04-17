import {useState, useEffect} from "react";
import Question from "./Question.js";

function Trivia() {
	let trivia_api = 'https://opentdb.com/api.php?amount=10';
	const [haveJSON, setHaveJSON] = useState(false);
	let qList = [];

	useEffect(() => {
		fetch(trivia_api)
			.then(response => response.json())
			.then(qJSON => {
				console.log(qJSON);
				qList = qJSON.results.map((qInfo) => makeQuestion(qInfo));
				setHaveJSON(true);
			})
			.catch(error => console.error("error fetching questions: ", error));
	}, []);

	return (
		<div>
			{qList}
		</div>
	);
}

function makeQuestion(info) {
	return (
		<Question 
			question={info.question} 
			correct={info.correct_answer} 
			wrong={info.incorrect_answers}
			isAnswered={false}
			isCorrect={false} />
	);
}

export default Trivia;