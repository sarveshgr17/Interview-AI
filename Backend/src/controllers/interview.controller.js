const { PDFParse } = require("pdf-parse");
const generateInterviewReport = require("../services/ai.service");
const interviewReportModel = require("../models/interviewReport.model");

/**
 * @name generateInterviewReportController
 * @description Generates an interview report using AI based on resume, self description, and job description
 * @access Private
 */
async function generateInterviewReportController(req, res) {
	try {
		const { selfDescription, jobDescription } = req.body || {};

		let resumeText = "";

		if (req.file && req.file.buffer) {
			const parser = new PDFParse(Uint8Array.from(req.file.buffer));
			const resumeContent = await parser.getText();
			resumeText = resumeContent.text;
		} else if (req.body?.resume) {
			resumeText = req.body.resume;
		}

		if (!resumeText) {
			return res.status(400).json({
				message: "Resume (file upload or text) is required",
			});
		}

		if (!jobDescription) {
			return res.status(400).json({
				message: "Job description is required",
			});
		}

		const interviewReportByAi = await generateInterviewReport({
			resume: resumeText,
			selfDescription,
			jobDescription,
		});

		const interviewReport = await interviewReportModel.create({
			user: req.user.id || req.user._id,
			resume: resumeText,
			selfDescription,
			jobDescription,
			...interviewReportByAi,
		});

		return res.status(201).json({
			message: "Interview report generated successfully",
			interviewReport,
		});
	} catch (err) {
		console.error("Error generating interview report:", err);
		return res.status(500).json({
			message: "Failed to generate interview report",
			error: err.message,
		});
	}
}

/**
 * @name getInterviewReportController
 * @description Gets an interview report by interviewId
 * @access Private
 */
async function getInterviewReportByIdController(req, res) {

	const {interviewId} = req.params;
	const interviewReport = await interviewReportModel.findOne({_id: interviewId, user: req.user.id});
	
	if(!interviewReport){
		return res.status(400).json({
			message: "Interview report not found."
		})
	}

	res.status(200).json({
		message: "Interview report fetched successfully.",
		interviewReport
	})

}

/**
 * @name getAllInterviewReportsController
 * @description Gets all interview reports of logged in user
 * @access Private
 */
async function getAllInterviewReportsController(req, res) {
	const interviewReports = await interviewReportModel.find({ user: req.user.id }).sort({ createdAt: -1 }).select("-resume -selfDescription -jobDescription -__v -technicalQuestions -behavioralQuestions -skillGaps -preparationPlan")
	
	res.status(200).json({
		message: "Interview reports fetched successfully",
		interviewReports
	})
}

module.exports = {
	generateInterviewReportController,
	getInterviewReportByIdController,
	getAllInterviewReportsController
};
