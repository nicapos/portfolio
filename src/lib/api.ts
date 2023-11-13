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

const api = {
  getAllProjects,
};

export default api;
