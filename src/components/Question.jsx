import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from './ui/button';

const Question = ({ i, onNext }) => {
  const Quiz = [
    {
      question: "What does CSS stand for?",
      options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
      answer: "Cascading Style Sheets"
    },
    {
      question: "Which of the following is used to style web pages?",
      options: ["HTML", "JavaScript", "CSS", "Python"],
      answer: "CSS"
    },
    {
      question: "Which of the following is the correct syntax for creating a variable in JavaScript?",
      options: ["var x = 10;", "let x = 10;", "int x = 10;", "Both var x = 10; and let x = 10;"],
      answer: "Both var x = 10; and let x = 10;"
    },
    {
      question: "Which HTML tag is used to define an internal style sheet?",
      options: ["<script>", "<style>", "<link>", "<meta>"],
      answer: "<style>"
    },
    {
      question: "What is the main purpose of Git?",
      options: ["To manage projects", "To store data", "To control versioning of code", "To deploy applications"],
      answer: "To control versioning of code"
    },
    {
      question: "Which of the following is a JavaScript framework?",
      options: ["React", "Angular", "Vue", "All of the above"],
      answer: "All of the above"
    },
    {
      question: "Which method in JavaScript is used to parse a JSON string?",
      options: ["JSON.parse()", "JSON.stringify()", "JSON.load()", "JSON.decode()"],
      answer: "JSON.parse()"
    },
    {
      question: "Which SQL keyword is used to retrieve data from a database?",
      options: ["GET", "SELECT", "FETCH", "RETRIEVE"],
      answer: "SELECT"
    },
    {
      question: "What is the purpose of Node.js?",
      options: ["To run JavaScript on the server", "To create a front-end framework", "To design databases", "To write CSS"],
      answer: "To run JavaScript on the server"
    },
    {
      question: "What is the purpose of a RESTful API?",
      options: ["To provide an interface for user authentication", "To perform CRUD operations over HTTP", "To store data in a database", "To compile JavaScript code"],
      answer: "To perform CRUD operations over HTTP"
    }
  ];

  return (
    <div>
      <div className='flex-col justify-center items-center'>
        <p className='px-6 text-lg'>{Quiz[i - 1]?.question}</p>
        <div className='flex-col px-7 py-4 gap-8'>
          {Quiz[i - 1]?.options.map((option, optionIndex) => (
            <div key={optionIndex} className='flex gap-2 items-center my-2'>
              <input type="radio" name={`option${i}`} id={`option${optionIndex}`} />
              <p className='pb-1'>{option}</p>
            </div>
          ))}
          {i < 5 && (
            <Button onClick={() => onNext(i + 1)} className="mt-4">
              Next
            </Button>
          )}
          {
            i == 5 && (
              <div className='mt-8'>
                <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="text-black">Submit</Button>
                </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Are you absolutely sure?</DialogTitle>
                      <DialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Question;
