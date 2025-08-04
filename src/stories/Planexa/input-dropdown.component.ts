import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PlaceholderComponent } from './placeholder.component';
import { DropdownComponent } from './dropdown.component';

@Component({
  selector: 'storybook-input-dropdown',
  standalone: true,
  imports: [CommonModule, PlaceholderComponent, DropdownComponent],
  template: `
    <div class="input-dropdown-wrapper">
      <!-- Label -->
      <label *ngIf="label" class="input-label">{{ label }}</label>
      
      <!-- Input field avec dropdown positionné juste en dessous -->
      <div class="input-field-container">
        <storybook-input-field
          [label]="''"
          [placeholder]="placeholder"
          [supportingText]="''"
          [value]="selectedValue"
          [rightIcon]="rightIcon"
          [leftIcon]="leftIcon"
          [showBorder]="showBorder"
          [readonly]="true"
          (dropdownClick)="toggleDropdown()"
        >
        </storybook-input-field>
        
        <storybook-dropdown
          [isOpen]="dropdownOpen"
          [items]="options"
          [selectedItem]="selectedValue"
          (itemSelected)="onItemSelected($event)"
          (closeDropdown)="closeDropdown()"
        >
        </storybook-dropdown>
      </div>
      
      <!-- Supporting text en bas -->
      <p *ngIf="supportingText && showSupportingText" class="supporting-text">{{ supportingText }}</p>
    </div>
  `,
  styles: [`
    .input-dropdown-wrapper {
      max-width: 368px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    }
    
    .input-label {
      font-size: 14px;
      font-weight: 500;
      color: #111827;
      margin: 0 0 8px 0;
      display: block;
      line-height: 1.4;
    }
    
    .input-field-container {
      position: relative;
      margin-bottom: 0;
    }
    
    .supporting-text {
      font-size: 12px;
      color: #6B7280;
      margin: 0;
      line-height: 1.4;
    }
  `],
})
export class InputDropdownComponent {
  /** Label du champ */
  @Input()
  label: string = 'Select option';

  /** Placeholder */
  @Input()
  placeholder: string = 'Choose an option';

  /** Texte de support */
  @Input()
  supportingText: string = 'Click the arrow to expand';

  /** Options du dropdown */
  @Input()
  options: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  /** Afficher l'icône de gauche */
  @Input()
  leftIcon: boolean = true;

  /** Afficher l'icône de droite (dropdown) */
  @Input()
  rightIcon: boolean = true;

  /** Valeur sélectionnée */
  @Input()
  selectedValue: string = '';

  /** Afficher ou masquer le texte de support */
  @Input()
  showSupportingText: boolean = true;

  /** Afficher ou masquer la bordure de l'input */
  @Input()
  showBorder: boolean = true;

  /** Largeur du composant (optionnelle) */
  @Input()
  width?: number;

  /** État du dropdown */
  dropdownOpen: boolean = false;

  /** Événement de sélection */
  @Output()
  selectionChange = new EventEmitter<string>();

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
    console.log('Dropdown toggled:', this.dropdownOpen); // Debug
  }

  closeDropdown(): void {
    this.dropdownOpen = false;
  }

  onItemSelected(item: string): void {
    this.selectedValue = item;
    this.selectionChange.emit(item);
    console.log('Item selected:', item); // Debug
  }
}
