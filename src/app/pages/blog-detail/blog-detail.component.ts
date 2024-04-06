import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../models/blog.model';
import { DatePipe, TitleCasePipe } from '@angular/common';
import { filter } from 'rxjs';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [RouterLink, DatePipe, TitleCasePipe],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss',
})
export class BlogDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private blogService = inject(BlogService);

  blog!: Blog;

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
