import { Component, Input, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-blog-delete-modal',
  standalone: true,
  imports: [],
  templateUrl: './blog-delete-modal.component.html',
  styleUrl: './blog-delete-modal.component.scss',
})
export class BlogDeleteModalComponent {
  activeModal = inject(NgbActiveModal);

  @Input() blogId!: number;

  onDeleteBlog(): void {
    console.log('DELETE:', this.blogId);
    this.activeModal.close();
  }
}
