// import { Github, Twitter, Figma } from 'lucide-react';
import { Linkedin } from 'lucide-react';

import LogoFigma from '/public/images/logos/icon-figma.svg';
import LogoFramer from '/public/images/logos/design/framer-icon.svg';
import LogoWebflow from '/public/images/logos/design/webflow-icon.svg';
import LogoPhotoshop from '/public/images/logos/design/adobe-photoshop-icon.svg';
import LogoIllustrator from '/public/images/logos/design/icons8-illustrator.svg';
import LogoWordpress from '/public/images/logos/design/wordpress-icon.svg';
import LogoHtml from '/public/images/logos/design/w3_html5-icon.svg';
import LogoCss from '/public/images/logos/design/w3_css-icon.svg';
import LogoBootstrap from '/public/images/logos/design/getbootstrap-icon.svg';
import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import LogoSass from '/public/images/logos/icon-sass.svg';
import LogoTailwindcss from '/public/images/logos/icon-tailwindcss.svg';
import LogoGit from '/public/images/logos/icon-git.svg';
import LogoGoogleanalytics from '/public/images/logos/design/google_analytics-icon.svg';
import LogoHotjar from '/public/images/logos/design/Hotjar.svg';
import LogoChatgpt from '/public/images/logos/design/ChatGPT_logo.svg';
// import LogoProtopie from '/public/images/logos/design/protopie-2.svg';
// import LogoRive from '/public/images/logos/design/rive_square.svg';


// import LogoTypescript from '/public/images/logos/icon-typescript.svg';
// import LogoReact from '/public/images/logos/icon-react.svg';
// import LogoNextjs from '/public/images/logos/icon-nextjs.svg';
// import LogoNodejs from '/public/images/logos/icon-nodejs.svg';
// import LogoExpress from '/public/images/logos/icon-express.svg';
// import LogoExpressLight from '/public/images/logos/icon-express-light.svg';
// import LogoNest from '/public/images/logos/icon-nest.svg';
// import LogoSocket from '/public/images/logos/icon-socket.svg';
// import LogoSocketLight from '/public/images/logos/icon-socket-light.svg';
// import LogoPostgreSQL from '/public/images/logos/icon-postgresql.svg';
// import LogoMongoDB from '/public/images/logos/icon-mongodb.svg';
// import LogoCypress from '/public/images/logos/icon-cypress.svg';
// import LogoCypressLight from '/public/images/logos/icon-cypress-light.svg';
// import LogoStorybook from '/public/images/logos/icon-storybook.svg';

import LogoUpwork from '/public/images/logos/logo-upwork.svg';
import LogoFloofers from '/public/images/logos/company/floofers-logo.png';
import LogoFloofersLight from '/public/images/logos/company/floofers-light-logo.png';
import LogoDotnpixel from '/public/images/logos/company/greyatom-logo.png';
import LogoDotnpixelLight from '/public/images/logos/company/greyatom-light-logo.png';
import LogoInteractiveintelligence from '/public/images/logos/company/interactive-intelligence-logo.png';
import LogoInteractiveintelligenceLight from '/public/images/logos/company/interactive-intelligence-light-logo.png';

import ProjectFiskil from '/public/images/project-greyatom.jpg';
import ProjectWingie from '/public/images/project-floofers.jpg';
import ProjectPepehousing from '/public/images/project-tribe-hr-management.jpg';

// import AvatarKrisztian from '/public/images/avatar-krisztian.png';
// import AvatarEugen from '/public/images/avatar-eugen.png';
// import AvatarDummy from '/public/images/avatar-dummy.svg';
import AvatarMehulChopra from '/public/images/mehul-chopra.png';
import AvatarBhadraSajal from '/public/images/bhadra-sajal.png';
import AvatarMaheshShelke from '/public/images/mahesh-shelke.png';

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from '@/lib/types';

