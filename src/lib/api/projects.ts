import { collection, query, where, orderBy } from 'firebase/firestore';
import { db } from '../../../firebase';
import { fetchData } from './request';

export type Project = {
  title: string;
  description?: string;
  tags?: string[];
  cover_image?: string;
  repo_url?: string;
  deploy_url?: string;
};

const collectionRef = collection(db, 'projects');

export const getAllProjects = async (): Promise<Project[]> => {
  const q = query(
    collectionRef,
    where('show_flag', '==', true),
    orderBy('order')
  );
  return fetchData<Project>(q);
};
