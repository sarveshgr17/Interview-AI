import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import InterviewNavbar from "../components/InterviewNavbar";
import InterviewHero from "../components/InterviewHero";
import JobDescriptionSection from "../components/JobDescriptionSection";
import ProfileSection from "../components/ProfileSection";
import StrategyActionFooter from "../components/StrategyActionFooter";
import "../style/home.scss";

const Home = () => {
  const navigate = useNavigate();

  // Local UI layer state
  const [jobDescription, setJobDescription] = useState("");
  const [resumeFile, setResumeFile] = useState(null);
  const [selfDescription, setSelfDescription] = useState("");
  const [activeStage, setActiveStage] = useState(0);

  const containerRef = useRef(null);
  const heroStageRef = useRef(null);
  const formStageRef = useRef(null);

  const handleJobDescriptionChange = (e) => {
    setJobDescription(e.target.value);
  };

  const handleResumeChange = (file) => {
    setResumeFile(file);
  };

  const handleResumeRemove = () => {
    setResumeFile(null);
  };

  const handleSelfDescriptionChange = (e) => {
    setSelfDescription(e.target.value);
  };

  const handleGenerateStrategy = () => {
    console.log("Generate Interview Strategy clicked with:", {
      jobDescription,
      resumeFile,
      selfDescription,
    });
    navigate("/interview");
  };

  const scrollToStage = (stageIndex) => {
    if (stageIndex === 0 && heroStageRef.current) {
      heroStageRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (stageIndex === 1 && formStageRef.current) {
      formStageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Track active stage with IntersectionObserver for smooth state sync
  useEffect(() => {
    const options = {
      root: containerRef.current,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === heroStageRef.current) {
            setActiveStage(0);
          } else if (entry.target === formStageRef.current) {
            setActiveStage(1);
          }
        }
      });
    }, options);

    if (heroStageRef.current) observer.observe(heroStageRef.current);
    if (formStageRef.current) observer.observe(formStageRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="interview-page-layout">
      {/* Fixed Top Navbar */}
      <InterviewNavbar />

      {/* Floating 2-Stage Pagination Dots */}
      <nav className="stage-nav-indicators" aria-label="Page stages">
        <button
          type="button"
          className={`stage-dot-btn ${activeStage === 0 ? "active" : ""}`}
          onClick={() => scrollToStage(0)}
          title="Stage 1: Overview"
        >
          <span className="dot"></span>
          <span className="dot-label">Overview</span>
        </button>
        <button
          type="button"
          className={`stage-dot-btn ${activeStage === 1 ? "active" : ""}`}
          onClick={() => scrollToStage(1)}
          title="Stage 2: Configure Plan"
        >
          <span className="dot"></span>
          <span className="dot-label">Configure</span>
        </button>
      </nav>

      {/* 2-Stage Scroll Container */}
      <div className="interview-scroll-container" ref={containerRef}>
        {/* Stage 1: Hero Section */}
        <section
          className="scroll-stage hero-stage"
          ref={heroStageRef}
          id="stage-overview"
        >
          <div className="stage-content-wrapper">
            <InterviewHero onScrollToForm={() => scrollToStage(1)} />
          </div>
        </section>

        {/* Stage 2: Form Configuration Section */}
        <section
          className="scroll-stage form-stage"
          ref={formStageRef}
          id="stage-form"
        >
          <div className="stage-content-wrapper form-stage-wrapper">
            {/* Main Strategy Creator Card */}
            <div className="interview-creator-card">
              <div className="card-grid-body">
                {/* Left Column: Target Job Description */}
                <JobDescriptionSection
                  value={jobDescription}
                  onChange={handleJobDescriptionChange}
                />

                {/* Right Column: Your Profile */}
                <ProfileSection
                  resumeFile={resumeFile}
                  onResumeChange={handleResumeChange}
                  onResumeRemove={handleResumeRemove}
                  selfDescription={selfDescription}
                  onSelfDescriptionChange={handleSelfDescriptionChange}
                />
              </div>

              {/* Bottom Card Action Footer */}
              <StrategyActionFooter onGenerate={handleGenerateStrategy} />
            </div>

            {/* Page Footer Note */}
            <footer className="interview-page-footer">
              <p>
                Empowering candidates with tailored behavioral, technical, and system design
                roadmaps.
              </p>
            </footer>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
