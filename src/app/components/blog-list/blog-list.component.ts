import { Component, Input } from '@angular/core';
import { NgbDropdownModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BlogEditModalComponent } from '../blog-edit-modal/blog-edit-modal.component';
import { BlogDeleteModalComponent } from '../blog-delete-modal/blog-delete-modal.component';
import { Blog } from '../../models/blog.model';
import { RouterLink } from '@angular/router';
import { DatePipe, NgOptimizedImage, TitleCasePipe } from '@angular/common';
import { ImageFallbackDirective } from '../../directives/image-fallback.directive';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [
    RouterLink,
    NgbDropdownModule,
    DatePipe,
    TitleCasePipe,
    NgOptimizedImage,
    ImageFallbackDirective,
  ],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss',
})
export class BlogListComponent {
  @Input() blogs!: Blog[];
  @Input() isLoading = true;

  constructor(private modalService: NgbModal) {}

  onUpdateClicked(blog: Blog): void {
    const modalRef = this.modalService.open(BlogEditModalComponent);
    modalRef.componentInstance.blog = blog;
  }

  onDeleteClicked(id: string): void {
    const modalRef = this.modalService.open(BlogDeleteModalComponent);
    modalRef.componentInstance.blogId = id;
  }
}
