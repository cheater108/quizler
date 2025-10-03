import CreateQuestion from "@/components/CreateQuestion"
import QuizHeader from "@/components/CreateQuizHeader"
import { Separator } from "@/components/ui/separator"
import { poppins } from "@/lib/fonts"
import { Button } from "@/components/ui/button"

const Create = () => {
  return (
    <main>
      <section className="p-4 m-auto md:w-1/2">
        <h1 className={`${poppins.className} text-3xl text-center my-4`}>
          Create your Quiz
        </h1>
        <p>Add details to create your quiz.</p>
        <form action="#" className="flex flex-col gap-4 mt-4">
          <QuizHeader />
          <Separator />
          <CreateQuestion />
          <Button>Add Question</Button>
        </form>
      </section>
    </main>
  )
}

export default Create