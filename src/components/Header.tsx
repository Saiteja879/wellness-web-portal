
import { useState } from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-[#D3E4FD] to-[#e6f7ff] py-4 px-6 flex justify-between items-center shadow-sm">
      <div className="flex items-center space-x-4">
        <img 
          src="/image/hi.jpg" 
          alt="NITC Logo" 
          className="h-20 w-auto object-contain"
        />
        <h1 className="text-2xl font-bold">NITC Health Care Center</h1>
      </div>
      
      {/* Mobile menu button */}
      <div className="md:hidden">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="focus:outline-none text-gray-700"
        >
          <Menu size={24} />
        </button>
      </div>
      
      {/* Desktop navigation */}
      <nav className="hidden md:flex space-x-8">
        <Link to="/" className="text-lg text-gray-700 hover:text-[#33C3F0] transition-colors duration-200">Home</Link>
        <Link to="/prescription" className="text-lg text-gray-700 hover:text-[#33C3F0] transition-colors duration-200">Patients</Link>
        <Link to="/login" className="text-lg text-gray-700 hover:text-[#33C3F0] transition-colors duration-200">Login</Link>
        <Link to="/doctor-login" className="text-lg text-gray-700 hover:text-[#33C3F0] transition-colors duration-200">Doctor</Link>
        <a href="#pharmacist" className="text-lg text-gray-700 hover:text-[#33C3F0] transition-colors duration-200">Pharmacist</a>
      </nav>
      
      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="absolute top-20 right-0 left-0 bg-[#D3E4FD] z-10 md:hidden">
          <div className="flex flex-col items-center py-4">
            <Link to="/" className="py-2 text-lg text-gray-700 hover:text-[#33C3F0]" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/prescription" className="py-2 text-lg text-gray-700 hover:text-[#33C3F0]" onClick={() => setIsMenuOpen(false)}>Patients</Link>
            <Link to="/login" className="py-2 text-lg text-gray-700 hover:text-[#33C3F0]" onClick={() => setIsMenuOpen(false)}>Login</Link>
            <Link to="/doctor-login" className="py-2 text-lg text-gray-700 hover:text-[#33C3F0]" onClick={() => setIsMenuOpen(false)}>Doctor</Link>
            <a href="#pharmacist" className="py-2 text-lg text-gray-700 hover:text-[#33C3F0]">Pharmacist</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
