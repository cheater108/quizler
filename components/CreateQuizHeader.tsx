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
const QuizHeader = () => {
  return (
    <>
      <Input placeholder="your name" />
      <div className="flex gap-4">
        <Input placeholder="Quiz name" />
        <Select>
          <SelectTrigger className="w-1/2">
            <SelectValue placeholder='select a topic' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Topics</SelectLabel>
              <SelectItem value="math">Math</SelectItem>
              <SelectItem value="Science">Science</SelectItem>
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