import React,{useState, useEffect} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
const [questions, postQuestion]=useState([])
useEffect(() => {
  fetch("http://localhost:4000/questions")
    .then((r) => r.json())
    .then(data => {
      postQuestion(data);
    })
}
,[]);
const getQuestions= questions.map((value) => (
  <QuestionItem 
  key={value.id}
  question={value}
  onUpdate={handleUpdateQuestion}
  onDelete={handleDeleteQuestion}
  />
))

function handleUpdateQuestion(updatedQuestion){
  const updatedQuestions = questions.map(question => {
    if(question.id === updatedQuestion.id){
      return updatedQuestion;
    }
    else{
      return question;
    }
  })
  postQuestion(updatedQuestions);
}
function handleDeleteQuestion(deletedQuestion){
  const updatedQuestions = questions.filter(question => question.id!==deletedQuestion.id);
  postQuestion(updatedQuestions);
}

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul> 
       {getQuestions}
        </ul>
    </section>
  );
}

export default QuestionList;