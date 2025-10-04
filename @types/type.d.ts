export interface IQuizInfo {
	name: string;
	quizName: string;
	topic: "math" | "science" | "general" | "others" | "";
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
