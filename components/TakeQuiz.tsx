"use client";

import { IQuizData } from "@/@types/type";
import { useState } from "react";
import QuizHeader from "./QuizHeader";
import TakeQuestionCard from "./TakeQuestionCard";
import { Button } from "./ui/button";
import QuizResult from "./QuizResult";

const TakeQuiz = ({ quiz }: { quiz: IQuizData }) => {
  const [name, setName] = useState<string>("");
  const [started, setStarted] = useState<boolean>(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleStartQuiz = (name: string) => {
    setName(name);
    setStarted(true);
  };

  const handleOptionChange = (option: string) => {
    setAnswers((prev) => ({ ...prev, [currentQuestionIndex]: option }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const calculateScore = () => {
    return quiz.questions.reduce((score, question, index) => {
      return answers[index] === question.correct ? score + 1 : score;
    }, 0);
  };

  if (submitted) {
    return <QuizResult score={calculateScore()} total={quiz.questions.length} />;
  }

  if (!started) {
    return <QuizHeader onStart={handleStartQuiz} />;
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <TakeQuestionCard
        question={quiz.questions[currentQuestionIndex]}
        selectedOption={answers[currentQuestionIndex] || null}
        onOptionChange={handleOptionChange}
      />
      <div className="flex justify-between mt-4">
        <Button onClick={handlePrev} disabled={currentQuestionIndex === 0}>
          Previous
        </Button>
        {currentQuestionIndex === quiz.questions.length - 1 ? (
          <Button onClick={handleSubmit}>Submit</Button>
        ) : (
          <Button onClick={handleNext}>Next</Button>
        )}
      </div>
    </div>
  );
};

export default TakeQuiz;