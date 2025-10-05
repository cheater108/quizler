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
import Link from "next/link";

const QuizCard = ({ quiz, id }: { quiz: IQuizInfo, id: string }) => {
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
                    <Link href={`/take/${id}`}>
                        <Button>Take Quiz</Button>
                    </Link>
                </CardAction>
            </CardHeader>
        </Card>
    )
}

export default QuizCard