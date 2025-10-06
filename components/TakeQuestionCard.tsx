import { IQuestion } from "@/@types/type";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Checkbox } from "./ui/checkbox";

interface ITakeQuestionCardProps {
  question: IQuestion;
  selectedOption: string | null;
  onOptionChange: (option: string) => void;
}

const TakeQuestionCard = ({ question, selectedOption, onOptionChange }: ITakeQuestionCardProps) => {
  const options = [
    { id: "A", label: question.optionA },
    { id: "B", label: question.optionB },
    { id: "C", label: question.optionC },
    { id: "D", label: question.optionD },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Question #{question.questionNo}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{question.question}</p>
        <div className="space-y-2">
          {options.map((option) => (
            <div key={option.id} className="flex items-center space-x-2">
              <Checkbox
                id={`${question.questionNo}-${option.id}`}
                checked={selectedOption === option.id}
                onCheckedChange={() => onOptionChange(option.id)}
              />
              <label htmlFor={`${question.questionNo}-${option.id}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                {option.label}
              </label>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TakeQuestionCard;
