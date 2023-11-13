import { collection, query, where, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import { fetchData } from './request';

export type SkillGroup = {
  title: string;
  skills: string[];
};

const collectionRef = collection(db, 'skill_groups');

export const getAllSkillGroups = async (): Promise<SkillGroup[]> => {
  const q = query(
    collectionRef,
    where('show_flag', '==', true),
    orderBy('order')
  );
  return fetchData<SkillGroup>(q);
};
