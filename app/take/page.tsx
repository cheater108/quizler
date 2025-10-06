import { IQuiz } from "@/@types/type";
import QuizCard from "@/components/QuizCard";
import { Button } from "@/components/ui/button";
import { getAllQuizzes } from "@/lib/actions"
import { poppins } from "@/lib/fonts"
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
const Take = async () => {
  const { data, success } = await getAllQuizzes();
  return (
    <>
      <div className="flex gap-4 items-center">
        <Link href='/'>
          <Button className="rounded-full aspect-square"> <ArrowLeft /> </Button>
        </Link>
        <h1 className={`${poppins.className} text-3xl text-center my-4`}>
          Take any quiz...
        </h1>
      </div>
      <div className="flex flex-col gap-4">
        {data?.length === 0 ? <p>
          No quiz available, please create one.
        </p> : data?.map((q: IQuiz) => (
          <QuizCard key={q.id} quiz={{
            quizName: q.quizName,
            name: q.name,
            topic: q.topic,
            time: q.time,
          }}
            id={q.id}
          />
        ))}
      </div>
    </>
  )
}

export default Take