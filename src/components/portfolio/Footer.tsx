import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Instagram, X } from "lucide-react";

const Footer = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/9301728128", "_blank");
  };

  const handleEmail = () => {
    window.open("mailto:bahetigiriraj31@gmail.com", "_blank");
  };

  const handleInstagram = () => {
    window.open("https://www.instagram.com/giri_raj31/", "_blank");
  };

  const handleTwitter = () => {
    window.open("https://x.com/giriraj31baheti?s=21", "_blank");
  };

  return (
    <footer className="w-full px-6 md:px-8 py-12 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Side - Call to Action */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Let's work together
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                To get started, have a 1:1 chat with me!
              </p>
            </div>

            <Button
              size="lg"
              className="h-14 text-lg font-medium px-8 flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white transition-transform duration-200 hover:scale-105"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="w-6 h-6" />
              <span>WhatsApp Chat</span>
            </Button>
          </div>

          {/* Right Side - Contact Options */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-3 gap-4">
              {/* Email */}
              <Button
                size="lg"
                className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-transform duration-200 hover:scale-110"
                onClick={handleEmail}
                aria-label="Email"
              >
                <Mail className="w-7 h-7" />
              </Button>

              {/* X (Twitter) */}
              <Button
                size="lg"
                className="h-16 w-16 flex items-center justify-center rounded-full bg-black hover:bg-gray-900 text-white transition-transform duration-200 hover:scale-110"
                onClick={handleTwitter}
                aria-label="X (Twitter)"
              >
                <X className="w-7 h-7" />
              </Button>

              {/* Instagram */}
              <Button
                size="lg"
                className="h-16 w-16 flex items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 hover:brightness-110 text-white transition-transform duration-200 hover:scale-110"
                onClick={handleInstagram}
                aria-label="Instagram"
              >
                <Instagram className="w-7 h-7" />
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Giriraj Baheti. All rights reserved. Built with passion and modern web technologies.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
