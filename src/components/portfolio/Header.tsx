import { Button } from "@/components/ui/button";
import { Linkedin, Github } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left side - Name and Social Links */}
          <div className="lg:col-span-8 space-y-4">
            {/* Name Field */}
            <div className="bg-card border border-border rounded-lg p-8 shadow-portfolio hover:shadow-portfolio-hover transition-all duration-300">
              <div className="flex items-center gap-6">
                {/* Circular Profile Picture */}
                <div className="w-24 h-24 rounded-full bg-muted border-2 border-border flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <img
                    src="/assets/profile/profile.png"
                    alt="Profile"
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* Name and Title */}
                <div className="flex-1">
                  <h1 className="text-xl md:text-2xl font-bold text-foreground leading-tight">
                    I'm Giriraj Baheti,
                  </h1>
                  <p className="text-xl md:text-2xl text-muted-foreground mt-2">
                    Full-Stack Developer & AI Enthusiast
                  </p>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="grid grid-cols-2 gap-4">
              <Button 
                variant="social-linkedin" 
                size="lg" 
                className="h-16 text-lg font-medium"
                onClick={() => window.open('https://www.linkedin.com/in/giriraj-baheti-899ab5211/', '_blank')}
              >
                <Linkedin className="w-6 h-6" />
                LinkedIn
              </Button>
              <Button 
                variant="social-github" 
                size="lg" 
                className="h-16 text-lg font-medium"
                onClick={() => window.open('https://github.com/BahetiGiriraj', '_blank')}
              >
                <Github className="w-6 h-6" />
                GitHub
              </Button>
            </div>
          </div>

          {/* Right side - About Me */}
          <div className="lg:col-span-4">
            <div className="bg-card border border-border rounded-lg p-6 h-full shadow-portfolio hover:shadow-portfolio-hover transition-all duration-300">
              <h2 className="text-2xl font-bold text-foreground mb-4">About Me</h2>
              <p className="text-muted-foreground leading-relaxed">
                Passionate developer specializing in web, AI agents, automation, Unity and custom GPT. Exploring cloud tech and open to opportunities. Let’s connect!
              </p>
              <div className="mt-4 space-y-2">
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Location:</span> Pune
                </div>
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Experience:</span> 2+ Years
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
