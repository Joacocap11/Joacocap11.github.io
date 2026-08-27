import {
  siAsterisk,
  siCss,
  siDocker,
  siGit,
  siGnubash,
  siHtml5,
  siJavascript,
  siKubernetes,
  siLaravel,
  siLinux,
  siMariadb,
  siMongodb,
  siMysql,
  siPostgresql,
  siPhp,
  siPython,
  siReact,
  siSelenium,
  siTailwindcss,
  siTypescript,
  siVite,
} from 'simple-icons';
import type { SimpleIcon } from 'simple-icons';

type Skill = {
  name: string;
  icon?: SimpleIcon;
  image?: string;
  monogram?: string;
  brand?: string;
};

type SkillGroup = {
  title: string;
  code: string;
  skills: Skill[];
};

// EDITAR AQUÍ: categorías y tecnologías. Cada tecnología usa su icono oficial.
export const skillGroups: SkillGroup[] = [
  {
    title: 'Lenguajes',
    code: '01',
    skills: [
      { name: 'Python', icon: siPython },
      { name: 'Java', image: '/images/tech/java-original.svg', brand: '#E76F00' },
      { name: 'C#', image: '/images/tech/csharp-original.svg', brand: '#512BD4' },
      { name: 'PHP', icon: siPhp },
      { name: 'JavaScript', icon: siJavascript },
      { name: 'TypeScript', icon: siTypescript },
      { name: 'Bash', icon: siGnubash },
    ],
  },
  {
    title: 'Frontend',
    code: '02',
    skills: [
      { name: 'HTML', icon: siHtml5 },
      { name: 'CSS', icon: siCss },
      { name: 'Tailwind CSS', icon: siTailwindcss },
      { name: 'Vite', icon: siVite },
    ],
  },
  {
    title: 'Frameworks y librerías',
    code: '03',
    skills: [
      { name: 'Laravel', icon: siLaravel },
      { name: 'React', icon: siReact },
    ],
  },
  {
    title: 'Bases de datos',
    code: '04',
    skills: [
      { name: 'PostgreSQL', icon: siPostgresql },
      { name: 'MySQL', icon: siMysql },
      { name: 'MongoDB', icon: siMongodb },
      { name: 'SQL Server', image: '/images/tech/microsoftsqlserver-original.svg', brand: '#CC2927' },
      { name: 'MariaDB', icon: siMariadb },
    ],
  },
  {
    title: 'Testing / Automatización',
    code: '05',
    skills: [
      { name: 'Selenium', icon: siSelenium },
    ],
  },
  {
    title: 'DevOps / Herramientas',
    code: '06',
    skills: [
      { name: 'Git', icon: siGit },
      { name: 'Linux', icon: siLinux },
      { name: 'Docker', icon: siDocker },
      { name: 'Kubernetes', icon: siKubernetes },
    ],
  },
  {
    title: 'Telefonía / VoIP',
    code: '07',
    skills: [
      { name: 'Asterisk', icon: siAsterisk },
    ],
  },
];
