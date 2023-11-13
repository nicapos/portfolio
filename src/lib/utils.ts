import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(...classes));
}

export function splitArray<T>(arr: T[], countSlices: number): T[][] {
  const slicedArrays: T[][] = [];

  for (let i = 0; i < countSlices; i++) {
    const slice: T[] = [];
    for (let j = i; j < arr.length; j += countSlices) {
      slice.push(arr[j]);
    }
    slicedArrays.push(slice);
  }

  return slicedArrays;
}
