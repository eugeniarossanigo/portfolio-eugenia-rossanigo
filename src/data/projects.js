import { SiTailwindcss, SiRedux, SiBootstrap, SiExpress, SiPostman, SiMongodb, SiNodedotjs, SiHtml5, SiCss3, SiJavascript } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'

export const projects = [
  {
    title: "4 en línea / Connect 4",
    date: "julio 2023",
    description: "• Juego de estrategia / Strategy game",
    gitFront: "https://github.com/eugeniarossanigo/connect-4",
    link: "https://connect-4-phi.vercel.app/",
    image: "/projects/connect4-win.png",
    techs: [FaReact, SiCss3],
    grupal: false
  },
  {
    title: "⚈ CAFÉ",
    date: "octubre 2022",
    description: "• Web y mobile app. • E-commerce de café y productos relacionados. • Equipo de 5 personas.",
    gitFront: "https://github.com/eugeniarossanigo/dot-cafe-front",
    gitBack: "https://github.com/eugeniarossanigo/dot-cafe-back",
    link: "https://dot-cafe-front.vercel.app/",
    image: "/projects/cafe-welcome.png",
    techs: [FaReact, SiNodedotjs, SiExpress, SiMongodb, SiBootstrap, SiRedux, SiPostman],
    grupal: true
  },
  {
    title: "Mytinerary",
    date: "septiembre 2022",
    description: "• Web y mobile app sobre itinerarios de viajes. • Equipo de 2 personas.",
    gitFront: "https://github.com/eugeniarossanigo/mytinerary-front",
    gitBack: "https://github.com/eugeniarossanigo/mytinerary-back",
    link: "https://mytinerary-front-sand.vercel.app/",
    image: "/projects/mytinerary-welcome.png",
    techs: [FaReact, SiNodedotjs, SiExpress, SiMongodb],
    grupal: true
  },
  {
    title: "MINDY PetShop",
    date: "agosto 2022",
    description: "• E-commerce de artículos de veterinaria.",
    gitFront: "https://github.com/eugeniarossanigo/petshop-mindy",
    link: "https://petshop-mindy-iota.vercel.app/",
    image: "/projects/petshop.png",
    techs: [SiHtml5, SiCss3, SiJavascript, SiBootstrap],
    grupal: false
  }
]
