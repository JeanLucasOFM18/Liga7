import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';

const Navbar = () => {
    
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#2CC295] px-50 py-1 flex justify-between items-center shadow-md">
        <div className="flex items-center space-x-4">
            <Link to="home" smooth={true} duration={50} className="cursor-pointer">
            <img src="https://i.postimg.cc/jSKDQwM1/image.avif" alt="Logo" className="w-16 h-auto" />
            </Link>
        </div>

        {/* Menú Desktop */}
        <div className="hidden lg:flex space-x-8 text-white font-poet text-lg">
            <Link to="games" smooth duration={50} className="cursor-pointer hover:text-[#E0F11F]">Partidos</Link>
            <Link to="inscription" smooth duration={50} className="cursor-pointer hover:text-[#E0F11F]">Inscripción</Link>
            <Link to="gallery" smooth duration={50} className="cursor-pointer hover:text-[#E0F11F]">Galería</Link>
            <Link to="ubication" smooth duration={50} className="cursor-pointer hover:text-[#E0F11F]">Ubicación</Link>
        </div>

        {/* Botón menú móvil */}
        <button className="text-white lg:hidden" onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menú móvil */}
        {isOpen && (
            <div className="absolute top-8 md:top-18 left-0 w-full bg-[#111] flex flex-col items-center space-y-4 py-4 text-white text-lg font-dmsans lg:hidden">
            <Link to="games" smooth duration={50} className="cursor-pointer hover:text-[#E0F11F]" onClick={closeMenu}>Partidos</Link>
            <Link to="inscription" smooth duration={50} className="cursor-pointer hover:text-[#E0F11F]" onClick={closeMenu}>Inscripción</Link>
            <Link to="gallery" smooth duration={50} className="cursor-pointer hover:text-[#E0F11F]" onClick={closeMenu}>Galería</Link>
            <Link to="ubication" smooth duration={50} className="cursor-pointer hover:text-[#E0F11F]" onClick={closeMenu}>Ubicación</Link>
            </div>
        )}
        </nav>
    );
};

export default Navbar;