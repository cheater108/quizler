import { IQuestion, IQuizInfo } from "@/@types/type";

export const quizInfoInitial: IQuizInfo = {
	name: "",
	quizName: "",
	topic: "",
	time: "5",
};

export const emptyQuestion: IQuestion = {
	questionNo: 1,
	question: "",
	optionA: "",
	optionB: "",
	optionC: "",
	optionD: "",
	correct: "A",
};

export const questionsInitial: IQuestion[] = [{ ...emptyQuestion }];
