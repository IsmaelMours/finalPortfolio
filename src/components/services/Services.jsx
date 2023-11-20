import { useRef, useEffect } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const skillsData = [
  {
    name: "HTML",
    percentage: 90,
    description: "HTML is a markup language used to create the structure of web pages.",
  },
  {
    name: "CSS",
    percentage: 80,
    description: "CSS is a styling language used to design the appearance of web pages.",
  },
  {
    name: "JavaScript",
    percentage: 65,
    description: "JavaScript is a versatile programming language used for web development and more.",
  },
  {
    name: "React.js",
    percentage: 75,
    description: "React.js is a popular JavaScript library for building user interfaces.",
  },
  {
    name: "Java & Spring Boot",
    percentage: 80,
    description: "Java is a versatile programming language, and Spring Boot is a framework for building Java-based applications.",
  },
  {
    name: "TypeScript",
    percentage: 65,
    description: "TypeScript is a superset of JavaScript that adds static typing to the language.",
  },
];

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1 } },
};

const EducationVariants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { triggerOnce: true });

  useEffect(() => {
    isInView && startAnimation();
  }, [isInView]);

  const startAnimation = () => {
    const skills = document.querySelectorAll(".skill");
    skills.forEach((skill, index) => {
      setTimeout(() => {
        skill.style.opacity = 1;
      }, 300 * index);
    });
  };

  return (
    <motion.div className="education" variants={variants} initial="initial" ref={ref} animate="animate">
      <motion.div className="textContainer" variants={variants}>
        <div className="about__content">
          <div className="about__content-bio">
            <div className="about-container bio__about-container">
              <div className="about-details about-container__about-details" style={{ width: "700px", margin: "0 auto" }}>
                <h3 className="about_details-hello text-backdrop" style={{ textAlign: "center", color: "#f39c12", fontSize: "24px" }}>
                  Hello, I'm Ismael Mours
                </h3>
                <p className="about-details__paragraph" style={{ marginTop: "30px", fontSize: "18px" }}>
                  I am a Fullstack Developer with a passion for creating interactive and user-friendly web applications. I have experience in front-end and back-end development and enjoy working on various projects to expand my skills and knowledge in the field.
                </p>
              </div>
            </div>

            <motion.div className="about__pro-skills padding-block-700" style={{ marginTop: "20px" }} initial="initial" animate={isInView ? "animate" : "initial"} variants={variants} ref={ref}>
              <h4 className="pro-skills__heading text-backdrop" >Professional Skills</h4>
              <div className="skill-container" style={{ marginTop: "40px" }}>
                {skillsData.map((skill, index) => (
                  <motion.div className="skill" key={index} initial="initial" animate={isInView ? "animate" : "initial"} variants={variants}>
                    <div className="skill-bar">
                      <div className="percentage">{skill.percentage}%</div>
                    </div>
                    <div className="skill-name">{skill.name}</div>
                    <div className="tooltip">{skill.description}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div className="about__education padding-block-700" initial="initial" animate={isInView ? "animate" : "initial"} variants={EducationVariants} ref={ref}>
              <h4 className="about__education-heading text-backdrop">Education</h4>
              <motion.p className="about__education-details" variants={EducationVariants}>
                National Diploma: Information Technology
              </motion.p>
              <motion.p className="about__education-details" variants={EducationVariants}>
                Tshwane University Of Technology
              </motion.p>
              <motion.p className="about__education-details" variants={EducationVariants}>
                2021
              </motion.p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
