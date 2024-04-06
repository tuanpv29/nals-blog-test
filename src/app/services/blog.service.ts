import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from '../models/blog.model';
import { Observable, tap } from 'rxjs';
import { SortOption } from '../models/sort.model';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private url = 'https://5f55a98f39221c00167fb11a.mockapi.io/blogs';

  constructor(private http: HttpClient) {}

  getBlogs(
    search: string,
    sortBy: SortOption,
    page: number,
    limit: number
  ): Observable<Blog[]> {
    let params = new HttpParams();
    if (search) {
      params = params.append('search', search);
    }
    if (sortBy) {
      switch (sortBy) {
        case SortOption.Alphabet:
          params = params.append('sortBy', 'title');
          params = params.append('order', 'asc');
          break;
        case SortOption.Newest:
        default:
          params = params.append('sortBy', 'createdAt');
          params = params.append('order', 'desc');
          break;
      }
    }
    if (page) {
      params = params.append('page', page);
    }
    if (limit) {
      params = params.append('limit', limit);
    }
    return this.http.get<Blog[]>(`${this.url}`, {
      params,
    });
  }

  getBlogById(id: string): Observable<Blog> {
    return this.http.get<Blog>(`${this.url}/${id}`);
  }

  updateBlog(blog: Blog): Observable<Blog> {
    return this.http
      .put<Blog>(`${this.url}/${blog.id}`, blog)
      .pipe(tap(res => console.log('updateBlog:', res)));
  }

  deleteBlog(id: string): Observable<unknown> {
    return this.http
      .delete(`${this.url}/${id}`)
      .pipe(tap(res => console.log('deleteBlog:', res)));
  }
}
