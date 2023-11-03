export type SkillGroupType = {
  title: string;
  tags: string[];
};

export const skills: SkillGroupType[] = [
  {
    title: 'languages',
    tags: ['python', 'javascript', 'typescript', 'java', 'sql'],
  },
  {
    title: 'frontend development',
    tags: ['html3', 'css3', 'reactJS', 'nextJS', 'vueJS', 'tailwindCSS'],
  },
  {
    title: 'backend development',
    tags: ['nodeJS', 'expressJS', 'flask', 'fastAPI', 'postgreSQL', 'mongoDB'],
  },
  {
    title: 'devops and deployment',
    tags: ['github actions', 'vercel', 'aws lambda'],
  },
  {
    title: 'data analysis',
    tags: ['numpy', 'pandas'],
  },
  {
    title: 'others',
    tags: ['git', 'postman', 'figma'],
  },
];
