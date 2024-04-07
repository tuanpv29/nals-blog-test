import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../models/blog.model';
import { DatePipe, NgOptimizedImage, TitleCasePipe } from '@angular/common';
import { filter } from 'rxjs';
import { ImageFallbackDirective } from '../../directives/image-fallback.directive';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [
    RouterLink,
    DatePipe,
    TitleCasePipe,
    NgOptimizedImage,
    ImageFallbackDirective,
  ],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss',
})
export class BlogDetailComponent implements OnInit {
  blog!: Blog;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.blogService
      .getBlogById(id)
      .pipe(filter(blog => !!blog))
      .subscribe(blog => {
        this.blog = blog;
      });
  }
}
