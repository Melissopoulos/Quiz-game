import React, { useState } from "react";
import { fetchQuizQuestions } from "./API";
//components
import Question from "./components/Question";
//types
import { QuestionState, Difficulty } from "./API";

type AnswerObject = {
  question: string;
  answer: string;
  correctAnswer: string;
  correct: boolean;
};

const TOTAL_QUESTIONS = 15;

const App = () => {
  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );
    setQuestions(newQuestions);
    setScore(0);
    setNumber(0);
    setUserAnswers([]);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY));
  return (
    <div className="App">
      <h1>Frivolous Hunter</h1>
      <button onClick={startTrivia}>Start</button>
      <p>Loading Questions...</p>
      {/* <Question
        questionNumber={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      /> */}
      <button onClick={nextQuestion}>Next</button>
    </div>
  );
};

export default App;
