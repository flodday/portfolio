import image from "/public/imageprofil.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div id="home" className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32">
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={image}
            alt="photo de profil"
            className="w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[300px]"
          />
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center"
        >
          <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl font-light md:text-5xl">Florian DIDE</h1>
          <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xl font-light md:text-3xl">Développeur Web</h3>
          <p className="md:text-base text-pretty text-sm text-gray-400">
            Ancien employé d'une ESN, j'ai décidé d'effectuer une reconversion professionnelle afin d'étudier l'informatique et notamment le développement Web. Ayant obtenu mon diplôme de Développeur Web et Web mobile, je suis désormais étudiant Concepteur Developpeur d'Application.
            <hr /> En recherche de stage du 24 Mars au 18 Juin 2025
          </p>
          
          {/* Bouton Mon CV */}
          <a
            href="/cv_portfolio.pdf" // Lien vers le fichier PDF dans le dossier public
            target="_blank" // Ouvre le PDF dans un nouvel onglet
            rel="noopener noreferrer" // Sécurise l'ouverture du lien
            className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300"
          >
            Mon CV
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
