import { Component, Input, OnInit, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BlogFormComponent } from '../blog-form/blog-form.component';
import { Blog, BlogFormValue } from '../../models/blog.model';

@Component({
  selector: 'app-blog-edit-modal',
  standalone: true,
  imports: [BlogFormComponent],
  templateUrl: './blog-edit-modal.component.html',
  styleUrl: './blog-edit-modal.component.scss',
})
export class BlogEditModalComponent implements OnInit {
  activeModal = inject(NgbActiveModal);
  @Input() blog!: Blog;
  blogFormValue!: BlogFormValue;

  ngOnInit(): void {
    console.log(this.blog);
  }

  onValueChange(value: BlogFormValue): void {
    this.blogFormValue = value;
  }

  onUpdateBlog(): void {
    const updatedBlog = { ...this.blog, ...this.blogFormValue };
    console.log('PUT:', updatedBlog);
    this.activeModal.close();
  }
}
