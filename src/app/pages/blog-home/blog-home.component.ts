import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  NgbDropdownModule,
  NgbModal,
  NgbPaginationModule,
} from '@ng-bootstrap/ng-bootstrap';
import { BlogCreateModalComponent } from '../../components/blog-create-modal/blog-create-modal.component';
import { BlogEditModalComponent } from '../../components/blog-edit-modal/blog-edit-modal.component';
import { BlogDeleteModalComponent } from '../../components/blog-delete-modal/blog-delete-modal.component';

@Component({
  selector: 'app-blog-home',
  standalone: true,
  imports: [RouterLink, NgbPaginationModule, NgbDropdownModule],
  templateUrl: './blog-home.component.html',
  styleUrl: './blog-home.component.scss',
})
export class BlogHomeComponent {
  private modalService = inject(NgbModal);

  page = 1;
  blogs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  onCreateClicked(): void {
    this.modalService.open(BlogCreateModalComponent);
  }

  onUpdateClicked(): void {
    this.modalService.open(BlogEditModalComponent);
  }

  onDeleteClicked(): void {
    this.modalService.open(BlogDeleteModalComponent);
  }
}
