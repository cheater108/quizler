'use client';
import CreateQuestion from "@/components/CreateQuestion"
import QuizHeader from "@/components/CreateQuizHeader"
import { Separator } from "@/components/ui/separator"
import { poppins } from "@/lib/fonts"
import { Button } from "@/components/ui/button"
import { FormEvent, useState } from "react"
import { emptyQuestion, questionsInitial, quizInfoInitial } from "@/lib/initialStates"
import { IQuestion, IQuizInfo } from "@/@types/type";
import { ButtonGroup, ButtonGroupSeparator } from "@/components/ui/button-group";
import { postQuiz } from "@/lib/actions";

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

  const changeQuestionField = <K extends keyof IQuestion>(id: number, key: K, value: IQuestion[K]) => {
    const changedQuestions = questions.map((q) => {
      if (q.questionNo === id) {
        return { ...q, [key]: value };
      }
      return q;
    });
    setQuestions(changedQuestions);
  }

  const changeQuizInfo = <K extends keyof IQuizInfo>(key: K, value: IQuizInfo[K]) => {
    setQuizInfo({ ...quizInfo, [key]: value })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { success, error } = await postQuiz({ ...quizInfo, questions })
    if (success) {
      console.log("Successfully added quiz:")
    }
    else {
      console.log(error)
    }
  }

  return (
    <main>
      <section className="p-4 m-auto md:w-1/2">
        <div className="flex justify-between items-center">
          <h1 className={`${poppins.className} text-3xl text-center my-4`}>
            Create your Quiz
          </h1>
          <ButtonGroup>
            <Button onClick={() => changeQuizInfo('time', '5')} variant={quizInfo.time == "5" ? 'default' : 'outline'}>
              5 mins
            </Button>
            <ButtonGroupSeparator />
            <Button onClick={() => changeQuizInfo('time', '10')} variant={quizInfo.time == "10" ? 'default' : 'outline'}>
              10 mins
            </Button>
          </ButtonGroup>
        </div>
        <p>Add details to create your quiz.</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
          <QuizHeader quiz={quizInfo} changeInfo={changeQuizInfo} />
          <Separator />
          {questions.map((q, id) => (
            <CreateQuestion
              key={id}
              ques={q}
              deleteQues={deleteQuestion}
              changeQues={changeQuestionField} />
          ))}
          <div className="flex gap-4">
            <Button className="flex-1" variant="outline" type="button" onClick={addQuestion}>Add Question</Button>
            <Button className="flex-1" type="submit">Submit Quiz</Button>
          </div>
        </form>
      </section>
    </main>
  )
}

export default Create