import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCreateModalComponent } from './blog-create-modal.component';

describe('BlogCreateModalComponent', () => {
  let component: BlogCreateModalComponent;
  let fixture: ComponentFixture<BlogCreateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogCreateModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BlogCreateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
