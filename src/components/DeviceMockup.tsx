import React from "react";

interface DeviceMockupProps {
  src: string;
  alt: string;
  className?: string;
}

const DeviceMockup: React.FC<DeviceMockupProps> = ({ src, alt, className = "" }) => {
  return (
    <div className={`device-mockup-wrapper ${className}`}>
      {/* Outer device shell */}
      <div className="device-shell">
        {/* Power button */}
        <div className="device-button-power" />
        {/* Volume buttons */}
        <div className="device-button-vol-up" />
        <div className="device-button-vol-down" />

        {/* Inner bezel */}
        <div className="device-bezel">
          {/* Status bar */}
          <div className="device-status-bar">
            <span className="device-time">9:41</span>
            <div className="device-notch">
              <div className="device-camera" />
            </div>
            <div className="device-status-icons">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" opacity="0.7">
                <path d="M12 21l-1.5-1.3C5.4 15 2 12 2 8.5 2 5.4 4.4 3 7.5 3c1.7 0 3.3.8 4.5 2.1C13.2 3.8 14.8 3 16.5 3 19.6 3 22 5.4 22 8.5c0 3.5-3.4 6.5-8.5 11.2L12 21z" />
              </svg>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" opacity="0.7">
                <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
              </svg>
              <svg width="16" height="10" viewBox="0 0 24 14" fill="currentColor" opacity="0.7">
                <rect x="0" y="2" width="20" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <rect x="2" y="4" width="14" height="6" rx="1" fill="currentColor" />
                <rect x="21" y="5" width="3" height="4" rx="1" fill="currentColor" opacity="0.4" />
              </svg>
            </div>
          </div>

          {/* Screen content */}
          <div className="device-screen">
            <img src={src} alt={alt} loading="lazy" />
          </div>

          {/* Navigation gesture bar */}
          <div className="device-nav-bar">
            <div className="device-gesture-bar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceMockup;
