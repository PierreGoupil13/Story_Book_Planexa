import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'storybook-dropdown',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dropdown-container" *ngIf="isOpen">
      <div class="dropdown-list">
        <div 
          *ngFor="let item of items; trackBy: trackByFn" 
          class="dropdown-item"
          (click)="selectItem(item)"
          [class.selected]="item === selectedItem">
          {{ item }}
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent {
  /** Liste des éléments à afficher */
  @Input()
  items: string[] = [];

  /** État ouvert/fermé */
  @Input()
  isOpen: boolean = false;

  /** Élément sélectionné */
  @Input()
  selectedItem?: string;

  /** Événement quand un élément est sélectionné */
  @Output()
  itemSelected = new EventEmitter<string>();

  /** Événement pour fermer le dropdown */
  @Output()
  closeDropdown = new EventEmitter<void>();

  selectItem(item: string): void {
    this.selectedItem = item;
    this.itemSelected.emit(item);
    this.closeDropdown.emit();
  }

  trackByFn(index: number, item: string): string {
    return item;
  }
}
