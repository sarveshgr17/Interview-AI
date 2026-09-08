import { useState } from "react";
import { Link, useLocation } from "react-router";
import InterviewNavbar from "../components/InterviewNavbar";
import "../style/interview.scss";

const DEFAULT_REPORT_DATA = {
  message: "Interview report generated successfully",
  interviewReport: {
    jobDescription:
      "Job Title: Software Engineer – Backend\r\n\r\nCompany: TechSphere Technologies\r\n\r\nLocation: Bengaluru, India\r\nEmployment Type: Full-time\r\nExperience: 0–2 years\r\n\r\nJOB DESCRIPTION\r\n\r\nTechSphere Technologies is looking for a Software Engineer to join our backend engineering team. The ideal candidate should have strong programming fundamentals and an interest in building scalable and reliable software systems.\r\n\r\nRESPONSIBILITIES\r\n\r\n- Design, develop, test, and maintain backend services and REST APIs.\r\n- Write clean, maintainable, and efficient code.\r\n- Work with databases and optimize database queries.\r\n- Collaborate with frontend engineers, product managers, and other teams.\r\n- Debug production and development issues.\r\n- Participate in code reviews and technical discussions.\r\n- Write unit tests and contribute to improving application reliability.\r\n- Learn and adopt new technologies when required.\r\n\r\nREQUIRED SKILLS\r\n\r\n- Strong knowledge of at least one programming language such as C++, Java, Python, or JavaScript.\r\n- Good understanding of Data Structures and Algorithms.\r\n- Knowledge of Object-Oriented Programming.\r\n- Understanding of databases and SQL.\r\n- Familiarity with REST APIs and backend development.\r\n- Basic understanding of Git and software development workflows.\r\n- Good problem-solving and communication skills.\r\n\r\nPREFERRED SKILLS\r\n\r\n- Experience with Node.js or Python backend frameworks.\r\n- Familiarity with MongoDB or PostgreSQL.\r\n- Experience with Docker or cloud platforms.\r\n- Understanding of system design and distributed systems.\r\n- Previous internship or project experience.\r\n\r\nQUALIFICATIONS\r\n\r\n- Bachelor's degree in Computer Science, Information Technology, or a related field.\r\n- Strong analytical and problem-solving abilities.\r\n- Ability to work independently as well as in a team.\r\n- Willingness to learn and adapt to new technologies.\r\n",
    resume:
      "Rahul Sharma\nrahul.sharma@example.com | +91 98765 43210 | Bengaluru, India\nLinkedIn: linkedin.com/in/rahul-sharma | GitHub: github.com/rahulsharma\nEDUCATION\nB.Tech in Computer Science and Engineering\nABC Institute of Technology, Bengaluru | 2022 – 2026 | CGPA: 8.6/10\nSKILLS\nLanguages: C++, Python, JavaScript, SQL\nWeb: React.js, Node.js, Express.js, HTML, CSS\nDatabases: MongoDB, PostgreSQL\nTools: Git, GitHub, Docker, Postman\nConcepts: Data Structures & Algorithms, OOP, DBMS, Operating Systems, Computer Networks\nPROJECTS\nInterviewAI\n• Built an AI-powered interview preparation platform that generates technical and behavioral questions based on a\ncandidate's resume and job description.\n• Implemented resume parsing and job-description analysis to identify relevant skills and generate personalized\nquestions.\n• Developed the frontend using React and integrated REST APIs with the backend.\nTaskFlow\n• Developed a full-stack task management application using React, Node.js, Express, and MongoDB.\n• Implemented authentication, task creation, filtering, sorting, and status tracking.\n• Designed REST APIs for communication between the frontend and backend.\nEXPERIENCE\nSoftware Development Intern — TechNova Solutions\nMay 2025 – July 2025\n• Developed and maintained REST APIs using Node.js and Express.\n• Improved API response time by optimizing database queries.\n• Worked with the development team using Git and GitHub.\n• Fixed bugs and contributed to code reviews.\nACHIEVEMENTS\n• Solved 400+ problems on LeetCode and CodeChef.\n• Participated in multiple college-level hackathons.\n• Finalist in a university-level coding competition.\nINTERESTS\nCompetitive programming, software development, AI tools, and system design.\n\n-- 1 of 1 --\n\n",
    selfDescription:
      "I am a Computer Science undergraduate with a strong interest in software development, problem solving, and artificial intelligence. I enjoy building practical applications and understanding how systems work internally rather than simply relying on existing solutions.\r\n\r\nI have experience working with C++, Python, JavaScript, React, Node.js, and databases. I am particularly comfortable with data structures and algorithms, backend development, and building REST APIs.\r\n\r\nDuring my internship, I worked on backend services and database optimization, which helped me understand how software is developed in a team environment. I have also built several personal projects, including an AI-powered interview preparation platform.\r\n\r\nI consider myself a curious and consistent learner. When I encounter a difficult technical problem, I prefer breaking it into smaller parts, understanding the underlying concepts, and then implementing a solution. I am currently looking for a software engineering role where I can contribute to real-world products while continuing to improve my technical skills.",
    title: "Software Engineer – Backend",
    matchScore: 88,
    technicalQuestions: [
      {
        question:
          "Can you explain the event loop in Node.js and how it handles asynchronous operations?",
        intention:
          "To assess the candidate's deep understanding of the Node.js runtime environment, which is central to the job's backend focus.",
        answer:
          "Explain that Node.js is single-threaded but uses the event loop to perform non-blocking I/O operations. Mention the phases of the event loop (timers, I/O callbacks, idle/prepare, poll, check, close callbacks). Discuss how tasks are offloaded to the system kernel or the thread pool (libuv) and how callbacks are placed in the task queue for execution.",
      },
      {
        question:
          "In your internship, you mentioned optimizing database queries to improve API response time. What specific techniques did you use?",
        intention:
          "To evaluate practical experience in database performance tuning and understanding of backend efficiency.",
        answer:
          "Discuss techniques like indexing frequently searched columns, avoiding SELECT *, using query explain plans (EXPLAIN ANALYZE) to identify bottlenecks, implementing database caching, or optimizing joins. Specifically mention whether these were applied to MongoDB or PostgreSQL as per your resume.",
      },
      {
        question:
          "Given a large dataset of logs, how would you design a system to find the top K most frequent IP addresses?",
        intention:
          "To test problem-solving skills, knowledge of Data Structures (Heaps/HashMaps), and basic system design thinking.",
        answer:
          "Start with a HashMap to store frequencies of each IP. Then, use a Min-Heap of size K to maintain the top elements. Discuss time complexity (O(N log K)) and space complexity. Mention how this could be scaled using MapReduce if the data doesn't fit in memory.",
      },
      {
        question:
          "What are the principles of RESTful API design, and how do you handle versioning in your APIs?",
        intention:
          "To verify the candidate's knowledge of standard backend communication protocols.",
        answer:
          "Cover the six constraints: Uniform Interface, Client-Server, Statelessness, Cacheability, Layered System, and Code on Demand. For versioning, mention strategies like URI versioning (/v1/resource), header versioning, or query parameter versioning, and explain the pros/cons of each.",
      },
    ],
    behavioralQuestions: [
      {
        question:
          "Describe a situation where you had to debug a complex issue in a team project. How did you approach it?",
        intention:
          "To evaluate problem-solving methodology and teamwork/communication.",
        answer:
          "Use the STAR method (Situation, Task, Action, Result). Focus on how you isolated the issue, used debugging tools (like Postman or Chrome DevTools), communicated with teammates to understand recent changes, and the final impact of your fix.",
      },
      {
        question:
          "You are working on a feature with a tight deadline, but you realize the current architecture won't scale. What do you do?",
        intention:
          "To check the candidate's ability to balance technical debt with business requirements.",
        answer:
          "Explain that you would first communicate the risk to the product manager or lead. Propose a two-step approach: a short-term 'hotfix' or optimization to meet the immediate deadline, followed by a planned technical debt ticket to refactor the architecture for long-term scalability.",
      },
    ],
    skillGaps: [
      {
        skill: "Unit Testing (Mocha/Jest/Pytest)",
        severity: "medium",
      },
      {
        skill: "Cloud Platforms (AWS/Azure/GCP)",
        severity: "low",
      },
      {
        skill: "System Design for Distributed Systems",
        severity: "medium",
      },
    ],
    preparationPlan: [
      {
        day: 1,
        focus: "Data Structures - Part 1",
        tasks: [
          "Review Arrays, Strings, and Linked Lists",
          "Solve 5 medium-level LeetCode problems on these topics",
        ],
      },
      {
        day: 2,
        focus: "Data Structures - Part 2",
        tasks: [
          "Review Trees, Graphs, and Heaps",
          "Focus on BFS/DFS implementations",
        ],
      },
      {
        day: 3,
        focus: "Algorithms - Sorting & Searching",
        tasks: [
          "Implement Quicksort, Mergesort, and Binary Search from scratch",
          "Understand time and space complexity of each",
        ],
      },
      {
        day: 4,
        focus: "Node.js Internals",
        tasks: [
          "Study the Event Loop, Streams, and Buffer",
          "Read about 'process.nextTick' vs 'setImmediate'",
        ],
      },
      {
        day: 5,
        focus: "Database Management Systems",
        tasks: [
          "Review SQL vs NoSQL trade-offs",
          "Practice writing complex SQL queries and understanding Indexing/ACID properties",
        ],
      },
      {
        day: 6,
        focus: "REST API & Backend Best Practices",
        tasks: [
          "Review HTTP status codes, methods, and Middleware in Express.js",
          "Practice implementing JWT authentication",
        ],
      },
      {
        day: 7,
        focus: "System Design Basics",
        tasks: [
          "Learn about Load Balancers, Caching (Redis), and Rate Limiting",
          "Read about horizontal vs vertical scaling",
        ],
      },
      {
        day: 8,
        focus: "Object Oriented Programming (OOP)",
        tasks: [
          "Review C++ or Python OOP concepts (Inheritance, Polymorphism, Encapsulation)",
          "Practice design patterns like Singleton and Factory",
        ],
      },
      {
        day: 9,
        focus: "Testing & Quality Assurance",
        tasks: [
          "Learn the basics of Unit Testing with Jest or Mocha",
          "Write tests for your 'TaskFlow' project backend",
        ],
      },
      {
        day: 10,
        focus: "Docker & DevOps Basics",
        tasks: [
          "Dockerize a simple Node.js/PostgreSQL application",
          "Learn about CI/CD pipelines and GitFlow workflow",
        ],
      },
      {
        day: 11,
        focus: "Project Deep Dive - InterviewAI",
        tasks: [
          "Be ready to explain the architecture of your AI project",
          "Practice explaining how the resume parsing logic works",
        ],
      },
      {
        day: 12,
        focus: "Project Deep Dive - TaskFlow",
        tasks: [
          "Review the database schema and API endpoints",
          "Identify areas where you would improve the code if given more time",
        ],
      },
      {
        day: 13,
        focus: "Behavioral Interview Prep",
        tasks: [
          "Prepare STAR stories for: Conflict, Failure, Leadership, and Learning",
          "Research TechSphere Technologies' company culture",
        ],
      },
      {
        day: 14,
        focus: "Mock Technical Interview",
        tasks: [
          "Perform a mock interview focusing on backend systems and DSA",
          "Record yourself to check for clarity in communication",
        ],
      },
      {
        day: 15,
        focus: "Final Review & Relaxation",
        tasks: [
          "Review summary notes of all core concepts",
          "Ensure all setup (camera, internet, environment) is ready for the interview",
        ],
      },
    ],
    user: "6a75b344575fa08ac83d460b",
    _id: "6aa013e7421176a986cbfbae",
    createdAt: "2026-09-08T13:55:51.273Z",
    updatedAt: "2026-09-08T13:55:51.273Z",
    __v: 0,
  },
};

