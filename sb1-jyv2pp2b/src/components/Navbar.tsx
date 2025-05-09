import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems } from '../data';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#2F3E46] sticky top-0 z-50 border-b border-[#52796F]/20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <a 
            href="/" 
            className="flex items-center gap-2 text-[#CAD2C5] font-semibold text-xl"
          >
            <span className="h-8 w-8 bg-[#84A98C] rounded-full flex items-center justify-center text-[#2F3E46]">
              NP
            </span>
            <span>Nature Playground</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className={`text-[#CAD2C5] hover:text-white transition-colors duration-200 ${
                  item.title === 'Donate' 
                    ? 'bg-[#84A98C] text-[#2F3E46] px-4 py-2 rounded-md hover:bg-[#52796F] hover:text-white font-medium' 
                    : ''
                }`}
              >
                {item.title}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#CAD2C5] hover:text-white"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#2F3E46] border-t border-[#52796F]/20 py-4 px-4 animate-fade-in">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className={`text-[#CAD2C5] hover:text-white transition-colors duration-200 ${
                  item.title === 'Donate' 
                    ? 'bg-[#84A98C] text-[#2F3E46] px-4 py-2 rounded-md hover:bg-[#52796F] hover:text-white font-medium text-center' 
                    : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}