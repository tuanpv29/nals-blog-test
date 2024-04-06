import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BlogFormComponent } from '../blog-form/blog-form.component';
import { Blog, BlogFormValue } from '../../models/blog.model';
import { Store } from '@ngxs/store';
import { BlogAction } from '../../store/blog.action';
import { FeedbackMessagesService } from '../../services/feedback-messages.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-blog-edit-modal',
  standalone: true,
  imports: [BlogFormComponent],
  templateUrl: './blog-edit-modal.component.html',
  styleUrl: './blog-edit-modal.component.scss',
})
export class BlogEditModalComponent {
  @Input() blog!: Blog;
  blogFormValue!: BlogFormValue;
  isLoading = false;

  constructor(
    public activeModal: NgbActiveModal,
    private store: Store,
    private feedbackMessagesService: FeedbackMessagesService
  ) {}

  onValueChange(value: BlogFormValue): void {
    this.blogFormValue = value;
  }

  onUpdateBlog(): void {
    this.isLoading = true;
    const updatedBlog: Blog = { ...this.blog, ...this.blogFormValue };
    this.store
      .dispatch(new BlogAction.Edit(updatedBlog))
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe({
        next: () => {
          this.feedbackMessagesService.add({
            type: 'success',
            message: 'Blog successfully updated!',
          });
          this.activeModal.close();
        },
        error: error => {
          this.feedbackMessagesService.add({
            type: 'danger',
            message: error,
          });
        },
      });
  }
}
