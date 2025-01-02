import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Question from "@/components/Question";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const App = () => {
  const [activeTab, setActiveTab] = useState("1");
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [quizData, setQuizData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(18);

  const categories = [
    { id: 18, name: "Science: Computers" }, 
  ];


  useEffect(() => {
    const fetchQuizData = async () => {
      const response = await fetch(`https://opentdb.com/api.php?amount=5&category=${selectedCategory}&type=multiple`);
      const data = await response.json();
      const formattedQuizData = data.results.map((item) => ({
        question: item.question,
        options: [...item.incorrect_answers, item.correct_answer],
        answer: item.correct_answer,
      }));
      setQuizData(formattedQuizData);
    };

    fetchQuizData();
  }, [selectedCategory]);

  const handleNext = (nextTab) => {
    setActiveTab(nextTab.toString());
  };

  const handleAnswerChange = (questionIndex, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: answer,
    }));
  };

  const handleSubmit = () => {
    let newScore = 0;
    quizData.forEach((ques, index) => {
      if (ques.answer === answers[index + 1]) {
        newScore += 20;
      }
    });
    setScore(newScore);
  };

  return (
    <div className="h-screen">
      <h1 className="font-bold text-xl p-6">Computer Science Quiz</h1>
      {quizData.length > 0 && (
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value)} className="w-[60%] px-4">
          <TabsList className="bg-black">
            {quizData.map((_, index) => (
              <TabsTrigger key={index} value={(index + 1).toString()}>
                Question {index + 1}
              </TabsTrigger>
            ))}
          </TabsList>
          {quizData.map((quiz, index) => (
            <TabsContent key={index} value={(index + 1).toString()}>
              <Question
                ques={quiz}
                quesIndex={index + 1}
                selectedAnswer={answers[index + 1]}
                onAnswerChange={handleAnswerChange}
              />
              <div className="flex justify-between mt-4">
                {index < quizData.length - 1 && (
                  <Button onClick={() => handleNext(index + 2)}>Next</Button>
                )}
                {index === quizData.length - 1 && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="text-black" onClick={handleSubmit}>
                        Submit
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Your Results</DialogTitle>
                        <DialogDescription>{`Your Score: ${score}`}</DialogDescription>
                      </DialogHeader>
                      <div className="mt-4">
                        {quizData.map((quiz, index) => (
                          <div key={index} className="my-2">
                            <p className="font-semibold">{quiz.question}</p>
                            <p className="text-gray-700">
                              <strong>Your Answer: </strong>{answers[index + 1] || "Not Answered"}
                            </p>
                            <p className="text-green-500">
                              <strong>Correct Answer: </strong>{quiz.answer}
                            </p>
                          </div>
                        ))}
                      </div>
                    </DialogContent>
                  </Dialog>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      )}
    </div>
  );
};

export default App;
