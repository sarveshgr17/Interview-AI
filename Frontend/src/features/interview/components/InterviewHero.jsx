const InterviewHero = ({ onScrollToForm }) => {
  return (
    <section className="interview-hero">
      <div className="hero-badge-pill">
        <span className="sparkle-symbol">✨</span>
        <span>Next-Gen AI Interview Preparation</span>
      </div>

      <h1 className="hero-title">
        <span>Create Your Custom</span>
        <span className="hero-highlight">
          <span className="gradient-interview">Interview</span>{" "}
          <span className="gradient-plan">Plan</span>
        </span>
      </h1>

      <p className="hero-subtitle">
        Let our AI analyze the job requirements and your unique profile to build a
        winning strategy tailored for behavioral, technical, and system design rounds.
      </p>

      <div className="hero-cta-group">
        <button
          type="button"
          className="hero-start-btn"
          onClick={onScrollToForm}
        >
          <span>Start Building Plan</span>
          <svg
            className="arrow-down-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </button>
      </div>

      <div
        className="scroll-indicator"
        onClick={onScrollToForm}
        title="Scroll down to configure"
      >
        <div className="mouse-icon">
          <div className="wheel"></div>
        </div>
        <span className="scroll-text">Scroll to configure</span>
      </div>
    </section>
  );
};

export default InterviewHero;