const Interview = () => {
  const location = useLocation();
  const reportData =
    location.state?.interviewReport || DEFAULT_REPORT_DATA.interviewReport;

  // Active tab state: 'technical' | 'behavioral' | 'roadmap'
  const [activeTab, setActiveTab] = useState("technical");

  // Track expanded question cards (all collapsed initially by default)
  const [expandedQuestions, setExpandedQuestions] = useState({});

  // Track completed roadmap tasks
  const [completedTasks, setCompletedTasks] = useState({});

  // Copy feedback state
  const [copiedIndex, setCopiedIndex] = useState(null);

  const toggleQuestion = (index) => {
    setExpandedQuestions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleTask = (taskKey) => {
    setCompletedTasks((prev) => ({
      ...prev,
      [taskKey]: !prev[taskKey],
    }));
  };

  const handleCopy = (text, index, e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const title = reportData?.title || "Software Engineer – Backend";
  const technicalQuestions = reportData?.technicalQuestions || [];
  const behavioralQuestions = reportData?.behavioralQuestions || [];
  const skillGaps = reportData?.skillGaps || [];
  const preparationPlan = reportData?.preparationPlan || [];
  const matchScore = reportData?.matchScore ?? 88;

  // Calculate Roadmap completion percentage
  const totalTasks = preparationPlan.reduce(
    (acc, day) => acc + (day.tasks?.length || 0),
    0
  );
  const doneTasks = Object.values(completedTasks).filter(Boolean).length;
  const progressPercent =
    totalTasks > 0 ? Math.round((doneTasks / totalTasks) * 100) : 0;

  return (
    <div className="interview-report-layout">
      {/* Top Navbar matching Home theme */}
      <InterviewNavbar />

      {/* Main 3-Column Dashboard Container */}
      <main className="report-main-viewport">
        <div className="report-dashboard-card">
          {/* =================================================================
              COLUMN 1: Left Navigation Sidebar (SECTIONS)
             ================================================================= */}
          <aside className="report-sidebar-nav">
            <div className="sidebar-header">
              <span className="sidebar-category">SECTIONS</span>
            </div>

            <nav className="sidebar-menu">
              <button
                type="button"
                className={`menu-tab-btn ${
                  activeTab === "technical" ? "active" : ""
                }`}
                onClick={() => {
                  setActiveTab("technical");
                  setExpandedQuestions({});
                }}
              >
                <div className="tab-left-content">
                  <div className="tab-icon-badge purple">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                  </div>
                  <span className="tab-title">Technical Questions</span>
                </div>
                <span className="tab-count-pill">{technicalQuestions.length}</span>
              </button>

              <button
                type="button"
                className={`menu-tab-btn ${
                  activeTab === "behavioral" ? "active" : ""
                }`}
                onClick={() => {
                  setActiveTab("behavioral");
                  setExpandedQuestions({});
                }}
              >
                <div className="tab-left-content">
                  <div className="tab-icon-badge cyan">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                  <span className="tab-title">Behavioral Questions</span>
                </div>
                <span className="tab-count-pill">{behavioralQuestions.length}</span>
              </button>

              <button
                type="button"
                className={`menu-tab-btn ${
                  activeTab === "roadmap" ? "active" : ""
                }`}
                onClick={() => {
                  setActiveTab("roadmap");
                }}
              >
                <div className="tab-left-content">
                  <div className="tab-icon-badge amber">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </div>
                  <span className="tab-title">Road Map</span>
                </div>
                <span className="tab-count-pill">{preparationPlan.length} Days</span>
              </button>
            </nav>

            <div className="sidebar-bottom-actions">
              <Link to="/home" className="back-home-link">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
                <span>New Strategy</span>
              </Link>
            </div>
          </aside>

          {/* =================================================================
              COLUMN 2: Center Main Content View
             ================================================================= */}
          <section className="report-main-content">
            {/* Header for Current Section */}
            <header className="content-view-header">
              <div className="header-text-group">
                <div className="role-target-tag">
                  <span className="tag-sparkle">✦</span>
                  <span className="tag-title">{title}</span>
                </div>
                <div className="header-title-row">
                  <h1 className="content-title">
                    {activeTab === "technical" && "Technical Questions"}
                    {activeTab === "behavioral" && "Behavioral Questions"}
                    {activeTab === "roadmap" && `${preparationPlan.length}-Day Preparation Roadmap`}
                  </h1>
                  <span className="questions-count-pill">
                    {activeTab === "technical" &&
                      `${technicalQuestions.length} questions`}
                    {activeTab === "behavioral" &&
                      `${behavioralQuestions.length} questions`}
                    {activeTab === "roadmap" &&
                      `${preparationPlan.length} days`}
                  </span>
                </div>
              </div>

              {activeTab === "roadmap" && (
                <div className="roadmap-progress-badge">
                  <div className="progress-info">
                    <span className="progress-label">Prep Progress</span>
                    <span className="progress-count">
                      {doneTasks}/{totalTasks} tasks
                    </span>
                  </div>
                  <div className="progress-bar-bg">
                    <div
                      className="progress-bar-fill"
                      style={{ width: `${progressPercent}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </header>

            {/* Content Body */}
            <div className="content-scrollable-area">
              {/* --- TECHNICAL QUESTIONS VIEW (Accordion Dropdown) --- */}
              {activeTab === "technical" && (
                <div className="questions-accordion-list">
                  {technicalQuestions.map((item, idx) => {
                    const isExpanded = Boolean(expandedQuestions[idx]);
                    return (
                      <article
                        key={idx}
                        className={`question-accordion-item ${
                          isExpanded ? "expanded" : ""
                        }`}
                      >
                        {/* Header Row: Q# Badge + Question Text + Dropdown Chevron */}
                        <div
                          className="question-header-row"
                          onClick={() => toggleQuestion(idx)}
                          role="button"
                          tabIndex={0}
                          aria-expanded={isExpanded}
                        >
                          <span className="question-q-badge purple">Q{idx + 1}</span>
                          <h2 className="question-summary-text">
                            {item.question}
                          </h2>
                          <div className="header-actions">
                            <button
                              type="button"
                              className="inline-copy-btn"
                              onClick={(e) => handleCopy(item.question, `q-${idx}`, e)}
                              title="Copy Question"
                            >
                              {copiedIndex === `q-${idx}` ? (
                                <span className="copied-text">Copied!</span>
                              ) : (
                                <svg
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                                </svg>
                              )}
                            </button>
                            <span className={`dropdown-chevron ${isExpanded ? "open" : ""}`}>
                              <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <polyline points="6 9 12 15 18 9" />
                              </svg>
                            </span>
                          </div>
                        </div>

                        {/* Dropdown Content Panel: Intention + Model Answer */}
                        {isExpanded && (
                          <div className="question-dropdown-body">
                            {item.intention && (
                              <div className="intention-section">
                                <div className="section-label-tag intention-tag">
                                  <div className="tag-icon-circle purple">
                                    <svg
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <circle cx="12" cy="12" r="10" />
                                      <circle cx="12" cy="12" r="6" />
                                      <circle cx="12" cy="12" r="2" />
                                    </svg>
                                  </div>
                                  <span>Assessment Intention</span>
                                </div>
                                <p className="section-detail-text">
                                  {item.intention}
                                </p>
                              </div>
                            )}

                            {item.answer && (
                              <div className="model-answer-section">
                                <div className="section-label-tag answer-tag">
                                  <div className="tag-icon-circle cyan">
                                    <svg
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                                      <path d="M9 18h6" />
                                      <path d="M10 22h4" />
                                    </svg>
                                  </div>
                                  <span>Model Answer &amp; Recommended Strategy</span>
                                </div>
                                <p className="section-detail-text">
                                  {item.answer}
                                </p>
                              </div>
                            )}
                          </div>
                        )}
                      </article>
                    );
                  })}
                </div>
              )}

              {/* --- BEHAVIORAL QUESTIONS VIEW (Accordion Dropdown) --- */}
              {activeTab === "behavioral" && (
                <div className="questions-accordion-list">
                  {behavioralQuestions.map((item, idx) => {
                    const isExpanded = Boolean(expandedQuestions[idx]);
                    return (
                      <article
                        key={idx}
                        className={`question-accordion-item ${
                          isExpanded ? "expanded" : ""
                        }`}
                      >
                        {/* Header Row */}
                        <div
                          className="question-header-row"
                          onClick={() => toggleQuestion(idx)}
                          role="button"
                          tabIndex={0}
                          aria-expanded={isExpanded}
                        >
                          <span className="question-q-badge cyan">Q{idx + 1}</span>
                          <h2 className="question-summary-text">
                            {item.question}
                          </h2>
                          <div className="header-actions">
                            <button
                              type="button"
                              className="inline-copy-btn"
                              onClick={(e) => handleCopy(item.question, `b-${idx}`, e)}
                              title="Copy Question"
                            >
                              {copiedIndex === `b-${idx}` ? (
                                <span className="copied-text">Copied!</span>
                              ) : (
                                <svg
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                                </svg>
                              )}
                            </button>
                            <span className={`dropdown-chevron ${isExpanded ? "open" : ""}`}>
                              <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <polyline points="6 9 12 15 18 9" />
                              </svg>
                            </span>
                          </div>
                        </div>

                        {/* Dropdown Content */}
                        {isExpanded && (
                          <div className="question-dropdown-body">
                            {item.intention && (
                              <div className="intention-section cyan-tint">
                                <div className="section-label-tag intention-tag cyan">
                                  <div className="tag-icon-circle cyan">
                                    <svg
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <circle cx="12" cy="12" r="10" />
                                      <circle cx="12" cy="12" r="6" />
                                      <circle cx="12" cy="12" r="2" />
                                    </svg>
                                  </div>
                                  <span>Assessment Intention</span>
                                </div>
                                <p className="section-detail-text">
                                  {item.intention}
                                </p>
                              </div>
                            )}

                            {item.answer && (
                              <div className="model-answer-section">
                                <div className="section-label-tag answer-tag cyan">
                                  <div className="tag-icon-circle purple">
                                    <svg
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                                      <path d="M9 18h6" />
                                      <path d="M10 22h4" />
                                    </svg>
                                  </div>
                                  <span>STAR Model Response Strategy</span>
                                </div>
                                <p className="section-detail-text">
                                  {item.answer}
                                </p>
                              </div>
                            )}
                          </div>
                        )}
                      </article>
                    );
                  })}
                </div>
              )}

              {/* --- ROADMAP VIEW --- */}
              {activeTab === "roadmap" && (
                <div className="roadmap-timeline">
                  {preparationPlan.map((dayPlan) => (
                    <div key={dayPlan.day} className="timeline-day-card">
                      <div className="day-header-badge">
                        <span className="day-pill">Day {dayPlan.day}</span>
                        <h2 className="day-focus-title">{dayPlan.focus}</h2>
                      </div>

                      <ul className="tasks-checklist">
                        {dayPlan.tasks?.map((task, taskIdx) => {
                          const taskKey = `d${dayPlan.day}-t${taskIdx}`;
                          const isDone = Boolean(completedTasks[taskKey]);
                          return (
                            <li
                              key={taskIdx}
                              className={`task-item ${isDone ? "completed" : ""}`}
                              onClick={() => toggleTask(taskKey)}
                            >
                              <div className="custom-checkbox">
                                {isDone && (
                                  <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <polyline points="20 6 9 17 4 12" />
                                  </svg>
                                )}
                              </div>
                              <span className="task-text">{task}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* =================================================================
              COLUMN 3: Right Sidebar (MATCH SCORE & SKILL GAPS)
             ================================================================= */}
          <aside className="report-sidebar-overview">
            {/* Match Score Card matching Home theme */}
            <div className="match-score-card">
              <div className="score-top-header">
                <span className="score-header-label">MATCH SCORE</span>
                <span className="score-alignment-pill">Role Fit</span>
              </div>
              <div className="score-circle-container">
                <svg className="score-ring-svg" viewBox="0 0 100 100">
                  <defs>
                    <linearGradient id="scoreRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#818cf8" />
                      <stop offset="50%" stopColor="#c084fc" />
                      <stop offset="100%" stopColor="#38bdf8" />
                    </linearGradient>
                  </defs>
                  <circle
                    className="score-ring-bg"
                    cx="50"
                    cy="50"
                    r="42"
                    strokeWidth="6"
                  />
                  <circle
                    className="score-ring-progress"
                    cx="50"
                    cy="50"
                    r="42"
                    strokeWidth="6"
                    strokeDasharray={264}
                    strokeDashoffset={264 - (264 * matchScore) / 100}
                  />
                </svg>
                <div className="score-center-text">
                  <span className="score-num">{matchScore}</span>
                  <span className="score-percent">%</span>
                </div>
              </div>
              <p className="score-match-caption">Strong match for this role</p>
            </div>

            {/* Skill Gaps Card matching Home theme */}
            <div className="skill-gaps-card">
              <div className="skills-header-row">
                <span className="skills-header-label">SKILL GAPS</span>
                <span className="skills-count-pill">{skillGaps.length} areas</span>
              </div>
              <div className="skills-stacked-list">
                {skillGaps.map((item, idx) => (
                  <div
                    key={idx}
                    className={`skill-gap-box ${item.severity || "medium"}`}
                  >
                    <span className="severity-indicator-dot"></span>
                    <span className="gap-skill-name">{item.skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pro Tip Card */}
            <div className="report-tip-card">
              <div className="tip-header-row">
                <span className="tip-sparkle">✦</span>
                <span className="tip-title">Interview Strategy Tip</span>
              </div>
              <p className="tip-text">
                Structure your answers with the <strong>STAR</strong> method. Quantify the measurable impact of your backend architectures and query optimizations.
              </p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Interview;