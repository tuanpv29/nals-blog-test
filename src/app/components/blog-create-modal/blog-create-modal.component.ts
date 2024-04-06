import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BlogFormComponent } from '../blog-form/blog-form.component';
import { BlogFormValue } from '../../models/blog.model';
import { Store } from '@ngxs/store';
import { BlogAction } from '../../store/blog.action';
import { BlogService } from '../../services/blog.service';
import { FeedbackMessagesService } from '../../services/feedback-messages.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-blog-create-modal',
  standalone: true,
  imports: [BlogFormComponent],
  templateUrl: './blog-create-modal.component.html',
  styleUrl: './blog-create-modal.component.scss',
})
export class BlogCreateModalComponent {
  blogFormValue!: BlogFormValue;
  isLoading = false;

  constructor(
    public activeModal: NgbActiveModal,
    private blogService: BlogService,
    private store: Store,
    private feedbackMessagesService: FeedbackMessagesService
  ) {}

  onValueChange(value: BlogFormValue): void {
    this.blogFormValue = value;
  }

  onCreateDialog(): void {
    this.isLoading = true;
    this.blogService
      .createBlog(this.blogFormValue)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe({
        next: () => {
          this.feedbackMessagesService.add({
            type: 'success',
            message: 'Blog successfully created!',
          });
          this.store.dispatch(new BlogAction.Get());
          this.activeModal.close();
        },
        error: ({ error }) => {
          this.feedbackMessagesService.add({
            type: 'danger',
            message: error,
          });
        },
      });
  }
}
