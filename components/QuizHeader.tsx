import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { useState } from "react";

interface IQuizHeaderProps {
  onStart: (name: string) => void;
}

const QuizHeader = ({ onStart }: IQuizHeaderProps) => {
  const [name, setName] = useState<string>("");

  const handleStart = () => {
    if (name.trim()) {
      onStart(name);
    }
  };

  return (
    <div className="flex gap-4 w-full max-w-lg mx-auto mt-10">
      <Input
        name="name"
        placeholder="your name to start"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button onClick={handleStart}>Start quiz</Button>
    </div>
  );
};

export default QuizHeader;