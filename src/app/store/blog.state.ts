import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Blog, BlogStateModel } from '../models/blog.model';
import { BlogAction } from './blog.action';
import { BlogService } from '../services/blog.service';
import { catchError, of, tap } from 'rxjs';
import { SortOption } from '../models/sort.model';

@State<BlogStateModel>({
  name: 'blog',
  defaults: {
    blogs: [],
    search: '',
    sortBy: SortOption.Newest,
    page: 1,
    pageSize: 20,
    collectionSize: 0,
  },
})
@Injectable()
export class BlogState {
  @Selector()
  static blogs(state: BlogStateModel): Blog[] {
    return state.blogs;
  }

  @Selector()
  static search(state: BlogStateModel): string {
    return state.search;
  }

  @Selector()
  static sortBy(state: BlogStateModel): string {
    return state.sortBy;
  }

  @Selector()
  static page(state: BlogStateModel): number {
    return state.page;
  }

  @Selector()
  static pageSize(state: BlogStateModel): number {
    return state.pageSize;
  }

  @Selector()
  static collectionSize(state: BlogStateModel): number {
    return state.collectionSize;
  }

  constructor(private blogService: BlogService) {}

  @Action(BlogAction.Get, { cancelUncompleted: true })
  getBlogs(ctx: StateContext<BlogStateModel>) {
    const { search, sortBy, page, pageSize } = ctx.getState();
    return this.blogService.getBlogs(search, sortBy, page, pageSize).pipe(
      tap(response => {
        ctx.patchState({ blogs: response, collectionSize: 100 });
      }),
      catchError(error => {
        if (error.status === 404) {
          ctx.patchState({ blogs: [] });
          return of('Not found');
        }
        return error;
      })
    );
  }

  @Action(BlogAction.SetBlogs)
  setBlogs(ctx: StateContext<BlogStateModel>, action: BlogAction.SetBlogs) {
    ctx.patchState({ blogs: action.blogs });
  }

  @Action(BlogAction.SetSearch)
  setSearch(ctx: StateContext<BlogStateModel>, action: BlogAction.SetSearch) {
    ctx.patchState({ search: action.search });
  }

  @Action(BlogAction.SetSort)
  setSort(ctx: StateContext<BlogStateModel>, action: BlogAction.SetSort) {
    ctx.patchState({ sortBy: action.sortBy });
  }

  @Action(BlogAction.SetPage)
  setPage(ctx: StateContext<BlogStateModel>, action: BlogAction.SetPage) {
    ctx.patchState({ page: action.page });
  }
}
