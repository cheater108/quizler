import { IQuestion, IQuiz } from "@/@types/type";
import mongoose, { Schema } from "mongoose";

const QuestionSchema = new Schema<IQuestion>({
	questionNo: { type: Number, required: true },
	question: { type: String, required: true },
	optionA: { type: String, required: true },
	optionB: { type: String, required: true },
	optionC: { type: String, required: true },
	optionD: { type: String, required: true },
	correct: { type: String, enum: ["A", "B", "C", "D"], required: true },
});

const QuizSchema = new Schema<IQuiz>({
	name: { type: String, required: true },
	quizName: { type: String, required: true },
	topic: {
		type: String,
		enum: ["math", "science", "general", "others", ""],
		required: true,
	},
	time: { type: String, enum: ["5", "10"], required: true },
	questions: { type: [QuestionSchema], required: true },
});

const QuizModel = mongoose.models.Quiz || mongoose.model<IQuiz>("Quiz", QuizSchema);

export default QuizModel;
