import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbAlertModule, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgbAlertModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'nals-blog-test';

  constructor(private ngbModalConfig: NgbModalConfig) {
    ngbModalConfig.centered = true;
  }
}
