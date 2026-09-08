import { useAuth } from "../../auth/hooks/useAuth";

const InterviewNavbar = () => {
  const { user } = useAuth();

  // Get user initials or fallback to 'JD'
  const getInitials = () => {
    if (user?.username) {
      return user.username.slice(0, 2).toUpperCase();
    }
    if (user?.email) {
      return user.email.slice(0, 2).toUpperCase();
    }
    return "JD";
  };

  return (
    <header className="interview-navbar">
      <div className="navbar-brand">
        <div className="brand-logo">
          <svg
            className="brand-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="9" stroke="url(#brandGrad)" strokeWidth="2" />
            <path d="M12 3v3m0 12v3M3 12h3m12 0h3" stroke="url(#brandGrad)" />
            <path d="m5.6 5.6 2.1 2.1m8.6 8.6 2.1 2.1M5.6 18.4l2.1-2.1m8.6-8.6 2.1-2.1" stroke="url(#brandGrad)" />
            <circle cx="12" cy="12" r="2.5" fill="#a78bfa" />
            <defs>
              <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#818cf8" />
                <stop offset="50%" stopColor="#c084fc" />
                <stop offset="100%" stopColor="#38bdf8" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <span className="brand-name">InterviewCraft</span>
        <span className="brand-badge">AI PRO</span>
      </div>

      <div className="navbar-actions">
        <div className="engine-status-pill">
          <span className="status-dot"></span>
          <span className="engine-text">Engine: GPT-4.5 Ultra-Analyze</span>
        </div>

        <div className="user-profile-avatar" title={user?.username || user?.email || "User Profile"}>
          <span>{getInitials()}</span>
        </div>
      </div>
    </header>
  );
};

export default InterviewNavbar;