export const EXTERNAL_LINKS = {
  // GITHUB: 'https://github.com/shahsagarm',
  // GITHUB_REPO: 'https://github.com/shahsagarm/ganeshbadhe.dev',
  // TWITTER: 'https://twitter.com/shahsagarm',
  // FIGMA: 'https://www.figma.com/@shahsagarm',
  // FIGMA_FILE:
  //   'https://www.figma.com/community/file/1262992249991763120/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop',
};

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Services',
    href: '#services',
  },
  {
    label: 'Work',
    href: '#work',
  },
  {
    label: 'Testimonials',
    href: '#testimonials',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  // {
  //   icon: Github,
  //   url: 'https://github.com/shahsagarm',
  // },
  // {
  //   icon: Twitter,
  //   url: 'https://twitter.com/shahsagarm',
  // },
  {
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/ganeshbadhe-uxui/',
  },
  // {
  //   icon: Figma,
  //   url: 'https://www.figma.com/@shahsagarm',
  // },
];

export const TECHNOLOGIES: TechDetails[] = [
//   import LogoFigma from '/public/images/logos/icon-figma.svg';
// import LogoFramer from '/public/images/logos/design/framer-icon.svg';
// import LogoWebflow from '/public/images/logos/design/webflow-icon.svg';
// import LogoPhotoshop from '/public/images/logos/design/adobe-photoshop-icon.svg';
// import LogoIllustrator from '/public/images/logos/design/icons8-illustrator.svg';
// import LogoWordpress from '/public/images/logos/design/wordpress-icon.svg';
// import LogoHtml from '/public/images/logos/design/w3_html5-icon.svg';
// import LogoCss from '/public/images/logos/design/w3_css-icon.svg';
// import LogoBootstrap from '/public/images/logos/design/getbootstrap-icon.svg';
// import LogoJavascript from '/public/images/logos/icon-javascript.svg';
// import LogoSass from '/public/images/logos/icon-sass.svg';
// import LogoTailwindcss from '/public/images/logos/icon-tailwindcss.svg';
// import LogoGit from '/public/images/logos/icon-git.svg';
// import LogoGoogleanalytics from '/public/images/logos/design/google_analytics-icon.svg';
// import LogoHotjar from '/public/images/logos/design/Hotjar.svg';
// import LogoChatgpt from '/public/images/logos/design/ChatGPT_logo.svg';

  {
    label: 'Figma',
    logo: LogoFigma,
    url: 'https://www.figma.com/',
  },
  {
    label: 'Framer',
    logo: LogoFramer,
    url: 'https://www.framer.com/',
  },
  {
    label: 'Webflow',
    logo: LogoWebflow,
    url: 'https://webflow.com/',
  },
  {
    label: 'Photoshop',
    logo: LogoPhotoshop,
    url: 'https://www.adobe.com/in/products/photoshop.html',
  },
  {
    label: 'Illustrator',
    logo: LogoIllustrator,
    url: 'https://www.adobe.com/in/products/illustrator.html',
  },
  {
    label: 'WordPress',
    logo: LogoWordpress,
    url: 'https://wordpress.com/',
  },
  {
    label: 'HTML5',
    logo: LogoHtml,
    url: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5',
  },
  {
    label: 'CSS3',
    logo: LogoCss,
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    label: 'Bootstrap',
    logo: LogoBootstrap,
    url: 'https://getbootstrap.com/',
  },
  {
    label: 'Javascript',
    logo: LogoJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'Sass/Scss',
    logo: LogoSass,
    url: 'https://sass-lang.com/',
  },
  {
    label: 'Tailwindcss',
    logo: LogoTailwindcss,
    url: 'https://tailwindcss.com/',
  },
    {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
  {
    label: 'Google Analytics',
    logo: LogoGoogleanalytics,
    url: 'https://developers.google.com/analytics',
  },
  {
    label: 'Hotjar',
    logo: LogoHotjar,
    url: 'https://www.hotjar.com/',
  },
  {
    label: 'Chatgpt',
    logo: LogoChatgpt,
    url: 'https://chatgpt.com/',
  },
  
  // {
  //   label: 'Typescript',
  //   logo: LogoTypescript,
  //   url: 'https://www.typescriptlang.org/',
  // },
  // {
  //   label: 'React',
  //   logo: LogoReact,
  //   url: 'https://react.dev/',
  // },
  // {
  //   label: 'Next.js',
  //   logo: LogoNextjs,
  //   url: 'https://nextjs.org/',
  // },
  // {
  //   label: 'Node.js',
  //   logo: LogoNodejs,
  //   url: 'https://nodejs.org/en',
  // },
  // {
  //   label: 'Express.js',
  //   logo: LogoExpress,
  //   darkModeLogo: LogoExpressLight,
  //   url: 'https://expressjs.com/',
  // },
  // {
  //   label: 'Nest.js',
  //   logo: LogoNest,
  //   url: 'https://nestjs.com/',
  // },
  // {
  //   label: 'Socket.io',
  //   logo: LogoSocket,
  //   darkModeLogo: LogoSocketLight,
  //   url: 'https://socket.io/',
  // },
  // {
  //   label: 'PostgreSQL',
  //   logo: LogoPostgreSQL,
  //   url: 'https://www.postgresql.org/',
  // },
  // {
  //   label: 'MongoDB',
  //   logo: LogoMongoDB,
  //   url: 'https://www.mongodb.com/',
  // },
  // {
  //   label: 'Cypress',
  //   logo: LogoCypress,
  //   darkModeLogo: LogoCypressLight,
  //   url: 'https://www.cypress.io/',
  // },
  // {
  //   label: 'Storybook',
  //   logo: LogoStorybook,
  //   url: 'https://storybook.js.org/',
  // },

];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoUpwork,
    logoAlt: 'Upwork logo',
    position: 'Design Consultant | UI/UX Design',
    startDate: new Date(2021, 0),
    currentlyWorkHere: true,
    summary: [
      'Offering startup consulting, user experience optimization for digital products, and business outcomes.',
'Conducted design sprints for MVPs, accelerating time-to-market by 25%.',
'Designed user-centric prototypes, enhancing feature adoption rates.',
    ],
  },
  {
    logo: LogoFloofers,
    darkModeLogo: LogoFloofersLight,
    logoAlt: 'Floofers logo',
    position: 'UX/UI (Design + HTML) Consultant',
    startDate: new Date(2022, 5),
    endDate: new Date(2023, 3),
    summary: [
      'Floofers connects pet parents with trusted sitters and walkers.',
      'Improved user experience, cutting 35% of booking drop-offs.',
'Designed a simplified onboarding sitter process to boost sitter sign-ups by 40%.',
'Designed a real-time chat tool to enhance pet parent-sitter communication.',
'Worked with the development team to ensure pixel-perfect UI deployment.',
    ],
  },
  {
    logo: LogoDotnpixel,
    darkModeLogo: LogoDotnpixelLight,
    logoAlt: 'Greyatom logo',
    position: 'Sr. UI/UX Designer',
    startDate: new Date(2017, 1),
    endDate: new Date(2020, 11),
    summary: [
      'Designed end-to-end Learning Management System, improved user retention by 30%.',
'Created interactive dashboards for tracking student performance to enhance engagement.',
'Designed brand & marketing assets, boosting paid course conversion rates by 20%.',
    
    ],
  },
  {
    logo: LogoInteractiveintelligence,
    darkModeLogo: LogoInteractiveintelligenceLight,
    logoAlt: 'Interactive Intelligence (NASDAQ : ININ) logo',
    position: 'UI/UX Designer',
    startDate: new Date(2017, 1),
    endDate: new Date(2020, 11),
    summary: [
      'Worked on the cloud platform. Designed several features like some part of chat system, ticketing etc. Also worked on the mobile app for experience.',
    ],
  },
