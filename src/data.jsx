import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-5.jpg';
import Work2 from './assets/project-2.jpg';
import Work3 from './assets/videoediting.jpg';
import Work4 from './assets/backend.png';
import Work5 from './assets/landingpage.jpg';
import Work6 from './assets/wordpress.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Adnan',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Ashraf',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '21 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Baramulla,Kashmir',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+91 9149860676',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'adnanakhoon08@gmail.com',
  },

  {
    id: 9,
    title: 'X : ',
    description: 'adnanakhoon08',
  },

  {
    id: 10,
    title: 'Langages : ',
    description: 'English,Hindi,kashmiri',
  },
];

export const stats = [
  {
    id: 1,
    no: '2+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '10+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '8+',
    title: 'Coding <br /> Lanuages',
  },

  {
    id: 4,
    no: '20+',
    title: ' Recieved <br /> Certificates',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: ' Feb 2024 - PRESENT',
    title: 'MERN Stack Trainee <span> Thinknext Technologies </span>',
    desc: 'Exploring MERN technologies currently',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: ' Mar 2023 - May 2023',
    title: 'Web Development <span> Internshala </span>',
    desc: 'Learn html,Css,Javascript,React,Bootstrap etc',
  },

  // {
  //   id: 3,
  //   category: 'experience',
  //   icon: <FaBriefcase />,
  //   year: '2005 - 2013',
  //   title: 'Consultant <span> Videohive </span>',
  //   desc: 'Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt',
  // },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2024',
    title: 'Engineering Degree <span> YCET</span>',
    desc: 'Completed my B.E from Yogananda College of Engineering and Technology',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2019',
    title: '10+2<span> Govt boys hr. sec school Baramulla  </span>',
    desc: 'I did my 10+2 in Baramulla in 2019 ',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2017',
    title: '10<sup>th</sup><span> JKbose </span>',
    
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '85',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '77',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '81',
  },

  {
    id: 4,
    title: 'React',
    percentage: '83',
  },

  {
    id: 5,
    title: 'Bootstrap',
    percentage: '50',
  },

  {
    id: 6,
    title: 'node js',
    percentage: '58',
  },

  {
    id: 7,
    title: 'Mongo DB',
    percentage: '35',
  },

  {
    id: 8,
    title: 'Express js',
    percentage: '66',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Web development',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : websites ',
        desc: '',
      },
     
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'MERN',
      },
     
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Website Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website design',
      },
   
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Html,Css,Javascript',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.sidcupfamily.com',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Video Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Video',
      },
      
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Premium',
      },
      
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Backend Development',
    details: [
      {
        icon: <FiFileText />,
        title: ' Backend  ',
        desc: 'Authintication',
      },
      
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Node js,Express js,MongoDB',
      },
      
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Landing Page',
    details: [
      {
        icon: <FiFileText />,
        title: 'Meesho Landing Page : ',
        desc: 'Website',
      },
      
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Html, CSS',
      },
     
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Wordpress',
    details: [
      {
        icon: <FiFileText />,
        title: 'wordpress : ',
        desc: 'website',
      },
      
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'wordpress',
      },
     
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
