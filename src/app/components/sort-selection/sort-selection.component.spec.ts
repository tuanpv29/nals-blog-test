import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortSelectionComponent } from './sort-selection.component';

describe('SortSelectionComponent', () => {
  let component: SortSelectionComponent;
  let fixture: ComponentFixture<SortSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortSelectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SortSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
