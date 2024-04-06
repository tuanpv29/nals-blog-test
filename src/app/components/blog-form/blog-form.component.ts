import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Blog, BlogForm, BlogFormValue } from '../../models/blog.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-blog-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './blog-form.component.html',
  styleUrl: './blog-form.component.scss',
})
export class BlogFormComponent implements OnInit {
  @Input() blog!: Blog;
  @Output() valueChangeEvent = new EventEmitter<BlogFormValue>();

  blogForm = new FormGroup<BlogForm>({
    title: new FormControl<string>('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    content: new FormControl<string>('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    image: new FormControl<string>('', {
      nonNullable: true,
      validators: Validators.required,
    }),
  });

  constructor() {
    this.observeValueChange();
  }

  get isInvalidForm(): boolean {
    return this.blogForm.invalid;
  }

  ngOnInit(): void {
    if (this.blog) {
      const { title, content, image } = this.blog;
      this.blogForm.patchValue({
        title,
        content,
        image,
      });
    }
  }

  private observeValueChange(): void {
    this.blogForm.valueChanges.pipe(takeUntilDestroyed()).subscribe(value => {
      this.valueChangeEvent.emit(value);
    });
  }
}
