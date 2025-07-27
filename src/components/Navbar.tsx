
import { Building, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export function Navbar() {
  const location = useLocation();
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "How It Works", path: "/#how-it-works", isAnchor: true },
    { name: "Predictions", path: "/#predictions", isAnchor: true },
    { name: "Market Reports", path: "/#market-reports", isAnchor: true },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 border-b transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gradient-to-b from-realestate-darkGradientStart via-realestate-darkGradientMid to-realestate-darkGradientEnd border-white/10"
          : "bg-white shadow-md border-gray-200 text-gray-900"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Building className="h-6 w-6 text-realestate-purple" />
          <span className="font-bold text-xl">PropertyPredict</span>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 hidden md:flex mx-20">
          <nav className="flex items-center justify-center space-x-8 w-full">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              const classes = `relative px-3 py-2 text-sm font-medium transition-all duration-200 hover:text-realestate-purple ${
                active
                  ? theme === "dark"
                    ? "text-white"
                    : "text-realestate-purple"
                  : theme === "dark"
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-realestate-purple"
              } ${
                active
                  ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-realestate-purple"
                  : ""
              }`;

              return link.isAnchor ? (
                <a key={link.name} href={link.path} className={classes}>
                  {link.name}
                </a>
              ) : (
                <Link key={link.name} to={link.path} className={classes}>
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right side actions */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className={`${
              theme === "dark" ? "text-white hover:bg-white/10" : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button variant="outline" className="hidden md:inline-flex">
            Sign In
          </Button>
          <Button className="bg-realestate-purple hover:bg-realestate-purple/90">
            Try Free
          </Button>
        </div>
      </div>
    </header>
  );
}
