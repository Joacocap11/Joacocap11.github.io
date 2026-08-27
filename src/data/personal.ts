// EDITAR AQUÍ: toda la información personal y los enlaces del portfolio.
export const personal = {
  name: 'Joaquín Trujillo',
  initials: 'JT',
  role: 'Técnico en Infraestructura y BackOffice',
  eyebrow: 'Infraestructura · BackOffice · Desarrollo',
  intro:
    'Trabajo con infraestructura, soporte BackOffice y desarrollo de soluciones tecnológicas claras, eficientes y orientadas a problemas reales.',
  about: [
    'Soy técnico en Infraestructura y BackOffice, con conocimientos de programación, bases de datos y herramientas para construir y mantener soluciones tecnológicas sólidas.',
    'Este portfolio está en construcción: pronto sumaré más información sobre mi recorrido, enfoque de trabajo y los desafíos que me interesa resolver.',
  ],
  location: 'Uruguay',
  availability: 'Disponible para nuevas oportunidades',
  image: '/images/profile.png',
  email: 'joaquin.d.trujillo@gmail.com', 
  github: 'https://github.com/joacocap11',
  linkedin: 'https://www.linkedin.com/in/joaquin-trujillo-7269291ab/',
  cv: '', // TODO: agregar PDF en public/cv/ y completar, por ejemplo: /cv/joaquin-trujillo.pdf
  canonicalUrl: '', // TODO: completar cuando el sitio tenga dominio público
} as const;

export const navigation = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Skills', href: '#skills' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Contacto', href: '#contacto' },
] as const;
