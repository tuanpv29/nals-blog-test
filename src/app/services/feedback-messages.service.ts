import { Injectable } from '@angular/core';
import { Alert } from '../models/alert.model';

@Injectable({
  providedIn: 'root',
})
export class FeedbackMessagesService {
  alerts: Alert[] = [];

  add(alert: Alert): void {
    this.alerts.push(alert);
    setTimeout(() => {
      const index = this.alerts.indexOf(alert);
      if (index !== -1) {
        this.alerts.splice(index, 1);
      }
    }, 6000);
  }
}
