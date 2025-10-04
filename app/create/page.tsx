'use client';
import CreateQuestion from "@/components/CreateQuestion"
import QuizHeader from "@/components/CreateQuizHeader"
import { Separator } from "@/components/ui/separator"
import { poppins } from "@/lib/fonts"
import { Button } from "@/components/ui/button"
import { FormEvent, useState } from "react"
import { emptyQuestion, questionsInitial, quizInfoInitial } from "@/lib/initialStates"
import { IQuestion } from "@/@types/type";

const Create = () => {
  const [quizInfo, setQuizInfo] = useState(quizInfoInitial);
  const [questions, setQuestions] = useState<IQuestion[]>(questionsInitial);

  const addQuestion = () => {
    const newQuestion: IQuestion = {
      ...emptyQuestion,
      questionNo: questions.length + 1,
    }
    setQuestions([...questions, newQuestion])
  }

  const deleteQuestion = (id: number) => {
    const filteredQues = questions.filter((q) => q.questionNo !== id);
    setQuestions(
      filteredQues.map((q, ind) => ({ ...q, questionNo: ind + 1 }))
    );
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <main>
      <section className="p-4 m-auto md:w-1/2">
        <h1 className={`${poppins.className} text-3xl text-center my-4`}>
          Create your Quiz
        </h1>
        <p>Add details to create your quiz.</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
          <QuizHeader />
          <Separator />
          {questions.map((q, id) => (
            <CreateQuestion
              key={id}
              ques={q}
              deleteQues={deleteQuestion} />
          ))}
          <Button type="button" onClick={addQuestion}>Add Question</Button>
        </form>
      </section>
    </main>
  )
}

export default Create