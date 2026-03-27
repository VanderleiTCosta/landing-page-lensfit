import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Produção", href: "#features" },
    { name: "As Lentes", href: "#about" },
    { name: "Depoimentos", href: "#testimonials" },
    { name: "Fale Conosco", href: "#contact" },
  ];

  return (
    <header className="fixed w-full z-50 mt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img
              className="h-[43px] w-[132px]"
              src="/img/Logo-lensfit.png"
              alt="Lensfit Logo"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-16 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-['Gordita'] text-[12px] font-medium tracking-[-1px] text-[#ffffff] transition-all duration-200 hover:opacity-80 hover:scale-105 inline-block"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Instagram */}
            <a 
              href="https://www.instagram.com/lensfit/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Siga-nos no Instagram"
              className="transition-all duration-300 hover:scale-110 hover:opacity-80 active:scale-90"
            >
              <img 
                src="/img/instagram.svg" 
                alt="Instagram LensFit" 
                className="h-[15px] w-[15px] block" 
                loading="lazy"
              />
            </a>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/company/lensfit/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Conecte-se conosco no LinkedIn"
              className="transition-all duration-300 hover:scale-110 hover:opacity-80 active:scale-90"
            >
              <img 
                src="/img/linkedin.svg" 
                alt="LinkedIn LensFit" 
                className="h-[15px] w-[15px] block" 
                loading="lazy"
              />
            </a>
            <button className="w-[219px] h-[34px] rounded-[17px] text-white font-medium text-sm bg-[linear-gradient(91deg,#9ecc55_0%,#678b2e_100%)] flex items-center justify-center transition-all duration-300 ease-in-out hover:brightness-110 hover:shadow-md active:scale-95 border-none cursor-pointer">
              Fale com um consultor
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-gray-600 hover:text-blue-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="w-[219px] h-[34px] rounded-[17px] text-white font-medium text-sm bg-[linear-gradient(91deg,#9ecc55_0%,#678b2e_100%)] flex items-center justify-center transition-all duration-300 ease-in-out hover:brightness-110 hover:shadow-md active:scale-95 border-none cursor-pointer">
              Fale com um consultor
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
