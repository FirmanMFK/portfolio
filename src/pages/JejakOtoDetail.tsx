import { Link } from "react-router-dom";
import homeImg from "@/assets/jejakoto-home.jpg";
import otocheckImg from "@/assets/jejakoto-otocheck.jpg";
import spbuImg from "@/assets/jejakoto-spbu.jpg";

import DeviceMockup from "@/components/DeviceMockup";

const JejakOtoDetail = () => {
  return (
    <div className="min-h-screen" style={{ background: "hsl(var(--background))" }}>
      {/* Header with gradient */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          height: "280px",
          background: "linear-gradient(135deg, #1E3A8A 0%, #3B82F6 50%, #000000 100%)",
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        <div className="relative m3-content py-5 z-10">
          <Link to="/#projects">
            <button className="m3-tonal-button text-white" style={{ background: "rgba(255,255,255,0.15)", color: "#fff" }}>
              <span className="material-symbols-outlined text-lg">arrow_back</span>
              Back to Portfolio
            </button>
          </Link>
        </div>
      </div>

      {/* Content Card */}
      <div className="m3-content -mt-[180px] relative z-20 pb-12">
        <div className="max-w-4xl mx-auto detail-content-card p-8 md:p-10">
          <h1
            className="m3-display-medium font-bold mb-4"
            style={{ color: "hsl(var(--foreground))" }}
          >
            JejakOto - Vehicle Management & Vehicle Health Check
          </h1>

          <div className="flex flex-wrap gap-2 mb-8">
            {["React 19", "JavaScript", "Tailwind CSS v4", "Zustand", "Firebase", "Leaflet", "Vite", "PWA", "MVVM", "FSD"].map((tag) => (
              <span key={tag} className="m3-chip-tonal">{tag}</span>
            ))}
          </div>

          <div className="mb-12">
            <h2
              className="m3-headline-medium font-bold mb-4"
              style={{ color: "hsl(var(--foreground))" }}
            >
              Project Overview
            </h2>
            <p
              className="m3-body-large mb-6"
              style={{ color: "hsl(var(--md-on-surface-variant))" }}
            >
              JejakOto is a comprehensive, mobile-first Progressive Web Application (PWA) designed to help users track and manage their vehicles. It features maintenance logging, fuel expense tracking, interactive maps, and an integrated AI Mechanic for vehicle diagnostics.
            </p>

            <h3
              className="m3-title-large font-bold mb-3"
              style={{ color: "hsl(var(--foreground))" }}
            >
              Core Responsibilities & Achievements
            </h3>
            
            <h4 className="m3-title-medium font-bold mt-4 mb-2" style={{ color: "hsl(var(--foreground))" }}>1. Frontend Architecture & System Design</h4>
            <ul
              className="list-disc list-inside space-y-2 mb-6 m3-body-large"
              style={{ color: "hsl(var(--md-on-surface-variant))" }}
            >
              <li><strong>Architected a Scalable Codebase:</strong> Designed and implemented the frontend architecture using a lightweight Feature-Sliced Design (FSD) approach, organizing the codebase around business domains (e.g., Auth, Vehicles, Fuel, Mechanic, Maps) rather than technical file types to ensure high discoverability and scalability.</li>
              <li><strong>Implemented MVVM Pattern:</strong> Enforced a strict separation of concerns by applying the Model-View-ViewModel (MVVM) pattern. Utilized React Custom Hooks as ViewModels to handle API calls, data fetching, and complex business logic, ensuring UI components remain clean and focused purely on rendering.</li>
            </ul>

            <h4 className="m3-title-medium font-bold mt-4 mb-2" style={{ color: "hsl(var(--foreground))" }}>2. Feature Development & Integration</h4>
            <ul
              className="list-disc list-inside space-y-2 mb-6 m3-body-large"
              style={{ color: "hsl(var(--md-on-surface-variant))" }}
            >
              <li><strong>Vehicle & Garage Management:</strong> Developed full CRUD interfaces for users to manage their garage, add new vehicles, and view detailed vehicle specifications.</li>
              <li><strong>Tracking & Expense Modules:</strong> Built features for logging services and refueling, and created comprehensive dashboards for activity history and expense reporting.</li>
              <li><strong>AI Mechanic Integration:</strong> Developed the UI and conversational logic for an innovative "AI Mechanic" feature to assist users with vehicle diagnostics and troubleshooting.</li>
              <li><strong>Mapping & Location Services:</strong> Integrated Leaflet and React-Leaflet to build interactive maps for location-based features (e.g., finding nearby gas stations or workshops).</li>
              <li><strong>Authentication & Onboarding:</strong> Implemented secure user authentication flows and a smooth user onboarding experience, integrated with Firebase.</li>
            </ul>

            <h4 className="m3-title-medium font-bold mt-4 mb-2" style={{ color: "hsl(var(--foreground))" }}>3. State Management & Performance Optimization</h4>
            <ul
              className="list-disc list-inside space-y-2 mb-6 m3-body-large"
              style={{ color: "hsl(var(--md-on-surface-variant))" }}
            >
              <li><strong>Global State Management:</strong> Engineered efficient global state handling using Zustand to manage shared data (like user profiles and vehicle lists) across multiple pages without unnecessary API re-fetching.</li>
              <li><strong>Modern Build Tooling:</strong> Utilized Vite as the frontend build tool to ensure rapid hot-module replacement (HMR) during development and highly optimized production builds.</li>
            </ul>

            <h4 className="m3-title-medium font-bold mt-4 mb-2" style={{ color: "hsl(var(--foreground))" }}>4. UI/UX & Responsive Design</h4>
            <ul
              className="list-disc list-inside space-y-2 mb-6 m3-body-large"
              style={{ color: "hsl(var(--md-on-surface-variant))" }}
            >
              <li><strong>Mobile-First UI:</strong> Crafted a highly responsive, app-like user experience optimized for mobile devices using Tailwind CSS.</li>
              <li><strong>Component Reusability:</strong> Built a library of reusable, generic UI components (e.g., Snackbars, Buttons, Layout Wrappers) to maintain visual consistency and accelerate feature development.</li>
            </ul>
          </div>

          <h2
            className="m3-headline-medium font-bold mb-6"
            style={{ color: "hsl(var(--foreground))" }}
          >
            Application Preview
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10 mb-8">
            <div className="flex flex-col text-center w-full max-w-[320px] mx-auto">
              <p className="m3-title-medium font-bold mb-6" style={{ color: "hsl(var(--foreground))" }}>
                Dashboard & Garage
              </p>
              <div className="scale-[0.8] origin-top">
                <DeviceMockup src={homeImg} alt="JejakOto Home Screen" className="mx-auto" />
              </div>
            </div>
            <div className="flex flex-col text-center w-full max-w-[320px] mx-auto">
              <p className="m3-title-medium font-bold mb-6" style={{ color: "hsl(var(--foreground))" }}>
                AI Mechanic Diagnostics
              </p>
              <div className="scale-[0.8] origin-top">
                <DeviceMockup src={otocheckImg} alt="JejakOto AI Mechanic Screen" className="mx-auto" />
              </div>
            </div>
            <div className="flex flex-col text-center w-full max-w-[320px] mx-auto">
              <p className="m3-title-medium font-bold mb-6" style={{ color: "hsl(var(--foreground))" }}>
                Interactive SPBU Map
              </p>
              <div className="scale-[0.8] origin-top">
                <DeviceMockup src={spbuImg} alt="JejakOto SPBU Map Screen" className="mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JejakOtoDetail;
