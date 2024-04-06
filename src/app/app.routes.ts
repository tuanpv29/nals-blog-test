import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/blog-home/blog-home.component').then(
        mod => mod.BlogHomeComponent
      ),
  },
  {
    path: 'detail/:id',
    loadComponent: () =>
      import('./pages/blog-detail/blog-detail.component').then(
        mod => mod.BlogDetailComponent
      ),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
