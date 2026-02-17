import content from "@/data/content.json";

const Footer = () => {
  const { copyright } = content.footer;

  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-arabic font-bold gradient-text-gold">
              هُدًى
            </span>
            <span className="text-sm text-muted-foreground">Noor Mushaf</span>
          </div>

          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#hero" className="hover:text-foreground transition-colors">
              Home
            </a>
            <a
              href="#features"
              className="hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Contact
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
          </div>

          <p className="text-xs text-muted-foreground">{copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
