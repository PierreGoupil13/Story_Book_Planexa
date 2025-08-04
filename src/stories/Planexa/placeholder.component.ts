import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'storybook-input-field',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="input-field-container">
      <!-- Label -->
      <label *ngIf="label && showLabel" class="input-label" [for]="inputId">
        {{ label }}
      </label>
      
      <!-- Input container avec icônes -->
      <div class="input-wrapper">
        <!-- Icône de gauche -->
        <div *ngIf="leftIcon" class="input-icon left-icon">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 8C9.65685 8 11 6.65685 11 5C11 3.34315 9.65685 2 8 2C6.34315 2 5 3.34315 5 5C5 6.65685 6.34315 8 8 8Z" fill="#6B7280"/>
            <path d="M8 9C5.23858 9 3 11.2386 3 14H13C13 11.2386 10.7614 9 8 9Z" fill="#6B7280"/>
          </svg>
        </div>
        
        <!-- Input field -->
        <input 
          [id]="inputId"
          class="input-field"
          [class.no-border]="!showBorder"
          [type]="type"
          [placeholder]="placeholder"
          [value]="value"
          [disabled]="disabled"
          [readonly]="readonly"
          (input)="onInput($event)"
          (focus)="onFocus($event)"
          (blur)="onBlur($event)"
        />
        
        <!-- Icône de droite (dropdown) -->
        <div *ngIf="rightIcon" class="input-icon right-icon" (click)="onDropdownClick()">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 6L8 10L12 6" stroke="#6B7280" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      
      <!-- Supporting text -->
      <p *ngIf="supportingText && showSupportingText" class="supporting-text">
        {{ supportingText }}
      </p>
    </div>
  `,
  styleUrls: ['./placeholder.component.css'],
})
export class PlaceholderComponent {
  /** Label au-dessus du champ */
  @Input()
  label: string = 'Input title';

  /** Texte placeholder dans l'input */
  @Input()
  placeholder: string = 'Placeholder';

  /** Texte de support en dessous */
  @Input()
  supportingText: string = 'Supporting text';

  /** Afficher ou masquer le label */
  @Input()
  showLabel: boolean = true;

  /** Afficher ou masquer le texte de support */
  @Input()
  showSupportingText: boolean = true;

  /** Afficher ou masquer la bordure de l'input */
  @Input()
  showBorder: boolean = true;

  /** Valeur du champ */
  @Input()
  value: string = '';

  /** Type d'input */
  @Input()
  type: string = 'text';

  /** État désactivé */
  @Input()
  disabled: boolean = false;

  /** État lecture seule */
  @Input()
  readonly: boolean = false;

  /** Afficher l'icône de gauche */
  @Input()
  leftIcon: boolean = true;

  /** Afficher l'icône de droite (dropdown) */
  @Input()
  rightIcon: boolean = true;

  /** ID unique pour l'input */
  @Input()
  inputId: string = 'input-' + Math.random().toString(36).substr(2, 9);

  /** Événements */
  @Output()
  valueChange = new EventEmitter<string>();

  @Output()
  inputFocus = new EventEmitter<Event>();

  @Output()
  inputBlur = new EventEmitter<Event>();

  @Output()
  dropdownClick = new EventEmitter<void>();

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.valueChange.emit(this.value);
  }

  onFocus(event: Event): void {
    this.inputFocus.emit(event);
  }

  onBlur(event: Event): void {
    this.inputBlur.emit(event);
  }

  onDropdownClick(): void {
    this.dropdownClick.emit();
  }
}
