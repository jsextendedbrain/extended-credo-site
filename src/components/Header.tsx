import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Assignments", path: "/#assignments" },
  { label: "Experience", path: "/#experience" },
  { label: "Courses", path: "/#courses" },
  { label: "Contact", path: "/#contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (path: string) => {
    setMobileOpen(false);
    if (path.startsWith("/#")) {
      const id = path.replace("/#", "");
      if (location.pathname !== "/") {
        window.location.href = path;
        return;
      }
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Extended Brain" className="h-12 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive =
              item.path === location.pathname ||
              (item.path === "/" && location.pathname === "/");

            const className = `text-sm font-medium px-4 py-2 rounded-full transition-all ${
              isActive && item.path === location.pathname && !item.path.startsWith("/#")
                ? "text-foreground bg-muted"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`;

            return item.path.startsWith("/#") ? (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.path)}
                className={className}
              >
                {item.label}
              </button>
            ) : (
              <Link key={item.label} to={item.path} className={className}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground p-2 rounded-lg hover:bg-muted transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border px-6 py-4 flex flex-col gap-1 animate-fade-in">
          {navItems.map((item) =>
            item.path.startsWith("/#") ? (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.path)}
                className="text-left text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted px-4 py-2.5 rounded-lg transition-colors"
              >
                {item.label}
              </button>
            ) : (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted px-4 py-2.5 rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
      )}
    </header>
  );
};

export default Header;
