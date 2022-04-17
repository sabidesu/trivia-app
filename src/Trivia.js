import {useState, useEffect} from "react";
import Question from "./Question.js";

const Trivia = props => {
	let trivia_api = 'https://opentdb.com/api.php?amount=10';
	const [qJSON, setQJSON] = useState([]);
	const [haveQJSON, setHaveQJSON] = useState(false);

	useEffect(() => {
		fetch(trivia_api)
			.then(response => response.json())
			.then(qJSON => {
				console.log(qJSON);
				setQJSON(qJSON);
				setHaveQJSON(true);
			})
			.catch(error => console.error("error fetching questions: ", error));
	}, []);

	return (
		<div>
			{
				haveQJSON ? qJSON.results.map((qInfo) => makeQuestion(qInfo)) : "loading..."
			}
		</div>
	);
}

function makeQuestion(info) {
	return (
		<Question 
			question={info.question} 
			correct={info.correct_answer} 
			wrong={info.incorrect_answers}
			key={info.question}
			/>
	);
}

export default Trivia;