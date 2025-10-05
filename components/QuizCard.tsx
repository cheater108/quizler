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
import { Badge } from "./ui/badge";

const QuizCard = ({ quiz }: { quiz: IQuizInfo }) => {
    const { name, quizName, topic, time } = quiz;
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-xl">{quizName}</CardTitle>
                <CardDescription className="flex gap-2">
                    <p>Created by: <span className="font-bold">{name}</span></p>
                    <span className="flex gap-2">
                        <Badge>{topic}</Badge>
                        <Badge>{time} mins</Badge>
                    </span>
                </CardDescription>

                <CardAction>
                    <Button>Take Quiz</Button>
                </CardAction>
            </CardHeader>
        </Card>
    )
}

export default QuizCard