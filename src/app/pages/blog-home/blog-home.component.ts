import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-blog-home',
  standalone: true,
  imports: [RouterLink, NgbPaginationModule],
  templateUrl: './blog-home.component.html',
  styleUrl: './blog-home.component.scss',
})
export class BlogHomeComponent {
  page = 1;
}
