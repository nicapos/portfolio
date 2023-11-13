import { collection, query, where } from 'firebase/firestore';
import { db } from '../../../firebase';
import { fetchData } from './request';

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

const collectionRef = collection(db, 'experiences');

export const getExperiencesByType = async (
  type: ExperienceType
): Promise<Experience[]> => {
  const q = query(
    collectionRef,
    where('show_flag', '==', true),
    where('type', '==', type)
  );
  return fetchData<Experience>(q);
};
