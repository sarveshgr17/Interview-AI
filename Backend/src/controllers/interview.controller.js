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

module.exports = {
	generateInterviewReportController,
};
