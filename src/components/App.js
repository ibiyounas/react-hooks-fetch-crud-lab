import React, {useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [question, postQuestions]=useState([])
  const postNewQuestion = (newQuestion) => {
    postQuestions([...question, newQuestion])
  }

const onDelete= (data) => {
  const getQuestion = question.filter(question => question.id !== data.id)
  postQuestions(getQuestion)
};
 


  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm postNewQuestion={postNewQuestion}  /> : <QuestionList  onDelete={onDelete}  />}
    </main>
  );
}

export default App;