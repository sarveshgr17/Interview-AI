const JobDescriptionSection = ({ value = "", onChange }) => {
  const maxChars = 5000;
  const charCount = value.length;

  return (
    <div className="interview-section job-description-section">
      <div className="section-header">
        <div className="header-title-group">
          <div className="section-icon-badge purple-badge">
            <svg
              className="section-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
          </div>
          <h2 className="section-title">Target Job Description</h2>
        </div>
        <span className="required-badge">REQUIRED</span>
      </div>

      <div className="input-area-wrapper">
        <textarea
          id="jobDescription"
          name="jobDescription"
          className="job-description-textarea"
          value={value}
          onChange={onChange}
          maxLength={maxChars}
          placeholder={`Paste the full job description here...\n\ne.g. 'Senior Frontend Engineer at Google requires proficiency in React, TypeScript, and large-scale system design...'`}
          rows={12}
          spellCheck="false"
        ></textarea>
      </div>

      <div className="section-meta-footer">
        <span className="meta-hint">Include qualifications &amp; tech stack</span>
        <span className="char-count">
          {charCount.toLocaleString()} / {maxChars.toLocaleString()} chars
        </span>
      </div>
    </div>
  );
};

export default JobDescriptionSection;
