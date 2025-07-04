import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-[51] w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="/"
              className="text-xl font-bold text-primary hover:text-primary/90 transition-colors"
              aria-label="Premium Web Design - Home"
            >
              Premium Web Design
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
            <Button
              variant="cta"
              size="sm"
              className="ml-4 hidden lg:block"
              onClick={() => {
                window.location.href = "#contact";
              }}
            >
              Contact Me
            </Button>

          {/* Mobile Navigation */}
          <div className="flex lg:hidden items-center gap-4">
            <Button
              className="p-2 text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md "
              onClick={toggleMobileMenu}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <nav className="lg:hidden pb-4">
            <ul className="space-y-2 pt-2 border-t border-border">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="block py-2 px-4 text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-colors duration-200"
                    onClick={toggleMobileMenu}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
