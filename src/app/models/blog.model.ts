import { FormControl } from '@angular/forms';

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
