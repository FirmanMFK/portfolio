import { Link } from "react-router-dom";
import bukkuDetail from "@/assets/bukku-detail.jpg";
import bukkuTracking from "@/assets/bukku-tracking.jpg";
import bukkuTransacion from "@/assets/bukku-transaction.jpg";

const BukkuEcommerceDetail = () => {
  return (
    <div className="min-h-screen" style={{ background: "hsl(var(--background))" }}>
      {/* Header with gradient */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          height: "280px",
          background: "linear-gradient(135deg, #8A2BE2 0%, #D8BFD8 50%, #FFFFFF 100%)",
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
            Bukku E-Commerce App
          </h1>

          <div className="flex flex-wrap gap-2 mb-8">
            {["Kotlin", "MVP", "Retrofit", "GSON", "Firebase Crashlytics"].map((tag) => (
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
              The Bukku E-Commerce App is a full-featured mobile application designed for finding, exploring, and purchasing books. Users can search for books, publishers, or writers, manage their shopping cart, and proceed with secure payment integrations.
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
              <li>Comprehensive book search and filtering</li>
              <li>Detailed book information and reviews</li>
              <li>Shopping cart management</li>
              <li>Secure payment gateway integration</li>
              <li>User profiles and order history</li>
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
              <li>Built with Kotlin using the MVP (Model-View-Presenter) architecture</li>
              <li>Retrofit for efficient API communication with backend services</li>
              <li>GSON for JSON serialization and deserialization</li>
              <li>Firebase Crashlytics for real-time crash reporting and monitoring</li>
              <li>Responsive UI designed with Material Design principles</li>
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
              <p className="m3-title-medium font-bold mb-6" style={{ color: "hsl(var(--foreground))" }}>
                Detail Book Screen
              </p>
              <img src={bukkuDetail} alt="Bukku E-Commerce Home Screen" className="w-full rounded-2xl m3-elevation-1" loading="lazy" />
            </div>
            <div className="text-center">
              <p className="m3-title-medium font-bold mb-6" style={{ color: "hsl(var(--foreground))" }}>
                Transaction Screen
              </p>
              <img src={bukkuTransacion} alt="Bukku E-Commerce Search Screen" className="w-full rounded-2xl m3-elevation-1" loading="lazy" />
            </div>
            <div className="text-center">
              <p className="m3-title-medium font-bold mb-6" style={{ color: "hsl(var(--foreground))" }}>
                Tracking Screen
              </p>
              <img src={bukkuTracking} alt="Bukku E-Commerce Shopping Cart Screen" className="w-full rounded-2xl m3-elevation-1" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BukkuEcommerceDetail;
