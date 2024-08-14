import type {

  TNavLink,
  TService,
  TTechnology,


  TProject,
} from "../types";

import {

  backend,
  creator,
  web,
  javascript,
  Bootstrap,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
 


  Pureglow,
  kanban,
  seminarhallbooking,
  Calendor,
  Tictacgame,
  Posts,
  Tournext


} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Bootstrap",
    icon: Bootstrap,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },

];

// const experiences: TExperience[] = [
//   {
//     title: "React.js Developer",
//     companyName: "",
//     icon: '',
//     iconBg: "#383E56",
//     date: "March 2020 - April 2021",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },

//   {
//     title: "Web Developer",
//     companyName: "",
//     icon: '',
//     iconBg: "#383E56",
//     date: "November 2023",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Full stack Developer",
//     companyName: "",
//     icon: '',
//     iconBg: "#E6DEDD",
//     date: "Jan 2024 - Present",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
// ];


const projects: TProject[] = [
  {
    name: "Pure Glow",
    description:
      "Pure Glow is E-commerce website for selling organic buety Products",
    tags: [
      {
        name: "html,css",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: Pureglow,
    sourceCodeLink: "https://github.com/IHSANTK/Pure-Glow",
  },
  {
    name: "TourNext",
    description:
      "TourNext is travel and tourist based we application",
    tags: [
     
      {
        name: "React,redux",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: Tournext,
    sourceCodeLink: "https://github.com/IHSANTK/TourNext",
  },
  {
    name: "Kanban App",
    description:
        "This for user can add and edit delete their tasks and dragable options",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: kanban,
    sourceCodeLink: "https://github.com/IHSANTK/Kanban-App-Frontent",
  },
  {
    name: "Seminar Hall Booking",
    description:
      "User can book seat in a seminar hall",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: seminarhallbooking,
    sourceCodeLink: "https://github.com/IHSANTK/Seminar-Hall_Booking_App",
  },
  {
    name: "Calender Event Manage",
    description:
      "Users can Add events in calender Date for rememeber events",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "redux Toolkit",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image:  Calendor,
    sourceCodeLink: "https://react-calendar-bice-two.vercel.app",
  },
  
  {
    name: "Tic Tic Game",
    description:
      "This is a game ",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "redux ",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image:   Tictacgame,
    sourceCodeLink: "https://github.com/IHSANTK/TicTacGame_React",
  },
  {
    name: "Post and schedulePosts App",
    description:
      "This is for Users can post and schedule their posts ",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind ",
        color: "pink-text-gradient",
      },
      
    ],
    image:Posts,
    sourceCodeLink: "https://github.com/IHSANTK/Post_and_schedulePosts_React",
  },
  
];

export { services, technologies, projects };
