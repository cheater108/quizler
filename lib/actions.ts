"use server";
import QuizModel from "@/db/quizSchema";
import dbConnect from "@/db/db";
import { IQuiz } from "@/@types/type";

/**
 * Server action to create a new quiz
 * @param quizData - The quiz data to be saved
 * @returns The created quiz document or error
 */
export async function postQuiz(quizData: IQuiz) {
	try {
		await dbConnect();
		const quiz = new QuizModel(quizData);
		const savedQuiz = await quiz.save();
		return { success: true, data: savedQuiz };
	} catch (error: any) {
		return { success: false, error: error.message };
	}
}

/**
 * Server action to get all quizzes
 * @returns Array of quiz documents or error
 */
export async function getAllQuizzes() {
	try {
		await dbConnect();
		const quizzes = await QuizModel.find({});
		return { success: true, data: quizzes };
	} catch (error: any) {
		return { success: false, error: error.message };
	}
}
