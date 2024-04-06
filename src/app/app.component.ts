import {
  Component,
  ComponentFactoryResolver,
  ViewContainerRef,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { FeedbackMessagesComponent } from './components/feedback-messages/feedback-messages.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FeedbackMessagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'nals-blog-test';

  constructor(
    public ngbModalConfig: NgbModalConfig,
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef
  ) {
    ngbModalConfig.centered = true;
    ngbModalConfig.backdrop = 'static';
    this.appendToBody();
  }

  private appendToBody() {
    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(
        FeedbackMessagesComponent
      );
    const componentRef =
      this.viewContainerRef.createComponent(componentFactory);
    document.body.appendChild(componentRef.location.nativeElement);
  }
}
