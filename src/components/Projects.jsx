import image1 from "/public/image1.png";
import image3 from "/public/image3.png";
import image4 from "/public/image4.png";
import { motion } from "framer-motion";

const projectsData = [
  {
    image: image1, 
    title: "Game Horizon",
    description: "Plateforme de jeux vidéos en ligne + partie Admin et Editeur",
    technologies: ["Bootstrap", "Php", "Docker"],
    link: "https://github.com/BD36033/GameHorizon"  // Lien vers Game Horizon
  },
  {
    image: image3, 
    title: "Grand Angle",
    description: "Plateforme Responsive visiteur d'une galerie d'art multilangue",
    technologies: ["Css", "Php", "Github"],
    link: "https://github.com/alt-ju/grand-angle"  // Lien vers Grand Angle
  },
  {
    image: image4, 
    title: "Color Recognition",
    description: "Outil de détection de couleur via la caméra",
    technologies: ["Python"],
    link: "https://github.com/flodday/python_learning-color-recognition-"  // Lien vers Color Recognition
  }
];

const ProjectCard = ({ project }) => {
  return (
    <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
      {/* Lien ajouté pour rediriger au clic sur l'image */}
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]" 
        />
      </a>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <div className="text-xl font-semibold">{project.title}</div>
          <p className="text-gray-400">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-5">
          {project.technologies.map((tech, index) => (
            <span key={index} className="rounded-lg bg-black p-3">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div id="projects" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24">
      <h1 className="text-4xl font-light text-white md:text-6xl">Mes projets</h1>
      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
