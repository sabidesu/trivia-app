import './App.css';
import Trivia from './Trivia.js';

function App() {
  return (
    <div>
      <Trivia questions={getQuestions()} />
    </div>
  );
}

async function getQuestions() {
  let response = await fetch('https://opentdb.com/api.php?amount=10');
  return response.json();
}

export default App;
