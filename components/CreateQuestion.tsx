import { IQuestion } from "@/@types/type"
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

const CreateQuestion = ({ ques, deleteQues }: { ques: IQuestion, deleteQues: (id: number) => void }) => {
  const {
    questionNo,
    question,
    optionA,
    optionB,
    optionC,
    optionD,
    correct
  } = ques;

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-between items-center mb-2">
          <CardTitle>Question #{questionNo}</CardTitle>
          <Button onClick={() => deleteQues(questionNo)} variant="outline">Delete</Button>
        </div>
        <CardDescription>
          <Input placeholder="Enter the question ?" value={question} />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Input placeholder="Option 1" value={optionA} />
          </div>
          <div className="grid gap-2">
            <Input placeholder="Option 2" value={optionB} />
          </div>
          <div className="grid gap-2">
            <Input placeholder="Option 3" value={optionC} />
          </div>
          <div className="grid gap-2">
            <Input placeholder="Option 4" value={optionD} />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex-col items-start">
        <p>Select correct option</p>
        <div className="flex gap-2 w-full mt-2">
          {['A', 'B', 'C', 'D'].map((op) => (
            <Button key={op} className="flex-1" variant={op === correct ? 'default' : 'outline'}>
              {op}
            </Button>
          ))}
        </div>
      </CardFooter>
    </Card>
  )
}

export default CreateQuestion