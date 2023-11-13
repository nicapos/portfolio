import { getAllProjects, Project } from './services/projects';
import { getExperiencesByType, Experience } from './services/experiences';
import { getAllSkillGroups, SkillGroup } from './services/skills';

export type { Project, Experience, SkillGroup };

const api = {
  getAllProjects,
  getExperiencesByType,
  getAllSkillGroups,
};

export default api;
