import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.07]"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, hsl(var(--primary) / 0.12) 0%, hsl(var(--background)) 50%, hsl(var(--md-tertiary) / 0.08) 100%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 m3-content py-20 text-center">
        <div className="animate-fade-in">
          {/* Chip-style label */}
          <div className="inline-flex items-center gap-2 mb-8">
            <span
              className="m3-chip-tonal"
            >
              <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
                android
              </span>
              Android Developer
            </span>
          </div>

          <h1
            className="m3-display-large mb-6 font-bold"
            style={{ color: "hsl(var(--foreground))" }}
          >
            Hello, I'm{" "}
            <span style={{ color: "hsl(var(--primary))" }}>Firman</span>
          </h1>

          <p
            className="m3-headline-medium mb-4 max-w-2xl mx-auto"
            style={{ color: "hsl(var(--md-on-surface-variant))" }}
          >
            Android Developer with more than 5 years of experience
          </p>

          <p
            className="m3-body-large mb-10 max-w-2xl mx-auto"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            Crafting innovative mobile experiences with Kotlin, Java, Jetpack
            Compose, XML and modern Android technologies
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => scrollToSection("projects")}
              className="m3-filled-button h-12 px-8 text-base"
            >
              <span className="material-symbols-outlined text-lg">
                devices
              </span>
              View Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="m3-outlined-button h-12 px-8 text-base"
            >
              <span className="material-symbols-outlined text-lg">
                chat
              </span>
              Get In Touch
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce m3-icon-button"
          style={{ color: "hsl(var(--md-on-surface-variant))" }}
          aria-label="Scroll down"
        >
          <span className="material-symbols-outlined text-3xl">
            expand_more
          </span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
