import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SegmentedControlComponent, TabItem } from './segmented-control.component';

export interface NavigationBarConfig {
  title: string;
  viewModes: TabItem[];
  activeViewMode: string;
  showTodayButton?: boolean;
  todayButtonText?: string;
  primaryButtonText?: string;
  showPrimaryButton?: boolean;
}

@Component({
  selector: 'storybook-navigation-bar',
  standalone: true,
  imports: [CommonModule, SegmentedControlComponent],
  template: `
    <div class="navigation-bar">
      <!-- Section gauche : Titre et navigation -->
      <div class="left-section">
        <h2 class="title">{{ config.title }}</h2>
        <div class="nav-buttons">
          <button 
            class="nav-button nav-button--left" 
            (click)="onPreviousClick()"
            [attr.aria-label]="'Période précédente'"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10.75 12.25L10.131 11.6312L6.894 8.375H14.5V7.125H6.894L10.131 3.8687L10.75 3.25L6.5 7L10.75 12.25Z" fill="currentColor"/>
            </svg>
          </button>
          <button 
            class="nav-button nav-button--right" 
            (click)="onNextClick()"
            [attr.aria-label]="'Période suivante'"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M5.25 3.75L5.869 4.3687L9.106 7.625H1.5V8.875H9.106L5.869 12.1312L5.25 12.75L9.5 9L5.25 3.75Z" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Section centre : Contrôle segmenté -->
      <div class="center-section">
        <storybook-segmented-control
          [tabs]="config.viewModes"
          [activeTabId]="config.activeViewMode"
          [width]="300"
          (tabChange)="onViewModeChange($event)"
        ></storybook-segmented-control>
      </div>

      <!-- Section droite : Boutons d'action -->
      <div class="right-section">
        <button 
          *ngIf="config.showTodayButton" 
          class="action-button action-button--secondary"
          (click)="onTodayClick()"
        >
          {{ config.todayButtonText || "Aujourd'hui" }}
        </button>
        
        <button 
          *ngIf="config.showPrimaryButton" 
          class="action-button action-button--primary"
          (click)="onPrimaryButtonClick()"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="button-icon">
            <circle cx="8" cy="8" r="7.25" stroke="currentColor" stroke-width="1.5"/>
            <path d="M8 4.5V11.5M4.5 8H11.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
          {{ config.primaryButtonText || 'Nouveau RDV' }}
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./navigation-bar.component.css'],
})
export class NavigationBarComponent {
  /** Configuration de la barre de navigation */
  @Input()
  config: NavigationBarConfig = {
    title: 'Juillet 2025',
    viewModes: [
      { id: 'month', label: 'Mois', icon: false },
      { id: 'week', label: 'Semaine', icon: false },
      { id: 'day', label: 'Jour', icon: false }
    ],
    activeViewMode: 'month',
    showTodayButton: true,
    todayButtonText: "Aujourd'hui",
    primaryButtonText: 'Nouveau RDV',
    showPrimaryButton: true
  };

  /** Événements */
  @Output()
  previousClick = new EventEmitter<void>();

  @Output()
  nextClick = new EventEmitter<void>();

  @Output()
  viewModeChange = new EventEmitter<TabItem>();

  @Output()
  todayClick = new EventEmitter<void>();

  @Output()
  primaryButtonClick = new EventEmitter<void>();

  onPreviousClick(): void {
    this.previousClick.emit();
  }

  onNextClick(): void {
    this.nextClick.emit();
  }

  onViewModeChange(tab: TabItem): void {
    this.config.activeViewMode = tab.id;
    this.viewModeChange.emit(tab);
  }

  onTodayClick(): void {
    this.todayClick.emit();
  }

  onPrimaryButtonClick(): void {
    this.primaryButtonClick.emit();
  }
}
