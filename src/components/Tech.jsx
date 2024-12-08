import {
  BiLogoAngular,
  BiLogoBootstrap,
  BiLogoCss3,
  BiLogoDocker,
  BiLogoFigma,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoPostgresql,
  BiLogoTailwindCss,
  BiLogoWordpress,
  BiLogoDiscord,
  BiLogoGitlab,
  BiLogoMicrosoftTeams,
  BiLogoPython,
  BiLogoTrello,
  BiLogoVisualStudio,
} from "react-icons/bi";
import { motion } from "framer-motion";

const Tech = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      id="tech"
      className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32"
    >
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-4xl font-light text-white md:text-6xl"
      >
        Technologies
      </motion.h1>

      {/* Cards Section */}
      <div className="flex flex-wrap items-center justify-center gap-10 p-5">
        
        {/* Front-End Card */}
        <div className="flex flex-col items-center justify-center gap-5 p-5 border rounded-lg shadow-lg bg-gray-800">
          <h2 className="text-xl font-semibold text-white">Front-End</h2>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <BiLogoHtml5 className="cursor-pointer text-[60px] text-blue-500 transition-all duration-300 hover:-translate-y-5 sm:text-[80px]" />
            </motion.div>
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <BiLogoCss3 className="cursor-pointer text-[60px] text-blue-500 transition-all duration-300 hover:-translate-y-5 sm:text-[80px]" />
            </motion.div>
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <BiLogoJavascript className="cursor-pointer text-[60px] text-yellow-500 transition-all duration-300 hover:-translate-y-5 sm:text-[80px]" />
            </motion.div>
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <BiLogoAngular className="cursor-pointer text-[60px] text-red-500 transition-all duration-300 hover:-translate-y-5 sm:text-[80px]" />
            </motion.div>
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <BiLogoTailwindCss className="cursor-pointer text-[60px] text-green-500 transition-all duration-300 hover:-translate-y-5 sm:text-[80px]" />
            </motion.div>
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <BiLogoBootstrap className="cursor-pointer text-[60px] text-violet-500 transition-all duration-300 hover:-translate-y-5 sm:text-[80px]" />
            </motion.div>
          </div>
        </div>

        {/* Back-End Card */}
        <div className="flex flex-col items-center justify-center gap-5 p-5 border rounded-lg shadow-lg bg-gray-800">
          <h2 className="text-xl font-semibold text-white">Back-End</h2>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <BiLogoNodejs className="cursor-pointer text-[60px] text-green-500 transition-all duration-300 hover:-translate-y-5 sm:text-[80px]" />
            </motion.div>
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <BiLogoPostgresql className="cursor-pointer text-[60px] text-blue-500 transition-all duration-300 hover:-translate-y-5 sm:text-[80px]" />
            </motion.div>
            {/* Add other back-end technologies here, like PHP, SQL, Laravel, etc. */}
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <BiLogoPython className="cursor-pointer text-[60px] text-yellow-500 transition-all duration-300 hover:-translate-y-5 sm:text-[80px]" />
            </motion.div>
          </div>
        </div>

        {/* + Card */}
        <div className="flex flex-col items-center justify-center gap-5 p-5 border rounded-lg shadow-lg bg-gray-800">
          <h2 className="text-xl font-semibold text-white">+</h2>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <BiLogoDocker className="cursor-pointer text-[60px] text-blue-500 transition-all duration-300 hover:-translate-y-5 sm:text-[80px]" />
            </motion.div>
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <BiLogoFigma className="cursor-pointer text-[60px] text-blue-500 transition-all duration-300 hover:-translate-y-5 sm:text-[80px]" />
            </motion.div>
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <BiLogoWordpress className="cursor-pointer text-[60px] text-white transition-all duration-300 hover:-translate-y-5 sm:text-[80px]" />
            </motion.div>
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <BiLogoGitlab className="cursor-pointer text-[60px] text-red-500 transition-all duration-300 hover:-translate-y-5 sm:text-[80px]" />
            </motion.div>
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <BiLogoDiscord className="cursor-pointer text-[60px] text-indigo-500 transition-all duration-300 hover:-translate-y-5 sm:text-[80px]" />
            </motion.div>
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <BiLogoMicrosoftTeams className="cursor-pointer text-[60px] text-green-500 transition-all duration-300 hover:-translate-y-5 sm:text-[80px]" />
            </motion.div>
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <BiLogoTrello className="cursor-pointer text-[60px] text-blue-500 transition-all duration-300 hover:-translate-y-5 sm:text-[80px]" />
            </motion.div>
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <BiLogoVisualStudio className="cursor-pointer text-[60px] text-blue-500 transition-all duration-300 hover:-translate-y-5 sm:text-[80px]" />
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Tech;
