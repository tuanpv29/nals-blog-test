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
  @Input() blogId!: number;
  activeModal = inject(NgbActiveModal);
  foundBlog!: Blog;
  blogFormValue!: BlogFormValue;

  ngOnInit(): void {
    console.log('GET', this.blogId);
    this.foundBlog = {
      createdAt: '2024-04-05T07:00:32.685Z',
      title: 'createfrompostman new',
      image: 'https://loremflickr.com/640/480/transport',
      content: 'test create blog from postman',
      id: '297',
    };
  }

  onValueChange(value: BlogFormValue): void {
    this.blogFormValue = value;
  }

  onUpdateBlog(): void {
    const updatedBlog = { ...this.foundBlog, ...this.blogFormValue };
    console.log('PUT:', updatedBlog);
    this.activeModal.close();
  }
}
