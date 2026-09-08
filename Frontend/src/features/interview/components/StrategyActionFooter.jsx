const StrategyActionFooter = ({ onGenerate, disabled = false, loading = false }) => {
  return (
    <div className="strategy-action-footer">
      <div className="footer-left-meta">
        <div className="ai-sparkle-icon">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
            <path d="M5 3v4" />
            <path d="M19 17v4" />
            <path d="M3 5h4" />
            <path d="M17 19h4" />
          </svg>
        </div>
        <span className="generation-label">AI-Powered Strategy Generation</span>
        <span className="meta-bullet">•</span>
        <span className="duration-label">Approx 30s</span>
      </div>

      <div className="footer-right-actions">
        <button
          type="button"
          className={`generate-strategy-btn ${loading ? "loading" : ""}`}
          onClick={onGenerate}
          disabled={disabled || loading}
        >
          <span className="btn-star-icon">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="none"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </span>
          <span className="btn-text">
            {loading ? "Analyzing & Generating..." : "Generate My Interview Strategy"}
          </span>
        </button>
      </div>
    </div>
  );
};

export default StrategyActionFooter;
