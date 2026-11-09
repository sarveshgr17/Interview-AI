# Interview AI

An AI-powered interview preparation platform. Upload your resume (or describe yourself), paste a job description, and get a personalized interview plan plus a tailored resume PDF.

## Features

- **Match score:** a 0-100 score showing how well your profile fits the job description.
- **Technical and behavioral questions:** each comes with the interviewer's intention and a model answer.
- **Skill gap analysis:** missing skills ranked by severity (low / medium / high).
- **30+ day preparation roadmap:** a day-wise plan with a focus area and tasks for each day.
- **Tailored resume PDF:** an ATS-friendly resume generated for the target role and downloaded as a PDF.
- **Report history:** every generated report is saved to your account and can be reopened anytime.
- **Secure auth:** JWT in an httpOnly cookie, bcrypt password hashing, and token blacklisting on logout.

## How It Works

1. Submit a job description with a resume PDF (max 3 MB) and/or a self-description.
2. The backend extracts the resume text and sends everything to Google Gemini.
3. Gemini returns a structured JSON report, validated with a Zod schema and stored in MongoDB.
4. The frontend renders the report as Technical, Behavioral, and Roadmap tabs, with the score and skill gaps in a sidebar.
5. "Download Resume" has Gemini generate resume HTML, which Puppeteer renders to an A4 PDF.

## Tech Stack

| Layer    | Technologies                                               |
| -------- | ---------------------------------------------------------- |
| Frontend | React 19, Vite, React Router, Axios, SCSS                  |
| Backend  | Node.js, Express 5, Mongoose, Multer, pdf-parse, Puppeteer |
| Database | MongoDB                                                    |
| AI       | Google Gemini (`@google/genai`) with Zod structured output |

## API

| Method | Endpoint                                       | Description                                                                  | Auth |
| ------ | ---------------------------------------------- | ---------------------------------------------------------------------------- | ---- |
| POST   | `/api/auth/register`                           | Register a user                                                              | No   |
| POST   | `/api/auth/login`                              | Log in                                                                       | No   |
| GET    | `/api/auth/logout`                             | Log out and blacklist the token                                              | No   |
| GET    | `/api/auth/get-me`                             | Get the current user                                                         | Yes  |
| POST   | `/api/interview/`                              | Generate a report (multipart: `resume`, `jobDescription`, `selfDescription`) | Yes  |
| GET    | `/api/interview/`                              | List your reports                                                            | Yes  |
| GET    | `/api/interview/report/:interviewId`           | Get one report                                                               | Yes  |
| POST   | `/api/interview/resume/pdf/:interviewReportId` | Generate a tailored resume PDF                                               | Yes  |

## Getting Started

**Prerequisites:** Node.js 18+, a MongoDB instance, and a [Google Gemini API key](https://aistudio.google.com/apikey).

```bash
# Backend
cd Backend
npm install
cp .env.example .env   # then fill in the values below
npm run dev            # runs on http://localhost:3000

# Frontend (new terminal)
cd Frontend
npm install
npm run dev            # runs on http://localhost:5173
```

**Backend `.env`:**

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/interview-ai
JWT_SECRET=your_secret
GOOGLE_GENAI_API_KEY=your_gemini_api_key
```

## Project Structure

```
Backend/src/
  controllers/   auth and interview logic
  middlewares/   JWT auth, file upload
  models/        User, InterviewReport, Blacklist
  routes/        /api/auth, /api/interview
  services/      Gemini + Puppeteer service
Frontend/src/
  features/auth/        login, register, protected routes
  features/interview/   home (input form), report page, API/hooks
```
