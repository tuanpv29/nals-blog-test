import { Component, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BlogFormComponent } from '../blog-form/blog-form.component';
import { BlogFormValue } from '../../models/blog.model';

@Component({
  selector: 'app-blog-create-modal',
  standalone: true,
  imports: [BlogFormComponent],
  templateUrl: './blog-create-modal.component.html',
  styleUrl: './blog-create-modal.component.scss',
})
export class BlogCreateModalComponent {
  activeModal = inject(NgbActiveModal);
  blogFormValue!: BlogFormValue;

  onValueChange(value: BlogFormValue): void {
    this.blogFormValue = value;
  }

  onCreateDialog(): void {
    console.log('CREATE:', this.blogFormValue);
    this.activeModal.close();
  }
}
