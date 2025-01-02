import React from "react";

const Question = ({ ques, quesIndex, selectedAnswer, onAnswerChange }) => {
  const handleOptionChange = (option) => {
    onAnswerChange(quesIndex, option);
  };

  return (
    <div>
      <p className="px-6 text-lg" dangerouslySetInnerHTML={{ __html: ques.question }} />
      <div className="flex-col px-7 py-4 gap-4">
        {ques.options.map((option, index) => (
          <div key={index} className="flex gap-2 items-center my-2">
            <input
              type="radio"
              name={`option${quesIndex}`}
              checked={selectedAnswer === option}
              onChange={() => handleOptionChange(option)}
            />
            <p dangerouslySetInnerHTML={{ __html: option }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
