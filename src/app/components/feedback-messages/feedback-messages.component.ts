import { Component } from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FeedbackMessagesService } from '../../services/feedback-messages.service';

@Component({
  selector: 'app-feedback-messages',
  standalone: true,
  imports: [NgbAlertModule],
  templateUrl: './feedback-messages.component.html',
  styleUrl: './feedback-messages.component.scss',
})
export class FeedbackMessagesComponent {
  constructor(public feedbackMessagesService: FeedbackMessagesService) {}
}
