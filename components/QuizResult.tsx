import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

interface IQuizResultProps {
  score: number;
  total: number;
}

const QuizResult = ({ score, total }: IQuizResultProps) => {
  return (
    <Card className="w-full max-w-lg mx-auto mt-10">
      <CardHeader>
        <CardTitle>Quiz Result</CardTitle>
        <CardDescription>You have completed the quiz.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold text-center">
          You scored {score} out of {total}
        </p>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Link href="/take">
          <Button>Take Another Quiz</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default QuizResult;
