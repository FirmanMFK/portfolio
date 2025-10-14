const Footer = () => {
  return (
    <footer className="py-8 bg-secondary/50 border-t">
      <div className="container mx-auto px-4">
        <div className="text-center text-muted-foreground">
          <p className="mb-2">© {new Date().getFullYear()} Muhammad Firman Kahfi. Built with React & Tailwind CSS</p>
          <p className="text-sm">Crafted with passion for mobile development</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
