const Footer = () => {
  return (
    <footer
      className="py-8 border-t"
      style={{
        background: "hsl(var(--md-surface-container))",
        borderColor: "hsl(var(--md-outline-variant))",
      }}
    >
      <div className="m3-content">
        <div className="text-center">
          <p
            className="m3-body-medium mb-1"
            style={{ color: "hsl(var(--md-on-surface-variant))" }}
          >
            © {new Date().getFullYear()} Muhammad Firman Kahfi. Built with React & Tailwind CSS
          </p>
          <p
            className="m3-label-medium"
            style={{ color: "hsl(var(--md-outline))" }}
          >
            Crafted with passion for mobile development
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
