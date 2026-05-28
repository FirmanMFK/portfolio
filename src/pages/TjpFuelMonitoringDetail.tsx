import { Link } from "react-router-dom";
import homeImg from "@/assets/tjp-fuelmonitoring-home.jpeg";
import truckImg from "@/assets/tjp-fuelmonitoring-selected-truck.jpeg";

import DeviceMockup from "@/components/DeviceMockup";

const TjpFuelMonitoringDetail = () => {
  return (
    <div className="min-h-screen" style={{ background: "hsl(var(--background))" }}>
      {/* Header with gradient */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          height: "280px",
          background: "linear-gradient(135deg, #196C31 0%, #003913 50%, #000000 100%)",
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
            Tunas Jaya Perkasa Fuel Monitoring
          </h1>

          <div className="flex flex-wrap gap-2 mb-8">
            {["Flutter", "Dart", "Provider", "SQLite", "DAO", "REST API", "Google MLKit", "Geolocation"].map((tag) => (
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
              Developed the TJP Fuel Monitoring application from the ground up using Flutter and Dart, delivering a highly responsive cross-platform experience for tracking and managing fuel assets.
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
              <li>Distinct transaction types support (Dispense and Receive).</li>
              <li>Real-time fuel capacity calculations based on daily transaction data stored locally.</li>
              <li>Custom OCR Camera with Google MLKit Text Recognition and QR Code scanning for rapid data entry.</li>
              <li>Strict permission handling for Geolocation tracking.</li>
              <li>Reliable background synchronization queue to handle file uploads and data sync progress indicators.</li>
              <li>Intuitive UI components with dynamic transaction history logs and responsive success screens.</li>
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
              <li>Cross-platform development using Flutter and Dart.</li>
              <li>Robust state management using the Provider package for clean separation of business logic and UI.</li>
              <li>Local database architecture using SQLite with the DAO (Data Access Object) pattern.</li>
              <li>Reliable offline synchronization for master data (employees, tanks, units) in areas with low connectivity.</li>
              <li>Complex REST API endpoints integration.</li>
            </ul>
          </div>

          <h2
            className="m3-headline-medium font-bold mb-6"
            style={{ color: "hsl(var(--foreground))" }}
          >
            Application Preview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8 justify-items-center">
            <div className="flex flex-col text-center w-full max-w-[320px]">
              <p className="m3-title-medium font-bold mb-6" style={{ color: "hsl(var(--foreground))" }}>
                Main Dashboard & Transaction Menu
              </p>
              <div className="scale-[0.85] origin-top">
                <DeviceMockup src={homeImg} alt="TJP Fuel Monitoring Home Screen" className="mx-auto" />
              </div>
            </div>
            <div className="flex flex-col text-center w-full max-w-[320px]">
              <p className="m3-title-medium font-bold mb-6" style={{ color: "hsl(var(--foreground))" }}>
                Truck Selection & Capacity
              </p>
              <div className="scale-[0.85] origin-top">
                <DeviceMockup src={truckImg} alt="TJP Fuel Monitoring Selected Truck Screen" className="mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TjpFuelMonitoringDetail;
