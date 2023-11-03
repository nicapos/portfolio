export type Experience = {
  title: string;
  company: string;
  startDate: string;
  endDate?: string;
  description: string | string[];
  tags: string[];
};

const workExperiences = [
  {
    title: 'Web Development Intern',
    company: 'Focus Global Inc.',
    startDate: 'May 2023',
    endDate: 'Aug 2023',
    description: [
      'Developed and maintained websites using Typescript/React for frontend and Flask for backend.',
      "Enhanced the product search functionality of focus_, the company's e-commerce website, by integrating PostgreSQL-based full-text search capabilities.",
    ],
    tags: ['reactJS', 'typescript', 'flask', 'postgreSQL', 'postman'],
  },
];

const orgExperiences = [
  {
    title: 'Associate Vice President for Research and Development',
    company: 'La Salle Computer Society',
    startDate: 'Sep 2023',
    description:
      'Part of the team responsible for providing technical services for the organization and external units, such as software development or website creation.',
    tags: ['vueJS', 'nodeJS', 'typescript', 'postgreSQL'],
  },
  {
    title: 'Associate Vice President for Research and Development',
    company: 'DLSU Electronics and Communications Engineering Society',
    startDate: 'Feb 2023',
    description: [
      'Served as the frontend lead for the organization’s website redesign project.',
      'Oversaw the UI design and prototype development for the new website, which was developed using Figma.',
    ],
    tags: ['svelte', 'typescript', 'figma'],
  },
];

export const experiences: Experience[] = [
  ...workExperiences,
  ...orgExperiences,
];
