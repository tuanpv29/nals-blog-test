import { Component, DestroyRef, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  NgbDropdownModule,
  NgbModal,
  NgbPaginationModule,
} from '@ng-bootstrap/ng-bootstrap';
import { BlogCreateModalComponent } from '../../components/blog-create-modal/blog-create-modal.component';
import { SearchBoxComponent } from '../../components/search-box/search-box.component';
import { SortSelectionComponent } from '../../components/sort-selection/sort-selection.component';
import { Blog } from '../../models/blog.model';
import { BlogListComponent } from '../../components/blog-list/blog-list.component';
import { Select, Store } from '@ngxs/store';
import { Observable, combineLatest } from 'rxjs';
import { BlogState } from '../../store/blog.state';
import { AsyncPipe } from '@angular/common';
import { BlogAction } from '../../store/blog.action';
import { SortOption } from '../../models/sort.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-blog-home',
  standalone: true,
  imports: [
    RouterLink,
    NgbPaginationModule,
    NgbDropdownModule,
    SearchBoxComponent,
    SortSelectionComponent,
    BlogListComponent,
    AsyncPipe,
  ],
  templateUrl: './blog-home.component.html',
  styleUrl: './blog-home.component.scss',
})
export class BlogHomeComponent implements OnInit {
  @Select(BlogState.blogs) blogs$!: Observable<Blog[]>;
  @Select(BlogState.search) search$!: Observable<string>;
  @Select(BlogState.sortBy) sortBy$!: Observable<SortOption>;
  @Select(BlogState.page) page$!: Observable<number>;
  @Select(BlogState.pageSize) pageSize$!: Observable<number>;
  @Select(BlogState.collectionSize) collectionSize$!: Observable<number>;
  @Select(BlogState.isLoading) isLoading$!: Observable<boolean>;

  constructor(
    private store: Store,
    private modalService: NgbModal,
    private destroyRef: DestroyRef
  ) {}

  ngOnInit(): void {
    this.observeToGetBlogs();
  }

  onCreateClicked(): void {
    this.modalService.open(BlogCreateModalComponent);
  }

  onSearchChange(text: string): void {
    this.store.dispatch([
      new BlogAction.SetSearch(text),
      new BlogAction.SetPage(1),
    ]);
  }

  onSortChange(sortBy: SortOption): void {
    this.store.dispatch(new BlogAction.SetSort(sortBy));
  }

  onPageChange(page: number): void {
    this.store.dispatch(new BlogAction.SetPage(page));
  }

  private observeToGetBlogs(): void {
    combineLatest([this.search$, this.sortBy$, this.page$])
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.store.dispatch(new BlogAction.Get());
      });
  }
}
