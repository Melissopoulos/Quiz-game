import React, { useState } from "react";
import { fetchQuizQuestions } from "./API";
//components
import Question from "./components/Question";
import Results from "./components/Results";
//types
import { QuestionState, Difficulty } from "./API";
//styles
import { GlobalStyle, Wrapper } from "./App.styles";

type AnswerObject = {
  question: string;
  answer: string;
  correctAnswer: string;
  correct: boolean;
};

const TOTAL_QUESTIONS = 15;
const TOTAL_QUESTIONS_EASY = 5;
const TOTAL_QUESTIONS_MEDIUM = 5;
const TOTAL_QUESTIONS_HARD = 5;

const App = () => {
  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    //fetch easy questions
    const newQuestionsEasy = await fetchQuizQuestions(
      TOTAL_QUESTIONS_EASY,
      Difficulty.EASY
    );
    //fetch medium questions
    const newQuestionsMedium = await fetchQuizQuestions(
      TOTAL_QUESTIONS_MEDIUM,
      Difficulty.MEDIUM
    );
    //fetch hard questions
    const newQuestionsHard = await fetchQuizQuestions(
      TOTAL_QUESTIONS_HARD,
      Difficulty.HARD
    );
    //Put all questions together
    const mergedQuestions = [
      ...newQuestionsEasy,
      ...newQuestionsMedium,
      ...newQuestionsHard,
    ];
    setQuestions(mergedQuestions);
    console.log(mergedQuestions);
    setScore(0);
    setNumber(0);
    setUserAnswers([]);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      //Users answer
      const answer = e.currentTarget.value;
      //Check answer against the correct answer
      const correct = questions[number].correct_answer === answer;
      const difficulty = questions[number].difficulty;
      //Add score if its correct for each difficulty
      if (correct && difficulty === "easy") {
        setScoreEasyQuestions((prev) => prev + 15);
        setCorrectAnswers((prev) => prev + 1);
      }

      if (correct && difficulty === "medium") {
        setScoreMediumQuestions((prev) => prev + 18);
        setCorrectAnswers((prev) => prev + 1);
      }

      if (correct && difficulty === "hard") {
        setScoreHardQuestions((prev) => prev + 25);
        setCorrectAnswers((prev) => prev + 1);
      }
      //Add all scores on Total score
      setScore(scoreEasyQuestions + scoreMediumQuestions + scoreHardQuestions);
      //Save answer in the array of userAnswers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    //Move on to the next question if is not the last one
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [scoreEasyQuestions, setScoreEasyQuestions] = useState(0);
  const [scoreMediumQuestions, setScoreMediumQuestions] = useState(0);
  const [scoreHardQuestions, setScoreHardQuestions] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <div className="App">
          <h1>Frivolous Hunter</h1>
          {gameOver && userAnswers.length === 0 ? (
            <button className="start" onClick={startTrivia}>
              Start
            </button>
          ) : null}
          {loading && <p>Loading Questions...</p>}
          {!loading && !gameOver && (
            <Question
              questionNumber={number + 1}
              totalQuestions={TOTAL_QUESTIONS}
              question={questions[number].question}
              answers={questions[number].answers}
              userAnswer={userAnswers ? userAnswers[number] : undefined}
              callback={checkAnswer}
            />
          )}
          {!gameOver && !loading && userAnswers.length === number + 1 && (
            <button className="next" onClick={nextQuestion}>
              {userAnswers.length === TOTAL_QUESTIONS ? "Finish" : "Next"}
            </button>
          )}
          {gameOver && userAnswers.length === TOTAL_QUESTIONS && (
            <Results
              score={score}
              totalQuestions={TOTAL_QUESTIONS}
              correctAnswers={correctAnswers}
            />
          )}
        </div>
      </Wrapper>
    </>
  );
};

export default App;
