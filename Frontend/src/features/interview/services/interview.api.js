import axios from "axios";  

const api = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true,
})

/**
 * @name generateInterviewReport
 * @description Generate an interview report using AI based on job description, self description, and resume file
 * @param {Object} payload
 * @param {string} payload.jobDescription
 * @param {string} payload.selfDescription
 * @param {File} payload.resumeFile
 * @returns {Promise<Object>} Response data from API
 */
export const generateInterviewReport = async ({jobDescription, selfDescription, resumeFile}) =>{
    const formData = new FormData();
    formData.append("jobDescription" , jobDescription);
    formData.append("selfDescription", selfDescription);
    formData.append("resumeFile", resumeFile);

    const response = await api.post("/api/interview/", formData, {
        headers: {
             "Content-Type": "multipart/form-data"
        }
    });
    return response.data;
}

/**
 * @name getInterviewReportById
 * @description Get an interview report by interviewId
 * @param {string} interviewId
 * @returns {Promise<Object>} Response data from API
 */
export const getInterviewReportById = async(interviewId) =>{
    const response = await api.get(`/api/interview/report/${interviewId}`);
    return response.data;
}

/**
 * @name getAllInterviewReports
 * @description Get all interview reports of logged in user
 * @returns {Promise<Array<Object>>} Array of interview reports
 */
export const getAllInterviewReports = async() =>{
    const response = await api.get("/api/interview/");
    return response.data;
}