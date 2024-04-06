import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sort-selection',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sort-selection.component.html',
  styleUrl: './sort-selection.component.scss',
})
export class SortSelectionComponent {
  @Output() sortChangeEvent = new EventEmitter<string>();

  @Input() selectedOption!: string;
  @Input() options: { label: string; value: string }[] = [];

  onSortChange(): void {
    this.sortChangeEvent.emit(this.selectedOption);
  }
}
