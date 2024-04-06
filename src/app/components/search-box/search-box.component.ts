import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.scss',
})
export class SearchBoxComponent implements OnInit {
  @Input() search!: string;
  @Output() searchChangeEvent = new EventEmitter<string>();

  searchControl = new FormControl<string>('', { nonNullable: true });

  constructor() {
    this.searchControl.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged(), takeUntilDestroyed())
      .subscribe(value => {
        this.searchChangeEvent.emit(value);
      });
  }

  ngOnInit(): void {
    if (this.search) {
      this.searchControl.setValue(this.search);
      console.log(this.search);
    }
  }
}
