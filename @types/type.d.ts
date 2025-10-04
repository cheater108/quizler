import { Document } from "mongoose";

export interface IQuizInfo {
	name: string;
	quizName: string;
	topic: "math" | "science" | "general" | "others" | "";
	time: "5" | "10";
}

export interface IQuestion {
	questionNo: number;
	question: string;
	optionA: string;
	optionB: string;
	optionC: string;
	optionD: string;
	correct: "A" | "B" | "C" | "D";
}

export interface ICreateQuestProps {
	ques: IQuestion;
	deleteQues: (id: number) => void;
	changeQues: <K extends keyof IQuestion>(id: number, k: K, val: IQuestion[K]) => void;
}

export interface ICreateQuizHeaderProps {
	quiz: IQuizInfo;
	changeInfo: <K extends keyof IQuizInfo>(key: K, value: IQuizInfo[K]) => void;
}

export interface IQuiz extends IQuizInfo, Document {
	questions: IQuestion[];
}
