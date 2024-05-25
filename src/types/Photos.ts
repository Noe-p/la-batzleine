import { FILTERS } from '@/data/photos';

export interface Photo {
  id: string;
  filters: FILTERS[];
  src: string;
  name: string;
  alt: string;
  description: string;
}
