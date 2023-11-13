import { getAllProjects, Project } from './projects';
import { getExperiencesByType, Experience } from './experiences';
import { getAllSkillGroups, SkillGroup } from './skills';

export type { Project, Experience, SkillGroup };

const api = {
  getAllProjects,
  getExperiencesByType,
  getAllSkillGroups,
};

export default api;
