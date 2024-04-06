import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    title: 'Our Blog',
    loadComponent: () =>
      import('./pages/blog-home/blog-home.component').then(
        mod => mod.BlogHomeComponent
      ),
  },
  {
    path: 'detail/:id',
    title: 'Blog Post',
    loadComponent: () =>
      import('./pages/blog-detail/blog-detail.component').then(
        mod => mod.BlogDetailComponent
      ),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
