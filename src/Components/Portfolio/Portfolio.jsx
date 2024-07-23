import "./portfolio.scss";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/26555819/pexels-photo-26555819/free-photo-of-a-dog-is-sitting-in-the-grass-in-the-woods.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sit aliquid rem error quod doloribus nam modi laboriosam non animi omnis dolore cumque, atque, qui odio vel similique quaerat laborum!",
  },
  {
    id: 2,
    title: "Next.js Commerce",
    img: "https://images.pexels.com/photos/705425/pexels-photo-705425.jpeg?auto=compress&cs=tinysrgb&w=400",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sit aliquid rem error quod doloribus nam modi laboriosam non animi omnis dolore cumque, atque, qui odio vel similique quaerat laborum!",
  },
  {
    id: 3,
    title: "vanilla js App",
    img: "https://images.pexels.com/photos/416920/pexels-photo-416920.jpeg?auto=compress&cs=tinysrgb&w=400",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sit aliquid rem error quod doloribus nam modi laboriosam non animi omnis dolore cumque, atque, qui odio vel similique quaerat laborum!",
  },
  {
    id: 4,
    title: "Music App",
    img: "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=400",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sit aliquid rem error quod doloribus nam modi laboriosam non animi omnis dolore cumque, atque, qui odio vel similique quaerat laborum!",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imagecontainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
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
        <h1>Featured Work</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
