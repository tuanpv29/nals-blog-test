import { FormControl } from '@angular/forms';
import { SortOption } from './sort.model';

export interface Blog {
  id: string;
  title: string;
  content: string;
  image: string;
  createdAt: string;
}

export interface BlogForm {
  title: FormControl<string>;
  content: FormControl<string>;
  image: FormControl<string>;
}

export type BlogFormValue = Partial<{
  title: string;
  content: string;
  image: string;
}>;

export interface BlogStateModel {
  blogs: Blog[];
  search: string;
  sortBy: SortOption;
  page: number;
  pageSize: number;
  collectionSize: number;
  isLoading: boolean;
}
