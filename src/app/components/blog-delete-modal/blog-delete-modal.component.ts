import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BlogService } from '../../services/blog.service';
import { Store } from '@ngxs/store';
import { BlogAction } from '../../store/blog.action';
import { FeedbackMessagesService } from '../../services/feedback-messages.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-blog-delete-modal',
  standalone: true,
  imports: [],
  templateUrl: './blog-delete-modal.component.html',
  styleUrl: './blog-delete-modal.component.scss',
})
export class BlogDeleteModalComponent {
  @Input() blogId!: string;

  isLoading = false;

  constructor(
    public activeModal: NgbActiveModal,
    private blogService: BlogService,
    private store: Store,
    private feedbackMessagesService: FeedbackMessagesService
  ) {}

  onDeleteBlog(): void {
    this.isLoading = true;
    this.blogService
      .deleteBlog(this.blogId)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe({
        next: () => {
          this.feedbackMessagesService.add({
            type: 'success',
            message: 'Blog successfully deleted!',
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
