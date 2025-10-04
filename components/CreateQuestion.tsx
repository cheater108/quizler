import { ICreateQuestProps, IQuestion } from "@/@types/type"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ChangeEvent } from "react"

const CreateQuestion = ({ ques, deleteQues, changeQues }: ICreateQuestProps) => {
  const {
    questionNo,
    question,
    optionA,
    optionB,
    optionC,
    optionD,
    correct
  } = ques;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    changeQues(questionNo, e.target.name as keyof IQuestion, e.target.value);
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-between items-center mb-2">
          <CardTitle>Question #{questionNo}</CardTitle>
          <Button onClick={() => deleteQues(questionNo)} variant="outline">Delete</Button>
        </div>
        <CardDescription>
          <Input name="question" placeholder="Enter the question ?" value={question} onChange={handleChange} />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Input name="optionA" placeholder="Option 1" value={optionA} onChange={handleChange} />
          </div>
          <div className="grid gap-2">
            <Input name="optionB" placeholder="Option 2" value={optionB} onChange={handleChange} />
          </div>
          <div className="grid gap-2">
            <Input name="optionC" placeholder="Option 3" value={optionC} onChange={handleChange} />
          </div>
          <div className="grid gap-2">
            <Input name="optionD" placeholder="Option 4" value={optionD} onChange={handleChange} />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex-col items-start">
        <p>Select correct option</p>
        <div className="flex gap-2 w-full mt-2">
          {['A', 'B', 'C', 'D'].map((op) => (
            <Button key={op} className="flex-1" variant={op === correct ? 'default' : 'outline'}
              onClick={() => changeQues(questionNo, 'correct', op as 'A' | 'B' | 'C' | 'D')}
            >
              {op}
            </Button>
          ))}
        </div>
      </CardFooter>
    </Card>
  )
}

export default CreateQuestion