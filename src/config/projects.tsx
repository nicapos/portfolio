export type Project = {
  title: string;
  tags: string[];
  description?: string;
  coverImageURL?: string;
  githubURL?: string;
  websiteURL?: string;
};

export const projects: Project[] = [
  {
    title: 'LashOutMNL Website',
    tags: ['vueJS', 'nodeJS', 'expressJS', 'mongoDB', 'figma'],
    description:
      'A booking website designed for Lash Out MNL Beauty Lounge, a beauty services parlor that operates at Las Piñas City.',
    coverImageURL: '/project-covers/lashoutmnl.png',
    githubURL: 'https://github.com/leimons/LashOutMNL',
    websiteURL: 'https://lashout-mnl.vercel.app/',
  },
  {
    title: 'IMDB Data Visualization',
    tags: ['nuxt', 'tailwindCSS', 'mySQL', 'vercel'],
    description:
      'A web app that displays interactive dashboards based on IMDB data.',
    githubURL: 'https://github.com/nicapos/imdb-olap-application',
    websiteURL: 'https://imdb-olap-application.vercel.app/',
  },
  {
    title: 'disqussip',
    tags: ['nodeJS', 'expressJS', 'handlebarsJS', 'mongoDB'],
    description:
      'A simple web app that allows users to create and participate in discussion forums.',
    coverImageURL: '/project-covers/disqussip.png',
    githubURL: 'https://github.com/nicapos/discussion-forum',
    websiteURL: 'https://disqussip.onrender.com/',
  },
  {
    title: 'Image Segmentation Web App',
    tags: ['python', 'numpy', 'streamlit'],
    description:
      'A web app to apply image segmentation using K-Means clustering in Python to simplify image representation.',
    coverImageURL: '/project-covers/image-segmentation.png',
    githubURL: 'https://github.com/ethansaqui/image-segmentation-web-app',
    websiteURL:
      'https://ethansaqui-digimap-web-implementation-main-tvx9l4.streamlit.app/',
  },
  {
    title: 'Decimal-32 Floating Point Converter',
    tags: ['reactJS', 'flask', 'vercel'],
    description:
      'A web-based IEEE-754 Decimal-32 floating-point converter that converts decimal and base-10 inputs into binary and hexadecimal output.',
    coverImageURL: '/project-covers/simulation-project.png',
    githubURL: 'https://github.com/nicapos/CSARCH2-Simulation-Project',
    websiteURL: 'https://simulation-project.vercel.app/',
  },
  {
    title: 'Personal Portfolio Website',
    tags: ['nextJS', 'tailwindCSS', 'typescript', 'vercel'],
    description:
      'A personal portfolio website to showcase my skills and projects.',
    githubURL: 'https://github.com/nicapos/portfolio',
  },
];
