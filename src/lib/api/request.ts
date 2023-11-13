import { getDocs, Query, DocumentData } from 'firebase/firestore';

export const fetchData = async <T>(
  query: Query<DocumentData>
): Promise<T[]> => {
  try {
    const querySnapshot = await getDocs(query);
    const data = querySnapshot.docs.map((doc) => doc.data() as T);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};
