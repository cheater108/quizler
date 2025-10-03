import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const CreateQuestion = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-between items-center mb-2">
          <CardTitle>Question #1</CardTitle>
          <Button variant="outline">Delete</Button>
        </div>
        <CardDescription>
          <Input placeholder="Enter the question ?" />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Input placeholder="Option 1" />
          </div>
          <div className="grid gap-2">
            <Input placeholder="Option 2" />
          </div>
          <div className="grid gap-2">
            <Input placeholder="Option 3" />
          </div>
          <div className="grid gap-2">
            <Input placeholder="Option 4" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default CreateQuestion