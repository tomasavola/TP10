// import images
import Hero_person from "./assets/images/Hero/person.png";

import disco from "./assets/images/Skills/disco.png";
import chef from "./assets/images/Skills/chef.png";
import twitch from "./assets/images/Skills/twitch.png";
import pelota from "./assets/images/Skills/pelota.png";
import musica from "./assets/images/Skills/musica.png";
import logitech from "./assets/images/Skills/logitech.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import person_project from "./assets/images/projects/person.png";

import santi from "./assets/images/Testimonials/santi.png";
import juanceto from "./assets/images/Testimonials/juanceto.png";
import desconocido from "./assets/images/Testimonials/desconocido.png";
import raba from "./assets/images/Testimonials/raba.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

import { Icon } from "@iconify/react";
import { bellIcon } from "@iconify/icons-bi/bell";



//NAV BAR
import { Badge } from 'primereact/badge';

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
 
  ],
  hero: {
    title: "CEO Aereolineas Splinter",
    firstName: "Geronimo",
    lastName: "Benavides",
    image: Hero_person,
    hero_content: [
      {
        count: "8+",
        text: "Anni di esperienza in un ristorante italiano",
      },
      {
        count: "20+",
        text: "Partecipazione ai concerti di Tito Calderon",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY ABILITIES AND SKILLS",
    skills_content: [
      {
        name: "Pianificatore di eventi",
        para: "organizzatore delle migliori feste di San Clemente",
        logo: disco,
      },
      {
        name: "Tito Calderon",
        para: "Reggaeton vecchia scuola imbattibile",
        logo: musica,
      },
      {
        name: "Calcio",
        para: "Capitano della quarta divisione del Platense e del Napoli",
        logo: pelota,
      },
      {
        name: "Twitch",
        para: "Record di persone bannate su Twitch",
        logo: twitch,
      },
      {
        name: "Logitech",
        para: "Portatore di auris sessualmente repellente",
        logo: logitech,
      },
      {
        name: "Cucina",
        para: "Esperto in cucina di Capeletini e degustatore professionista dal 9 de Julio",
        logo: chef,
      },
    ],
    icon: MdArrowForward,
  },
  
  Projects: {
    title: "Projects",
    subtitle: "MY CREATIONS",
    image: person_project,
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“ Y esos auris de virgo momo?”",
        img: juanceto,
        name: "Juanceto01",
      },
      {
        review:
          "“Rubius no te gustaria vivir en Argentina, creeme esta todo muy caro :'v <3 ”",
        img: raba,
        name: "El tata",
      },
      {
        review:
          "“Momo sacate la bandera que la representas mal.”",
        img: desconocido,
        name: "Usuario desconocido",
      },
      {
        review:
          "“Momo te haces el que sabes de futbol y sos de Platense”",
        img: santi,
        name: "Santi",
      },
      {
        review:
          "“Momo quien te corto el pelo? Para no ir.”",
        img: desconocido,
        name: "Usuario desconocido",
      },
      {
        review:
          "“Fernan has el reto de detener el tren con nuestro buen amigo el niga like para qu fernan lo vea carajo”",
        img: raba,
        name: "El tata",
      },

    ],
  },
 
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "momonapolitano1904@gmail.com",
        icon: GrMail,
        link: "mailto:codeaprogram@gmail.com",
      },
      {
        text: "+39 1005 1987",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "gero.momo",
        icon: BsInstagram,
        link: "https://www.instagram.com/codeaprogram/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2023",
  },
};