//     {
//     logo: LogoDotnpixel,
//     darkModeLogo: LogoDotnpixelLight,
//     logoAlt: 'Customer360 logo',
//     position: 'UI Designer',
//     startDate: new Date(2013, 7),
//     endDate: new Date(2015, 10),
//     summary: [
//       'Designed multi-platform support system, reducing ticket resolution time15%.',
// 'Worked on live chat and ticketing system used by Fortune 500 companies.',
// 'Created high-fidelity prototypes and front-end performance optimization.',
// 'Built brand identity assets, enhancing user trust and engagement.',
// 'Developed responsive UI components, resulting in boost in user satisfaction scores.',
//     ],
//   },
//   {
//     logo: LogoDotnpixel,
//     darkModeLogo: LogoDotnpixelLight,
//     logoAlt: 'Anveshan Technologies logo',
//     position: 'Sr. Web Designer',
//     startDate: new Date(2011, 10),
//     endDate: new Date(2013, 6),
//     summary: [
//       'Designed SEO-friendly, responsive web interfaces and landing pages for conversions.',
//     ],
//   },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'Floofers — UX Case Study',
    description:
      'A pet-care platform connecting owners with trusted sitters and walkers. This case study covers user research and ideation, identifying pain points, creating personas, and designing intuitive, trustworthy solutions.',
    url: 'https://www.behance.net/gallery/165610159/Floofers-UX-case-study-User-research-Ideation',
    previewImage: ProjectWingie,
    technologies: [
      'UX Design',
      'User Research',
      'Persona Development',
      'Journey Mapping',
      'Ideation & Wireframing',
      'Interaction Design',
      'Styled Components',
      'Handlebars',
      'HTML5',
      'SCSS',
    ],
  },
  {
    name: 'Greyatom',
    description:
      'GreyAtom is an educational technology company, specialising in industry-relevant programs in emerging technologies. The programs train learners beyond theory, focusing strongly on acquiring knowledge through application and practice.',
    url: 'https://ganeshbadhe.medium.com/ux-analysis-dashboard-for-course-managers-cff0d7f16550',
    previewImage: ProjectFiskil,
    technologies: [
      'UX Design',
      'UI Design',
      'Dashboard Design',
      'Persona Development',
      'Ideation & Wireframing',
      'Interaction Design',
      'HTML5',
      'SCSS',
    ],
  },
  {
    name: 'Tribe — Human Resource Management System',
    description:
      'A user-friendly HR management system designed to streamline employee workflows, onboarding, and performance tracking.',
    url: 'https://www.behance.net/gallery/164961007/Human-Resource-Management-System',
    previewImage: ProjectPepehousing,
    technologies: [
      'Interaction Design',
      'Dashboard Design',
      'Employee Onboarding',
      'Performance Tracking',
      'UX/UI Design',
      'Information Architecture',
    ],
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: 'Mehul Chopra',
    personAvatar: AvatarMehulChopra,
    title: 'Chief Programmer - Slowathon.com',
    testimonial:
      'Ganesh is a great choice for projects that need to design complex interfaces. He is very good at UI/UX and is also creative, clear, and good at solving problems, which makes him a great addition to any team.',
  },
  {
    personName: 'Bhadra Sajal',
    personAvatar: AvatarBhadraSajal,
    title: 'Founder & CEO - BSB International Career PVT LTD',
    testimonial:
      'It was great to work with Ganesh. He really wants the project to succeed and brought a lot of great Design skills to the table, making the design process smooth.',
  },
    {
    personName: 'Mahesh Shelke',
    personAvatar: AvatarMaheshShelke,
    title: 'Tech Lead at Vayana',
    testimonial:
      'Working with Ganesh is a joy. He is skilled in User Interface, Visual Design, HTML, CSS, SCSS and Graphic Design, with an analytical approach and intelligent solutions. Ganesh excels in creative problem-solving and strategic UI/UX development.',
  },
];
