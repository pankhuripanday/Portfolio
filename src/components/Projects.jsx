import luxora from "../assets/luxora.png";
import bot from "../assets/bot.png";
import amazon from "../assets/amazon.png";
import bgchanger from "../assets/bgchanger.png";
import ecommerce from "../assets/ecommerce.png";
import food from "../assets/food.png";  
const projects = [
  {
    id: 1,
    name: "Luxora",
    technologies: "React Js, Tailwind Css",
    image: luxora,
    github: "https://github.com/pankhuripanday/Luxora",
    demo: "https://luxoraa.vercel.app/"
  },
  {
    id: 2,
    name: "Chat Bot",
    technologies: "React Js, Tailwind Css",
    image: bot,
    github: "https://github.com/pankhuripanday/chatbot_akgec",
    demo: "https://chatbotakgec.vercel.app/"
  },
  {
    id: 3,
    name: "Food Rescue Conect",
    technologies: "HTML, CSS, JavaScript",
    image: food,
    github: "https://github.com/pankhuripanday/FoodRescueConnect",
    demo:"https://pankhuripanday.github.io/FoodRescueConnect/"
  },
  {
    id: 4,
    name: "BgChanger",
    technologies: "ReactJs",
    image: bgchanger,
    github: "https://github.com/pankhuripanday/React_BgChanger",
    demo:"https://react-bg-changer-mu.vercel.app/"
  },
  {
    id: 5,
    name: "TrendTribe",
    technologies: "HTML, CSS, JavaScript",
    image: ecommerce,
    github: "https://github.com/pankhuripanday/e-commerce_clone",
    demo:"https://pankhuripanday.github.io/e-commerce_clone/"
  },
  {
    id: 6,
    name: "Amazon Clone",
    technologies: "HTML, CSS",
    image: amazon,
    github: "https://github.com/pankhuripanday/Amazon_clone",
    demo:"https://pankhuripanday.github.io/Amazon_clone/"
  }
];

const Projects = () => {
  return (
    <div className="py-20 text-white bg-black" id="projects">
      <div className="container px-8 mx-auto md:px-16 lg:px-24">
        <h2 className="mb-12 text-4xl font-bold text-center">My Projects</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className="p-6 transition-transform duration-300 transform bg-gray-800 rounded-lg hover:shadow-lg hover:scale-105">
              <img src={project.image} alt={project.name} className="object-cover w-full h-48 mb-4 rounded-lg" />
              <h3 className="mb-2 text-2xl font-bold">{project.name}</h3>
              <p className="mb-4 text-gray-400">{project.technologies}</p>
              <a href={project.github} className="inline-block px-4 py-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-500" target="_blank" 
              rel="noopener noreferrer">GitHub</a>
              <a href={project.demo} className="inline-block px-4 py-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-500" target="_blank" 
              rel="noopener noreferrer"> Demo</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;