import { useState } from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuOpen = () => {
        setIsOpen(!isOpen); // Permet d'alterner l'état de isOpen
    };

    return (
        <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly">
            <a href="#home" className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100">
                Florian
            </a>
            <ul className="hidden md:flex gap-10">
                <a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                    <li>Accueil</li>
                </a>

                <a href="#tech" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                    <li>Tech</li>
                </a>

                <a href="#projects" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                    <li>Projets</li>
                </a>

                <a href="#contact" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                    <li>Contact</li>
                </a>
            </ul>

            <ul className="hidden md:flex gap-5">
                <a href="https://www.linkedin.com/in/florian-dide/" target="_blank" rel="noopener noreferrer">
                    <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-green-500 hover:opacity-100">
                        <BsLinkedin />
                    </li>
                </a>
                <a href="https://github.com/flodday" target="_blank" rel="noopener noreferrer">
                    <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-green-500 hover:opacity-100">
                        <BsGithub />
                    </li>
                </a>
                <a href="https://www.instagram.com/flodday_/" target="_blank" rel="noopener noreferrer">
                    <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-green-500 hover:opacity-100">
                        <BsInstagram />
                    </li>
                </a>
            </ul>

            {/* Bouton pour ouvrir/fermer le menu mobile */}
            <button onClick={menuOpen} className="md:hidden text-3xl">
                {isOpen ? 'X' : '☰'} {/* Affiche un 'X' ou '☰' selon l'état */}
            </button>

            {isOpen && (
                <div className="fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-1 border-gray-800 bg-black/90 p-12">
                    <ul className="flex flex-col gap-8">
                        <a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                            <li>Accueil</li>
                        </a>

                        <a href="#tech" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                            <li>Tech</li>
                        </a>

                        <a href="#projects" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                            <li>Projets</li>
                        </a>

                        <a href="#contact" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                            <li>Contact</li>
                        </a>
                    </ul>

                    <ul className="flex flex-wrap gap-5">
                        <a href="https://www.linkedin.com/in/florian-dide/" target="_blank" rel="noopener noreferrer">
                            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-green-500 hover:opacity-100">
                                <BsLinkedin />
                            </li>
                        </a>
                        <a href="https://github.com/flodday" target="_blank" rel="noopener noreferrer">
                            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-green-500 hover:opacity-100">
                                <BsGithub />
                            </li>
                        </a>
                        <a href="https://www.instagram.com/flodday_/" target="_blank" rel="noopener noreferrer">
                            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-green-500 hover:opacity-100">
                                <BsInstagram />
                            </li>
                        </a>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
