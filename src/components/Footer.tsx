import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-furi-charcoal-dark pt-20 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h3 className="text-2xl font-bold mb-4">
            <span className="text-gradient">FURI</span>
          </h3>
          <p className="text-gray-400 mb-4">
            AI-powered digital marketing agency creating data-intelligent, emotionally resonant campaigns.
          </p>
          <div className="flex space-x-4 text-gray-400">
            <a href="#" className="hover:text-furi-red transition-colors" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-furi-red transition-colors" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-furi-red transition-colors" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-furi-red transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-4">Navigate</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link to="/industries" className="hover:text-white transition-colors">Industries</Link></li>
            <li><Link to="/performance" className="hover:text-white transition-colors">Performance</Link></li>
            <li><Link to="/why-furi" className="hover:text-white transition-colors">Why FURI?</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-4">About</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/team" className="hover:text-white transition-colors">Meet the Minds</Link></li>
            <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
            <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center space-x-2">
              <Mail size={16} />
              <a href="mailto:hello@furiagency.com" className="hover:text-white transition-colors">admin@furiglobal.in</a>
            </li>
            <li className="flex items-center space-x-2">
              <Phone size={16} />
              <a href="tel:+15551234567" className="hover:text-white transition-colors">+1 (555) 123-4567</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-500 text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} FURI. All rights reserved.
        </p>
        <div className="flex space-x-6 text-sm text-gray-500">
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          <Link to="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
        </div>
      </div>
    </footer>;
};
export default Footer;