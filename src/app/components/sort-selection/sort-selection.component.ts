import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SortOption } from '../../models/sort.model';

@Component({
  selector: 'app-sort-selection',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sort-selection.component.html',
  styleUrl: './sort-selection.component.scss',
})
export class SortSelectionComponent {
  @Output() sortChangeEvent = new EventEmitter<SortOption>();

  @Input() selectedOption!: SortOption;
  options: { label: string; value: SortOption }[] = [
    {
      label: 'Newest',
      value: SortOption.Newest,
    },
    {
      label: 'A-Z',
      value: SortOption.Alphabet,
    },
  ];

  onSortChange(): void {
    this.sortChangeEvent.emit(this.selectedOption);
  }
}
