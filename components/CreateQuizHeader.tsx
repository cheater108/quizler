import { ICreateQuizHeaderProps, IQuizInfo } from "@/@types/type"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem
} from "@/components/ui/select"
import { ChangeEvent } from "react";
const QuizHeader = ({ quiz, changeInfo }: ICreateQuizHeaderProps) => {
  const { name, quizName, topic } = quiz;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    changeInfo(e.target.name as keyof IQuizInfo, e.target.value);
  }

  return (
    <>
      <Input name="name" placeholder="your name" value={name} onChange={handleChange} />
      <div className="flex gap-4">
        <Input name="quizName" placeholder="Quiz name" value={quizName} onChange={handleChange} />
        <Select value={topic} onValueChange={(value) => changeInfo('topic', value as "" | "math" | "science" | "general" | "others")}>
          <SelectTrigger className="w-1/2">
            <SelectValue placeholder='select a topic' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Topics</SelectLabel>
              <SelectItem value="math">Math</SelectItem>
              <SelectItem value="science">Science</SelectItem>
              <SelectItem value="general">General</SelectItem>
              <SelectItem value="others">Others</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </>
  )
}

export default QuizHeader