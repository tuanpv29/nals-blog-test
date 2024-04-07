import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: 'img[appImageFallback]',
  standalone: true,
})
export class ImageFallbackDirective {
  fallbackUrl = 'https://placehold.co/600x400.png?text=Not+Found';

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  @HostListener('error')
  errorHandler(): void {
    this.handleErrorImage();
  }

  private handleErrorImage(): void {
    const currentImage = this.el.nativeElement;
    this.renderer.setAttribute(currentImage, 'src', this.fallbackUrl);
  }
}
