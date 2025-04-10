
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { label: 'Services', path: '/services' },
    { label: 'Industries', path: '/industries' },
    { label: 'Performance', path: '/performance' },
    { label: 'Why FURI?', path: '/why-furi' },
    { label: 'About Us', path: '/about' },
    { label: 'Meet the Minds', path: '/team' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 sm:px-6 lg:px-8',
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="relative z-10">
          <h1 className="text-xl sm:text-2xl font-bold">
            <span className="text-gradient">FURI</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'nav-link',
                location.pathname === link.path && 'active'
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary">
            Let's Talk
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative z-50 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-furi-red" />
          ) : (
            <Menu className="h-6 w-6 text-furi-red" />
          )}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-white/95 z-40 flex flex-col items-center justify-center overflow-y-auto">
            <div className="w-full max-h-[80vh] overflow-y-auto py-20 px-6 flex flex-col items-center space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-lg font-medium text-furi-red hover:text-furi-red-light transition-colors w-full text-center py-3",
                    location.pathname === link.path ? "text-furi-red-dark" : ""
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="btn-primary mt-4 w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Let's Talk
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
