import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  NgbDropdownModule,
  NgbModal,
  NgbPaginationModule,
} from '@ng-bootstrap/ng-bootstrap';
import { BlogCreateModalComponent } from '../../components/blog-create-modal/blog-create-modal.component';
import { SearchBoxComponent } from '../../components/search-box/search-box.component';
import { SortSelectionComponent } from '../../components/sort-selection/sort-selection.component';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../models/blog.model';
import { BlogListComponent } from '../../components/blog-list/blog-list.component';

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
  ],
  templateUrl: './blog-home.component.html',
  styleUrl: './blog-home.component.scss',
})
export class BlogHomeComponent implements OnInit {
  private modalService = inject(NgbModal);
  private blogService = inject(BlogService);

  blogs: Blog[] = [];
  search = '';
  selectedSortOption = 'createdAt';
  page = 1;
  sortOptions = [
    {
      label: 'Newest',
      value: 'createdAt',
    },
    {
      label: 'A-Z',
      value: 'title',
    },
  ];
  pageSize = 20;
  collectionSize!: number;

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe(blogs => {
      this.blogs = blogs;
      this.collectionSize = this.blogs.length;
    });
  }

  onCreateClicked(): void {
    this.modalService.open(BlogCreateModalComponent);
  }

  onSearchChange(text: string): void {
    console.log('GET:', text);
    console.log(this.search);
  }

  onSortChange(sort: string): void {
    console.log('GET:', sort);
    console.log(this.selectedSortOption);
  }

  onPageChange(page: number): void {
    console.log(page);
    console.log(this.page);
  }
}
