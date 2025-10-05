"use client";
import { IQuizInfo } from "@/@types/type";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardAction,
} from "./ui/card";
import { Button } from "./ui/button";

const QuizCard = ({ quiz }: { quiz: IQuizInfo }) => {
    const { name, quizName, topic, time } = quiz;
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-xl">{quizName}</CardTitle>
                <CardDescription>Created by: {name}</CardDescription>
                <CardAction>
                    <Button>Take Quiz</Button>
                </CardAction>
            </CardHeader>
        </Card>
    )
}

export default QuizCard