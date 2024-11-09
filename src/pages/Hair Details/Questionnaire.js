import React from "react";
import { useState } from "react";
import "../../styles/Questionnaire.css";

//defining the questions that will be asked
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

//defining some recommendations based on the questions asked
//only applicable to certain questions
const hairAdvice = [
  {
    texture: {
      Straight:
        "Focus on volumizing products while avoiding heavy oils that can weigh hair down.",
      Wavy: "Use lightweight curl-enhancing products and scrunch hair while damp to enhance natural waves.",
      Curly:
        "Implement the LOC (Leave-in, Oil, Cream) method to maintain moisture and definition.",
      Kinky:
        "Deep condition regularly and protect hair at night with a satin bonnet or pillowcase.",
    },
    porosity: {
      "Low porosity":
        "Apply products to damp hair and use heat when deep conditioning to help products penetrate.",
      "Medium porosity":
        "Maintain a balanced routine of moisture and protein to keep hair healthy.",
      "High porosity":
        "Layer products and seal with heavy oils to prevent moisture loss.",
      "I'm not sure":
        "Try the float test with a clean strand of hair to determine your porosity level.",
    },
    condition: {
      Dry: "Focus on deep conditioning treatments and leave-in moisturizers.",
      Oily: "Use lightweight products and focus on scalp care rather than hair lengths.",
      Balanced:
        "Maintain your current routine while protecting from environmental damage.",
      Damaged:
        "Incorporate regular protein treatments and minimize heat styling.",
      Healthy:
        "Focus on preventive care and regular trims to maintain current health.",
      "Chemically Treated":
        "Use bond-building treatments and deep condition weekly.",
    },
    concerns: {
      Frizz:
        "Apply styling products to soaking wet hair and use microfiber towels for drying.",
      "Damage/Breakage":
        "Incorporate protein treatments and handle hair gently when wet.",
      Oiliness: "Focus on scalp care and gradually extend time between washes.",
      "Scalp issues":
        "Use targeted scalp treatments and maintain a regular clarifying routine.",
      Dryness: "Layer moisturizing products and seal with appropriate oils.",
      "Split Ends":
        "Schedule regular trims and protect ends with leave-in treatments.",
      "Product Buildup":
        "Use clarifying shampoo weekly and focus on proper product distribution.",
    },
    goals: {
      "Increase Moisture":
        "Layer hydrating products and seal with appropriate oils for your hair type.",
      "Repair, protect and strengthen":
        "Use protein treatments and minimize heat styling and manipulation.",
      "Increase shine":
        "Include regular clarifying treatments and cold water rinses in your routine.",
      "Promote hair growth":
        "Focus on scalp massage and protective styling to retain length.",
      "Add Volume":
        "Use lightweight volumizing products and focus on root-lifting techniques.",
      "Enhance Definition":
        "Apply styling products to soaking wet hair using praying hands method.",
    },
  },
];

const getAdvice = (answers) => {
  const advice = [];
  const adviceData = hairAdvice[0];

  //hair texture advice handling
  if (answers[1]) {
    answers[1].forEach((textures) => {
      if (adviceData.texture[textures]) {
        advice.push({
          category: `based on your hair texture: ${textures.toLowerCase()} `,
          advice: adviceData.texture[textures],
        });
      }
    });
  }

  //hair porosity advice handling
  if (answers[3]) {
    answers[3].forEach((porositys) => {
      if (adviceData.porosity[porositys]) {
        advice.push({
          category: `based on your hair porosity: ${porositys.toLowerCase()} `,
          advice: adviceData.porosity[porositys],
        });
      }
    });
  }

  //hair condition advice handling
  if (answers[5]) {
    answers[5].forEach((conditions) => {
      if (adviceData.condition[conditions]) {
        advice.push({
          category: `based on your current hair condition: ${conditions.toLowerCase()} `,
          advice: adviceData.condition[conditions],
        });
      }
    });
  }

  //hair concerns advice handling
  if (answers[6]) {
    answers[6].forEach((concern) => {
      if (adviceData.concerns[concern]) {
        advice.push({
          category: `based on your hair concerns: ${concern.toLowerCase()} `,
          advice: adviceData.concerns[concern],
        });
      }
    });
  }

  //hair goals advice handling
  if (answers[8]) {
    answers[8].forEach((goal) => {
      if (adviceData.goals[goal]) {
        advice.push({
          category: `based on your hair goals: ${goal.toLowerCase()} `,
          advice: adviceData.goals[goal],
        });
      }
    });
  }

  return advice;
};

export default function Questionnaire() {
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(-1);
  const [showResults, setShowResults] = useState(false);
  const [showAdvice, setShowAdvice] = useState(false);

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
    } else {
      setShowResults(true);
      setShowAdvice(false);
    }
  };

  // Function to move to the previous question
  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  // function to start the questionnaire
  const handleStart = () => {
    setCurrentQuestion(0);
  };

  //function to restart the questionnaire
  const handleRestart = () => {
    setAnswers({});
    setCurrentQuestion(-1);
    setShowResults(false);
    setShowAdvice(false);
  };

  //function to go from summary to advice
  const handleAdvice = () => {
    setShowAdvice(true);
    setShowResults(false);
  };

  //function to go from advice to summary
  const handleResults = () => {
    setShowAdvice(false);
    setShowResults(true);
  };

  const currentQuestionData = questions[currentQuestion];

  //show advice
  if (showAdvice) {
    const personalAdvice = getAdvice(answers);
    return (
      <section className="question-container">
        <h2 className="advice-title">your personal recommendations</h2>
        <section className="advice-content">
          {personalAdvice.map((item, index) => (
            <section key={index} className="advice-card">
              <h3 className="advice-category">{item.category}</h3>
              <p className="advice-text">{item.advice}</p>
            </section>
          ))}
        </section>
        <section className="advice-btn">
          <button onClick={handleRestart} className="btn">
            retake
          </button>
          <button onClick={handleResults} className="btn">
            results
          </button>
        </section>
      </section>
    );
  }

  //show results
  if (showResults) {
    return (
      <section className="question-container">
        <h2 className="question-heading">kurls results</h2>
        <main className="result-container">
          {questions.map((q) => (
            <div key={q.id} className="result-item">
              <h3 className="result-question">{q.question}</h3>
              <p className="result-answer">
                {answers[q.id]?.length > 0
                  ? answers[q.id].join(",")
                  : "not answered"}
              </p>
            </div>
          ))}
        </main>
        <section className="results-btn">
          <button onClick={handleRestart} className="btn">
            retake
          </button>
          <button onClick={handleAdvice} className="rec-btn">
            recommendations
          </button>
        </section>
      </section>
    );
  }

  //show questions
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
              disabled={!answers[currentQuestionData.id]?.length}
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
