import { Button } from "@/components/ui/button";
import { Apple } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-primary">PromptKit</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#waitlist" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Waitlist
          </a>
          <a href="#updates" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Updates
          </a>
          <a href="#blog" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Blog
          </a>
          <a href="#faqs" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            FAQs
          </a>
        </nav>

        {/* Download Button */}
        <Button className="bg-foreground hover:bg-foreground/90 text-background rounded-full px-5">
          <Apple className="w-4 h-4 mr-2" />
          Download
        </Button>
      </div>
    </header>
  );
};

export default Header;
