import { poppins } from "@/lib/fonts";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import QuizModel from "@/db/quizSchema";
import AttempQuiz from "@/components/TakeQuiz";
import { IQuestion, IQuiz } from "@/@types/type";
import { Document, isValidObjectId } from "mongoose";
const TakeQuiz = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  if (!isValidObjectId(id)) {
    return <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Link href='/take'>
          <Button className="rounded-full aspect-square"> <ArrowLeft /> </Button>
        </Link>
        <h1 className={`${poppins.className} text-3xl text-center my-4`}>
          No such quiz exists 404.
        </h1>
      </div>
    </div>
  }

  const quiz = await QuizModel.findById(id).lean() as unknown as IQuiz;

  if (!quiz) {
    return <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Link href='/take'>
          <Button className="rounded-full aspect-square"> <ArrowLeft /> </Button>
        </Link>
        <h1 className={`${poppins.className} text-3xl text-center my-4`}>
          No such quiz exists 404.
        </h1>
      </div>
    </div>
  }

  quiz._id = String(quiz._id).toString();
  quiz.questions = quiz.questions?.map((q): IQuestion => {
    const { _id, ...rest } = q as unknown as Document;
    return { ...rest, _id: null } as unknown as IQuestion;
  })

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link href='/take'>
            <Button className="rounded-full aspect-square"> <ArrowLeft /> </Button>
          </Link>
          <h1 className={`${poppins.className} text-3xl text-center my-4`}>
            Taking quiz: {quiz.name}
          </h1>
        </div>
      </div>
      <AttempQuiz quiz={quiz} />
    </>
  )
}

export default TakeQuiz