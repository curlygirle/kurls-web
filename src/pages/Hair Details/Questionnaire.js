import React from "react";
import { useState } from "react";
import "../../styles/Questionnaire.css";

const questions = [
  {
    id: 1,
    question: "What is your hair texture?",
    options: ["Straight", "Wavy", "Curly", "Kinky"],
    type: "checkbox",
    limit: 1,
  },
  {
    id: 2,
    question: "How would you describe your hair thickness?",
    options: ["Fine", "Medium", "Thick", "Very Thick"],
    type: "checkbox",
    limit: 1,
  },
  {
    id: 3,
    question: "What is your hair porosity?",
    options: [
      "Low porosity",
      "Medium porosity",
      "High porosity",
      "I'm not sure",
    ],
    type: "checkbox",
    limit: 1,
  },
  {
    id: 4,
    question: "How often do you wash your hair?",
    options: ["Daily", "Every other day", "Weekly", "Less than once a week"],
    type: "checkbox",
    limit: 1,
  },
  {
    id: 5,
    question: "How would you describe the current condition of your hair?",
    options: [
      "Dry",
      "Oily",
      "Balanced",
      "Damaged",
      "Healthy",
      "Chemically Treated",
    ],
    type: "checkbox",
    limit: 1,
  },
  {
    id: 6,
    question: "What is your main hair concern? (Select up to 2)",
    options: [
      "Frizz",
      "Damage/Breakage",
      "Oiliness",
      "Scalp issues (e.g., dandruff, itchiness)",
      "Dryness",
      "Split Ends",
      "Product Buildup",
    ],
    type: "checkbox",
    limit: 2,
  },
  {
    id: 7,
    question: "How often do you use heat styling tools?",
    options: [
      "Daily",
      "3-4 times a week",
      "1-2 times a week",
      "Only for special occasions",
      "Never",
    ],
    type: "checkbox",
    limit: 1,
  },
  {
    id: 8,
    question: "What is your primary hair goal? (Select up to 2)",
    options: [
      "Increase Moisture",
      "Repair, protect and strengthen hair",
      "Increase shine",
      "Promote hair growth",
      "Add Volume",
      "Enhance Definition",
    ],
    type: "checkbox",
    limit: 2,
  },
  {
    id: 9,
    question:
      "How much time are you willing to dedicate to your hair care routine daily?",
    options: [
      "5 minutes or less",
      "5-15 minutes",
      "15-30 minutes",
      "30+ minutes",
    ],
    type: "checkbox",
    limit: 1,
  },
  {
    id: 10,
    question: "Which ingredients do you prefer in your hair care products?",
    options: [
      "No preference",
      "Natural/Organic",
      "Sulphate-free",
      "Silicone-free",
      "Fragrance-free",
      "Vegan",
      "Allergen-free",
    ],
    type: "checkbox",
    limit: 1,
  },
];

export default function Questionnaire() {
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(-1);

  //function represents when user selects or deselects an answer
  const handleAnswer = (questionId, option) => {
    setAnswers((prevAnswers) => {
      const currentAnswers = prevAnswers[questionId] || [];
      const question = questions.find((q) => q.id === questionId);

      if (currentAnswers.includes(option)) {
        return {
          ...prevAnswers,
          [questionId]: currentAnswers.filter((a) => a !== option),
        };
      } else if (currentAnswers.length < question.limit) {
        return {
          ...prevAnswers,
          [questionId]: [...currentAnswers, option],
        };
      }
      return prevAnswers;
    });
  };

  // Function to move to the next question
  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  // Function to move to the previous question
  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleStart = () => {
    setCurrentQuestion(0);
  };

  const currentQuestionData = questions[currentQuestion];

  return (
    <section className="question-container">
      {currentQuestion === -1 ? (
        <section className="start-screen">
          <h2 className="question-heading">kurls questionnaire</h2>
          <p className="question-p">
            welcome to the kurls questionnaire! this survey will help us
            understand your hair type and needs.
          </p>
          <button onClick={handleStart} className="btn">
            start
          </button>
        </section>
      ) : (
        <>
          <h2 className="question-name">{currentQuestionData.question}</h2>
          <main className="question-options">
            {currentQuestionData.options.map((option) => (
              <label key={option} className="option">
                <input
                  type="checkbox"
                  checked={
                    answers[currentQuestionData.id]?.includes(option) || false
                  }
                  onChange={() => handleAnswer(currentQuestionData.id, option)}
                  className="checkbox"
                />
                <span>{option}</span>
              </label>
            ))}
          </main>

          <section className="navigation">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="btn"
            >
              previous
            </button>
            <button
              onClick={handleNext}
              disabled={currentQuestion === questions.length - 1}
              className="btn"
            >
              {currentQuestion === questions.length - 1 ? "finish" : "next"}
            </button>
          </section>
        </>
      )}
    </section>
  );
}
