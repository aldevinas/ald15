import { IProject, IService, ISkill } from './type';
import { RiPagesLine, RiTeamLine } from 'react-icons/ri';
import { AiOutlineApi, AiFillCheckCircle } from "react-icons/ai";
import { MdWeb } from "react-icons/md";
import { FaSearchDollar } from 'react-icons/fa';
import { TiSpannerOutline } from "react-icons/ti";



export const services: IService[] = [
  {
    Icon: MdWeb,
    title: "Frontend Development",
    about:
      "unique website, according to an individual plan with good UX/UI design.",
  },
  {
    Icon: FaSearchDollar,
    title: "SEO Optimization",
    about:
      "SEO optimized website or landing pages for e-commerce. ",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "web apps with Rest APIs provided by third parties.",
  },
  {
    Icon: TiSpannerOutline,
    title: "Admin Dashboard",
    about: "responsive admin dashboards and panels for web apps.",
  },
  {
    Icon: RiPagesLine,
    title: "Interactive web Banners",
    about:
      "make attractive and interactive banners to increase sales and get attention.",
  },
  {
    Icon: RiTeamLine,
    title: "Team Work",
    about:
      "I can work with a team on a big projects as a front end developer.",
  },
];

export const languages:ISkill[] = [
  {
    name: 'HTML5',
    level: '90%',
    Icon: AiFillCheckCircle
  },
  {
    name: 'JavaScript',
    level: '60%',
    Icon: AiFillCheckCircle
  },
  {
    name: 'CSS3',
    level: '80%',
    Icon: AiFillCheckCircle
  },
  {
    name: 'ReactJS',
    level: '65%',
    Icon: AiFillCheckCircle
  },
  {
    name: 'Bootstrap',
    level: '70%',
    Icon: AiFillCheckCircle
  },
  {
    name: 'NEXT.JS',
    level: '40%',
    Icon: AiFillCheckCircle
  },
];

export const tools: ISkill[] = [
  {
    Icon: AiFillCheckCircle,
    name: "VS Code",
    level: "80%",
  },
  {
    Icon: AiFillCheckCircle,
    name: "Photoshop",
    level: "45%",
  },
  {
    Icon: AiFillCheckCircle,
    name: "GitHub",
    level: "50%",
  },
  {
    Icon: AiFillCheckCircle,
    name: "Figma",
    level: "45%",
  },
];

export const projects: IProject[] = [
  { 
    id: 1,
    name: "Admin dashboard",
    description:
      "This is admin pannel template demo made with React JS library",
    image_path: "/images/dashboard.jpg",
    deployed_url: "https://ald15-dashboard.netlify.app/",
    github_url: "https://github.com/aldevinas/dashboard",
    category: ["react"],
    key_techs: ["ReactJS", "Chart.js", "Material UI"],
  },
  {
    id: 2,
    name: "Weather forecast 3rd API",
    image_path: "/images/forecast.jpg",
    deployed_url: "https://ald15-forecast.netlify.app/",
    github_url: "https://github.com/aldevinas/forecast",
    category: ["react"],
    description:
      "This is simply portfolio work with third party api integration to web app.",
    key_techs: ["ReactJS", "bootstrap", "heroku"],
  },
  {
    id: 3,
    name: "SOON",
    image_path: "/images/project_img.jpg",
    deployed_url: "",
    github_url: "",
    category: ["node", "mongoDB", "react"],
    description:
      "More info about this project comming soon.",
    key_techs: [
      "React",
      "Redux",
      "Node",
      "Express",
      "Mongo",
      "REST API",
      "Bootstrap",
    ],
  },
  {
    id: 4,
    name: "SOON",
    image_path: "/images/project_img.jpg",
    deployed_url: "",
    github_url: "",
    category: ["node", "react"],
    description:
      "More info about this project comming soon.",
    key_techs: ["React", "Node", "Express", "Socket", "Bootstrap"],
  },
  {
    id: 5,
    name: "SOON",
    image_path: "/images/project_img.jpg",
    deployed_url: "",
    github_url: "",
    category: ["django", "react"],
    description:
      "More info about this project comming soon.",
    key_techs: ["React", "Django", "Django REST API"],
  },
  {
    id: 6,
    name: "SOON",
    image_path: "/images/project_img.jpg",
    deployed_url: "!#",
    github_url: "#",
    category: ["express"],
    description:
      "More info about this project comming soon.",
    key_techs: ["Express", "TensorFlow.js", "Vanilla js"],
  },
  {
    id: 7,
    name: "SOON",
    image_path: "/images/project_img.jpg",
    deployed_url: "",
    github_url: "",
    category: ["express"],
    description:
      "More info about this project comming soon.",
    key_techs: [
      "React",
      "Redux",
      "Firebase Auth",
      "YouTube API",
      "Sass",
      "Bootstrap",
    ],
  },
  {
    id: 8,
    name: "SOON",
    image_path: "/images/project_img.jpg",
    deployed_url: "",
    github_url: "",
    category: ["react"],
    description:
      "More info about this project comming soon.",
    key_techs: ["React", "Redux", "Firebase Auth", "API", "Sass", "Bootstrap"],
  },
];
