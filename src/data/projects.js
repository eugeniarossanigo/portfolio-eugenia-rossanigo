import { SiTailwindcss, SiRedux, SiBootstrap, SiExpress, SiPostman, SiMongodb, SiNodedotjs, SiHtml5, SiCss3, SiJavascript } from 'react-icons/si'
import { DiMysql } from 'react-icons/di'
import { FaReact } from 'react-icons/fa'

export const projects = [
  {
    title: "Crowd Guitar",
    date: "December 2023 (1.0)",
    description: "• Guitar Blog with details and prices (future ecommerce).",
    gitFront: "https://github.com/eugeniarossanigo/itcrowd-challenge",
    link: "https://itcrowd-challenge-eugeniarossanigo.vercel.app/",
    image: "/projects/it-crowd.png",
    techs: [FaReact, SiNodedotjs, SiExpress, DiMysql, SiTailwindcss, SiRedux, SiPostman],
    grupal: false
  },
  {
    title: "Task Tracker",
    date: "August 2023 (2.0)",
    description: "• Pending tasks to be managed.",
    gitFront: "https://github.com/eugeniarossanigo/task-tracker",
    link: "#",
    image: "/projects/task-tracker.png",
    techs: [FaReact, SiCss3],
    grupal: false
  },
  {
    title: "Connect 4",
    date: "July 2023",
    description: "• Strategy game",
    gitFront: "https://github.com/eugeniarossanigo/connect-4",
    link: "https://connect-4-phi.vercel.app/",
    image: "/projects/connect4-win.png",
    techs: [FaReact, SiCss3],
    grupal: false
  },
  {
    title: "⚈ CAFÉ",
    date: "October 2022",
    description: "• Web and mobile app. • E-commerce of coffee and related products. • 5 persons team.",
    gitFront: "https://github.com/eugeniarossanigo/dot-cafe-front",
    gitBack: "https://github.com/eugeniarossanigo/dot-cafe-back",
    link: "https://dot-cafe-front.vercel.app/",
    image: "/projects/cafe-welcome.png",
    techs: [FaReact, SiNodedotjs, SiExpress, SiMongodb, SiBootstrap, SiRedux, SiPostman],
    grupal: true
  },
  {
    title: "Mytinerary",
    date: "September 2022",
    description: "• Web and mobile app about trips itineraries. • 2 persons team.",
    gitFront: "https://github.com/eugeniarossanigo/mytinerary-front",
    gitBack: "https://github.com/eugeniarossanigo/mytinerary-back",
    link: "https://mytinerary-front-sand.vercel.app/",
    image: "/projects/mytinerary-welcome.png",
    techs: [FaReact, SiNodedotjs, SiExpress, SiMongodb],
    grupal: true
  },
  {
    title: "MINDY PetShop",
    date: "August 2022",
    description: "• E-commerce of veterinary articles.",
    gitFront: "https://github.com/eugeniarossanigo/petshop-mindy",
    link: "https://petshop-mindy-iota.vercel.app/",
    image: "/projects/petshop.png",
    techs: [SiHtml5, SiCss3, SiJavascript, SiBootstrap],
    grupal: false
  }
]
