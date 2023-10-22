// import images
import Hero_person from "./assets/images/Hero/person.png";

import evento from "./assets/images/Skills/evento.png";
import tito from "./assets/images/Skills/tito.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import person_project from "./assets/images/projects/person.png";

import santi from "./assets/images/Testimonials/santi.png";
import juanceto from "./assets/images/Testimonials/juanceto.png";
import desconocido from "./assets/images/Testimonials/desconocido.png";

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
    LastName: "Benavides",
    btnText: "Hire Me",
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
    title: "Competenze",
    subtitle: "Le mie capacità",
    skills_content: [
      {
        name: "Pianificatore di eventi",
        para: "Lorem ipsum text  dummy",
        logo: evento,
      },
      {
        name: "Tito Calderon",
        para: "Reggaeton vecchia scuola imbattibile",
        logo: tito,
      },
      {
        name: "Calcio",
        para: "Capitano della quarta divisione del Platense e del Napoli",
        logo: ps,
      },
      {
        name: "Twitch",
        para: "Record di persone bannate su Twitch",
        logo: reactjs,
      },
      {
        name: "Logitech",
        para: "Portatore di auris sessualmente repellente",
        logo: evento,
      },
      {
        name: "Cucina",
        para: "Esperto in cucina di Capeletini e degustatore professionista dal 9 de Julio",
        logo: python,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo2,
      },
      {
        title: "PhotoShop Editing",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
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
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "codeaprogram@gmail.com",
        icon: GrMail,
        link: "mailto:codeaprogram@gmail.com",
      },
      {
        text: "+91 1234 56778",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "codeaprogram",
        icon: BsInstagram,
        link: "https://www.instagram.com/codeaprogram/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
