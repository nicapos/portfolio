import { getDocs, collection, query, where, orderBy } from 'firebase/firestore';
import { db } from '../../firebase';

export type Project = {
  title: string;
  description?: string;
  tags?: string[];
  cover_image?: string;
  repo_url?: string;
  deploy_url?: string;
};

const getAllProjects = async (): Promise<Project[]> => {
  try {
    const collectionRef = collection(db, 'projects');
    const q = query(
      collectionRef,
      where('show_flag', '==', true),
      orderBy('order')
    );
    const querySnapshot = await getDocs(q);

    const projects: Project[] = querySnapshot.docs.map(
      (doc) => doc.data() as Project
    );

    return projects;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

type ExperienceType = 'work' | 'org';

export type Experience = {
  title: string;
  company?: string;
  start_date?: string;
  end_date?: string;
  descriptions?: string[];
  tags?: string[];
  type?: ExperienceType;
};

const getExperiencesByType = async (
  type: ExperienceType
): Promise<Experience[]> => {
  try {
    const collectionRef = collection(db, 'experiences');
    const q = query(
      collectionRef,
      where('show_flag', '==', true),
      where('type', '==', type)
    );
    const querySnapshot = await getDocs(q);

    const experiences: Experience[] = querySnapshot.docs.map(
      (doc) => doc.data() as Experience
    );

    return experiences;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

type SkillGroup = {
  title: string;
  skills: string[];
};

const getAllSkillGroups = async (): Promise<SkillGroup[]> => {
  try {
    const collectionRef = collection(db, 'skill_groups');
    const q = query(
      collectionRef,
      where('show_flag', '==', true),
      orderBy('order')
    );
    const querySnapshot = await getDocs(q);

    const skillGroups: SkillGroup[] = querySnapshot.docs.map(
      (doc) => doc.data() as SkillGroup
    );

    return skillGroups;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

const api = {
  getAllProjects,
  getExperiencesByType,
  getAllSkillGroups,
};

export default api;
