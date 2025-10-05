import { Input } from "@/components/ui/input"
import { Button } from "./ui/button"
const QuizHeader = () => {
  return (
    <div className="flex gap-4">
      <Input name="name" placeholder="your name to start" />
      <Button>Start quiz</Button>
    </div>
  )
}

export default QuizHeader