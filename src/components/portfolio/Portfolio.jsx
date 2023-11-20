import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";


const items = [
  {
    id: 1,
    title: "School web app",
    img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "an online platform where the school or its community members, such as teachers, students, and parents, can create and share articles, stories, news, and updates related to the school's activities, achievements, and events",
  },
  {
    id: 2,
    title: "chat app",
    img: "https://plus.unsplash.com/premium_photo-1681487872232-fa622a6dd59e?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "is a software application or platform that allows users to engage in real-time text-based conversations with each other over the internet. These apps facilitate communication, interaction, and messaging between individuals or groups, often using a variety of features and functionalities.",
  },
  {
    id: 3,
    title: "number generator",
    img: "https://images.unsplash.com/photo-1518688248740-7c31f1a945c4?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "is a software application designed to generate random numbers for various lottery games. These apps are used by individuals who want to play lotteries and need a quick and fair way to choose their numbers",
  },
  {
    id: 4,
    title: "Java Microservices",
    img: "https://images.unsplash.com/photo-1667372459567-3853510dd5ce?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "is a software application that utilizes microservices architecture as its design approach and is implemented using the Java programming language",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
           
              <button>See Demo</button>
              
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
