import { Link } from "react-router-dom";
import alumniHome from "@/assets/alumni-home.jpeg";
import alumniMyFriend from "@/assets/alumni-my-friend.jpeg";
import alumniListFriend from "@/assets/alumni-list-friend.jpeg";

const DigitalAlumniDetail = () => {
  return (
    <div className="min-h-screen" style={{ background: "hsl(var(--background))" }}>
      {/* Header with gradient */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          height: "280px",
          background: "linear-gradient(135deg, rgb(9, 171, 225) 0%, rgb(123, 195, 250) 100%)",
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative m3-content py-5 z-10">
          <Link to="/#projects">
            <button className="m3-tonal-button" style={{ background: "rgba(255,255,255,0.15)", color: "#fff" }}>
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
            Digital Alumni Book
          </h1>

          <div className="flex flex-wrap gap-2 mb-8">
            {["Kotlin", "MVP", "Coroutines", "Material Design", "XML", "SQLite", "Shared Preferences"].map((tag) => (
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
              The Digital Alumni Book application helps users find alumni from their school or community and connect with each other. It provides features to view alumni profiles, send friend requests, and browse community news.
            </p>

            <h3
              className="m3-title-large font-bold mb-3"
              style={{ color: "hsl(var(--foreground))" }}
            >
              Key Features
            </h3>
            <ul
              className="list-disc list-inside space-y-2 mb-6 m3-body-large"
              style={{ color: "hsl(var(--md-on-surface-variant))" }}
            >
              <li>User authentication and profile management</li>
              <li>Search and filter alumni by various criteria</li>
              <li>Send and accept friend requests</li>
              <li>View alumni activity feeds and news</li>
              <li>Notifications for new friend requests and updates</li>
            </ul>

            <h3
              className="m3-title-large font-bold mb-3"
              style={{ color: "hsl(var(--foreground))" }}
            >
              Technical Highlights
            </h3>
            <ul
              className="list-disc list-inside space-y-2 mb-8 m3-body-large"
              style={{ color: "hsl(var(--md-on-surface-variant))" }}
            >
              <li>Developed with Kotlin using the MVP (Model-View-Presenter) architecture</li>
              <li>Efficient data handling with SQLite database</li>
              <li>Utilizes Coroutines for asynchronous operations</li>
              <li>XML for UI layout design following Material Design principles</li>
              <li>Persistent user data storage using Shared Preferences</li>
            </ul>
          </div>

          <h2
            className="m3-headline-medium font-bold mb-6"
            style={{ color: "hsl(var(--foreground))" }}
          >
            Screenshots
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10 mb-8">
            <div className="text-center">
              <p className="m3-title-medium font-bold mb-3" style={{ color: "hsl(var(--foreground))" }}>
                News Feed / Home Screen
              </p>
              <img src={alumniHome} alt="Digital Alumni Book News Feed / Home Screen" className="w-full rounded-2xl m3-elevation-1" loading="lazy" />
            </div>
            <div className="text-center">
              <p className="m3-title-medium font-bold mb-3" style={{ color: "hsl(var(--foreground))" }}>
                My Friends List Screen
              </p>
              <img src={alumniMyFriend} alt="Digital Alumni Book My Friends List Screen" className="w-full rounded-2xl m3-elevation-1" loading="lazy" />
            </div>
            <div className="text-center">
              <p className="m3-title-medium font-bold mb-3" style={{ color: "hsl(var(--foreground))" }}>
                Find Friends Screen
              </p>
              <img src={alumniListFriend} alt="Digital Alumni Book Find Friends Screen" className="w-full rounded-2xl m3-elevation-1" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalAlumniDetail;
