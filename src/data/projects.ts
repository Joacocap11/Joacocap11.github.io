export type Project = {
  name: string;
  description: string;
  technologies: string[];
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageBackground?: string;
  github?: string;
  demo?: string;
  featured?: boolean;
  status?: string;
  visualLabel?: string;
};

// Los proyectos destacados se controlan manualmente con `featured: true`.
export const projects: Project[] = [
  {
    name: 'FreePBX Docker',
    description:
      'Entorno local reproducible de FreePBX 17, Asterisk 21 y MariaDB 10.11, orquestado con Docker Compose para laboratorio, desarrollo y pruebas.',
    technologies: ['Docker', 'Docker Compose', 'FreePBX', 'Asterisk', 'MariaDB', 'Bash'],
    image: '/images/projects/freepbx.jpeg',
    imageWidth: 1280,
    imageHeight: 626,
    imageBackground: '#e9eceb',
    github: 'https://github.com/Joacocap11/FreePBXDocker',
    featured: true,
    status: 'Repositorio público',
    visualLabel: 'FREEPBX\\nDOCKER',
  },
  {
    name: 'CRUD Map Laravel MySQL',
    description:
      'Aplicación CRUD para gestionar clientes, direcciones, intercomunicadores y coordenadas geográficas sobre un mapa.',
    technologies: ['PHP', 'Laravel', 'MySQL', 'Blade', 'Tailwind CSS', 'Vite'],
    image: '/images/projects/clientes-en-mapa.jpeg',
    imageWidth: 1048,
    imageHeight: 837,
    imageBackground: '#f1f2ef',
    github: 'https://github.com/Joacocap11/CRUD-Map-Laravel-MySQL',
    featured: true,
    status: 'Repositorio público',
    visualLabel: 'CRUD MAP\\nLARAVEL',
  },
  {
    name: 'MyFinance',
    description:
      'Aplicación personal para registrar ingresos y gastos, analizar el resumen mensual, importar movimientos bancarios y administrar finanzas sin mezclar monedas.',
    technologies: ['Python', 'FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'Docker'],
    image: '/images/projects/myfinance.png',
    imageWidth: 1763,
    imageHeight: 892,
    imageBackground: '#f4f1ea',
    github: 'https://github.com/Joacocap11/MyFinance',
    featured: true,
    status: 'Repositorio público',
    visualLabel: 'MY\\nFINANCE',
  },
  {
    name: 'Trivia React',
    description:
      'Juego de trivia inspirado en “Quién quiere ser millonario”, con sistema de puntaje, temporizador y ranking local.',
    technologies: ['React', 'JavaScript', 'Vite', 'CSS'],
    image: '/images/projects/trivia-react.png',
    imageWidth: 1519,
    imageHeight: 793,
    imageBackground: '#070b18',
    github: 'https://github.com/Joacocap11/trivia-react',
    status: 'Repositorio público',
    visualLabel: 'TRIVIA\\nREACT',
  },
  {
    name: 'AudioTranscriber',
    description:
      'Aplicación de escritorio multiplataforma para transcribir audios de forma local y privada, con selección de idioma, modelos Whisper y exportación a TXT.',
    technologies: ['Python', 'OpenAI Whisper', 'PySide6', 'FFmpeg'],
    image: '/images/projects/audio-transcriber.png',
    imageWidth: 1721,
    imageHeight: 914,
    imageBackground: '#202024',
    github: 'https://github.com/Joacocap11/AudioTranscriber',
    status: 'Repositorio público',
    visualLabel: 'AUDIO\\nTRANSCRIBER',
  },
  {
    name: 'Finanzas Personales',
    description:
      'Aplicación self-hosted de finanzas personales con backend FastAPI, frontend React, PostgreSQL y un ledger contable interno.',
    technologies: ['Python', 'FastAPI', 'React', 'PostgreSQL'],
    image: '/images/projects/finanzas-personales.png',
    imageWidth: 1899,
    imageHeight: 965,
    imageBackground: '#f4f7f5',
    github: 'https://github.com/Joacocap11/FinanzasPersonales',
    status: 'Repositorio público',
    visualLabel: 'FINANZAS\\nPERSONALES',
  },
];
