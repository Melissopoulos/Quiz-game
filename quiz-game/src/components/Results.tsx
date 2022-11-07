import React from "react";
type Props = {
  score: number;
  correctHardAnswers: number;
  correctMediumAnswers: number;
  correctEasyAnswers: number;
  correctTotalAnswers: number;
  hardQuestions: number;
  mediumQuestions: number;
  easyQuestions: number;
  totalQuestions: number;
};

const Question: React.FC<Props> = ({
  score,
  correctHardAnswers,
  correctMediumAnswers,
  correctEasyAnswers,
  hardQuestions,
  mediumQuestions,
  easyQuestions,
  totalQuestions,
}) => {
  return (
    <div>
      <h1>Congratulations!!!</h1>
    </div>
  );
};
