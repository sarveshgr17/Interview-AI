import { useRef, useState } from "react";

const ProfileSection = ({
  resumeFile,
  onResumeChange,
  onResumeRemove,
  selfDescription,
  onSelfDescriptionChange,
}) => {
  const fileInputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      if (onResumeChange) {
        onResumeChange(file);
      }
    }
  };

  const handleFileInputChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (onResumeChange) {
        onResumeChange(file);
      }
    }
  };

  const formatFileSize = (bytes) => {
    if (!bytes) return "0 B";
    const k = 1024;
    const sizes = ["B", "KB", "MB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
  };

  return (
    <div className="interview-section profile-section">
      <div className="section-header">
        <div className="header-title-group">
          <div className="section-icon-badge cyan-badge">
            <svg
              className="section-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <h2 className="section-title">Your Profile</h2>
        </div>
      </div>

      {/* Resume Upload Sub-section */}
      <div className="profile-sub-section">
        <div className="sub-header-row">
          <label className="sub-label">UPLOAD RESUME</label>
          <span className="best-results-badge">★ BEST RESULTS</span>
        </div>

        <input
          ref={fileInputRef}
          type="file"
          id="resume"
          name="resume"
          accept=".pdf,.docx,.doc"
          style={{ display: "none" }}
          onChange={handleFileInputChange}
        />

        {resumeFile ? (
          <div className="selected-file-card">
            <div className="file-info-group">
              <div className="file-icon-badge">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              </div>
              <div className="file-details">
                <span className="file-name" title={resumeFile.name}>
                  {resumeFile.name}
                </span>
                <span className="file-size">{formatFileSize(resumeFile.size)}</span>
              </div>
            </div>
            <button
              type="button"
              className="file-remove-btn"
              onClick={onResumeRemove}
              title="Remove file"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        ) : (
          <div
            className={`dropzone-container ${isDragging ? "dragging" : ""}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <div className="dropzone-icon-circle">
              <svg
                className="upload-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                <path d="M12 12v9" />
                <path d="m16 16-4-4-4 4" />
              </svg>
            </div>
            <p className="dropzone-primary-text">
              <span className="upload-link">Click to upload</span> or drag &amp; drop
            </p>
            <p className="dropzone-secondary-text">PDF or DOCX (Max 5MB)</p>
          </div>
        )}
      </div>

      {/* OR Divider */}
      <div className="or-divider-row">
        <div className="divider-line"></div>
        <span className="or-badge">OR</span>
        <div className="divider-line"></div>
      </div>

      {/* Quick Self-Description Sub-section */}
      <div className="profile-sub-section">
        <label htmlFor="selfDescription" className="sub-label">
          QUICK SELF-DESCRIPTION
        </label>
        <textarea
          id="selfDescription"
          name="selfDescription"
          className="self-description-textarea"
          value={selfDescription}
          onChange={onSelfDescriptionChange}
          placeholder="Briefly describe your experience, key skills, and years of experience if you don't have a resume handy..."
          rows={3}
          spellCheck="false"
        ></textarea>
      </div>

      {/* Requirement Info Box */}
      <div className="info-callout-card">
        <div className="info-icon">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        </div>
        <p className="info-text">
          Either a <strong>Resume</strong> or a <strong>Self Description</strong> is
          required to generate a personalized plan.
        </p>
      </div>
    </div>
  );
};

export default ProfileSection;
