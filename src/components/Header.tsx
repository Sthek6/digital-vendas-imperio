import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Users, Briefcase, Package, Handshake, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuItems = [
    { name: 'Início', icon: Home, href: '#home' },
    { name: 'Quem Somos', icon: Users, href: '#about' },
    { name: 'Serviços', icon: Briefcase, href: '#services' },
    { name: 'Produtos', icon: Package, href: '#products' },
    { name: 'Parceiros', icon: Handshake, href: '#partners' },
    { name: 'Trabalhe Conosco', icon: Users, href: '#careers' },
    { name: 'Contato', icon: Mail, href: '#contact' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-imperio-black shadow-md py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#home" className="flex items-center">
            <img 
              src="/logo/logo sem fundo.png" 
              alt="Império Digital" 
              className="h-12 md:h-16"
            />
          </a>
        </div>
        
        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-6">
          {menuItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="flex items-center text-gray-300 hover:text-imperio-blue transition-colors"
            >
              <item.icon className="w-4 h-4 mr-1" />
              <span>{item.name}</span>
            </a>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <Button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          variant="ghost" 
          size="icon" 
          className="lg:hidden text-white"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden bg-imperio-black shadow-lg w-full">
          <nav className="container mx-auto py-4 px-6 flex flex-col space-y-3">
            {menuItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="flex items-center py-2 text-gray-300 hover:text-imperio-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <item.icon className="w-4 h-4 mr-2" />
                <span>{item.name}</span>
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
