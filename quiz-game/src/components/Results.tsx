import React from "react";
type Props = {
  score: number;
  correctAnswers: number;
  totalQuestions: number;
};

const Results: React.FC<Props> = ({
  score,
  totalQuestions,
  correctAnswers,
}) => {
  return (
    <div>
      <h1>Congratulations!!!</h1>
      <h3>Your score is {score}</h3>
      <h4>
        {correctAnswers}/{totalQuestions}
      </h4>
    </div>
  );
};

export default Results;
