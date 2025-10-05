import { IQuiz } from "@/@types/type";
import QuizCard from "@/components/QuizCard";
import { getAllQuizzes } from "@/lib/actions"
import { poppins } from "@/lib/fonts"
const Take = async () => {
  const { data, success } = await getAllQuizzes();
  return (
    <main>
      <section className="p-4 m-auto md:w-1/2">
        <div className="flex justify-between items-center">
          <h1 className={`${poppins.className} text-3xl text-center my-4`}>
            Take any quiz...
          </h1>
        </div>
        <div className="flex flex-col gap-4">
          {data?.map((q: IQuiz) => (
            <QuizCard key={q.id} quiz={{
              quizName: q.quizName,
              name: q.name,
              topic: q.topic,
              time: q.time,
            }} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Take