import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface TabItem {
  id: string;
  label: string;
  icon?: 'calendar' | 'patient' | 'hexagon' | false;
  disabled?: boolean;
}

@Component({
  selector: 'storybook-segmented-control',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="segmented-control" [style.width.px]="width">
      <div 
        *ngFor="let tab of tabs; trackBy: trackByFn; let i = index"
        class="segment"
        [class.active]="tab.id === activeTabId"
        [class.disabled]="tab.disabled"
        (click)="selectTab(tab)"
        [attr.data-testid]="'segment-' + tab.id"
      >
        <!-- Icône hexagonale -->
        <div *ngIf="tab.icon !== false" class="segment-icon">
          <!-- Icône Calendrier -->
          <svg *ngIf="tab.icon === 'calendar'" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 1V3M12 1V3M2 5H14M3 3H13C13.5523 3 14 3.44772 14 4V13C14 13.5523 13.5523 14 13 14H3C2.44772 14 2 13.5523 2 13V4C2 3.44772 2.44772 3 3 3Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="6" cy="8" r="0.5" fill="currentColor"/>
            <circle cx="10" cy="8" r="0.5" fill="currentColor"/>
            <circle cx="6" cy="11" r="0.5" fill="currentColor"/>
            <circle cx="10" cy="11" r="0.5" fill="currentColor"/>
          </svg>
          
          <!-- Icône Patient -->
          <svg *ngIf="tab.icon === 'patient'" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="4" r="2.5" stroke="currentColor" stroke-width="1.5" fill="none"/>
            <path d="M3 14C3 11.2386 5.23858 9 8 9C10.7614 9 13 11.2386 13 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M7 12H9M8 11V13" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
          </svg>
          
          <!-- Icône Hexagonale (original) -->
          <svg *ngIf="tab.icon === 'hexagon' || tab.icon === true" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8.252 4.0679L2.252 0.567901C2.17554 0.523334 2.08859 0.499756 2 0.499756C1.91141 0.499756 1.82446 0.523334 1.748 0.567901L-4.252 4.0679C-4.32754 4.11196 -4.39013 4.17496 -4.43363 4.25084C-4.47714 4.32672 -4.5 4.41254 -4.5 4.4999V11.4999C-4.5 11.5873 -4.47714 11.6732 -4.43363 11.749C-4.39013 11.8248 -4.32754 11.8879 -4.252 11.9319L1.748 15.4319C1.82446 15.4765 1.91141 15.5001 2 15.5001C2.08859 15.5001 2.17554 15.4765 2.252 15.4319L8.252 11.9319C8.32754 11.8879 8.39013 11.8248 8.43363 11.749C8.47714 11.6732 8.5 11.5873 8.5 11.4999V4.4999C8.5 4.41254 8.47714 4.32672 8.43363 4.25084C8.39013 4.17496 8.32754 4.11196 8.252 4.0679ZM2 1.5789L7.008 4.4999L2 7.4209L-3.008 4.4999L2 1.5789ZM-3.5 5.3699L1.5 8.2864V14.1299L-3.5 11.2129V5.3699ZM2.5 14.1299V8.2869L7.5 5.3704V11.2129L2.5 14.1299Z" fill="currentColor"/>
          </svg>
        </div>
        
        <!-- Label du segment -->
        <span class="segment-label">{{ tab.label }}</span>
      </div>
    </div>
  `,
  styleUrls: ['./segmented-control.component.css'],
})
export class SegmentedControlComponent {
  /** Liste des onglets */
  @Input()
  tabs: TabItem[] = [
    { id: 'segment1', label: 'Calendrier', icon: 'calendar' },
    { id: 'segment2', label: 'Patient', icon: 'patient' },
    { id: 'segment3', label: 'Hexagone', icon: 'hexagon' },
    { id: 'segment4', label: 'Sans icône', icon: false }
  ];

  /** ID de l'onglet actif */
  @Input()
  activeTabId?: string;

  /** Largeur du composant */
  @Input()
  width: number = 850;

  /** Événement de changement d'onglet */
  @Output()
  tabChange = new EventEmitter<TabItem>();

  ngOnInit() {
    // Sélectionner le premier onglet par défaut si aucun n'est actif
    if (!this.activeTabId && this.tabs.length > 0) {
      this.activeTabId = this.tabs[0].id;
    }
  }

  selectTab(tab: TabItem): void {
    if (tab.disabled) return;
    
    this.activeTabId = tab.id;
    this.tabChange.emit(tab);
  }

  trackByFn(index: number, item: TabItem): string {
    return item.id;
  }
}
