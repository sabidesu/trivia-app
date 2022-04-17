import './App.css';
import Trivia from "./Trivia.js";
import Question from "./Question.js";

function App() {
  return (
    <div>
      <Trivia />
      <Question 
            question="what's my favorite color" 
            correct="blue" 
            wrong={["pink", "red", "purple"]}
            isAnswered={false}
            isCorrect={false} />
    </div>
  );
}

export default App;
