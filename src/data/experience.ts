export type TimelineItem = {
  type: 'Experiencia' | 'Formación';
  title: string;
  organization: string;
  period: string;
  location?: string;
  description?: string;
  logo?: string;
  logoAlt?: string;
  initials?: string;
  skills?: string[];
  project?: {
    label: string;
    href: string;
  };
};

// EDITAR AQUÍ: experiencia y formación, separadas del componente visual.
export const timeline: TimelineItem[] = [
  {
    type: 'Experiencia',
    title: 'Técnico en Infraestructura y BackOffice',
    organization: 'SPOTTER · Jornada completa',
    period: 'ago. 2024 — actualidad',
    location: 'Montevideo, Uruguay · Híbrido',
    logo: '/images/companies/spotter.jpeg',
    logoAlt: 'Logotipo de SPOTTER',
    skills: ['Python', 'Bash'],
  },
  {
    type: 'Experiencia',
    title: 'Técnico de infraestructuras',
    organization: 'ACCESSIT-Uruguay · Jornada completa',
    period: 'may. 2023 — ago. 2024',
    location: 'Montevideo, Uruguay',
    logo: '/images/companies/accessit-uruguay.jpeg',
    logoAlt: 'Logotipo de ACCESSIT-Uruguay',
    skills: ['Soporte técnico de redes', 'Resolución de incidencias'],
  },
  {
    type: 'Formación',
    title: 'Técnico en Redes y Software',
    organization: 'Escuela Superior de Informática',
    period: 'abr. 2024 — dic. 2026',
    initials: 'ESI',
  },
  {
    type: 'Formación',
    title: 'Bachiller Tecnológico en Informática',
    organization: 'Escuela Superior de Informática · ESI Buceo',
    period: 'mar. 2020 — nov. 2022',
    description: 'Proyecto final aprobado con calificación 12.',
    initials: 'ESI',
    skills: ['Linux', 'C#'],
    project: {
      label: 'Leer proyecto final',
      href: 'https://esi.edu.uy/media/recursos/Proyecto_ESI_2022.pdf',
    },
  },
];
