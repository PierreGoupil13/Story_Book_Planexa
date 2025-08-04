import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SegmentedControlComponent, TabItem } from './segmented-control.component';
import { InputDropdownComponent } from './input-dropdown.component';

export interface UserProfile {
  name: string;
  role: string;
  avatar?: string;
}

export interface AppHeaderConfig {
  logo?: {
    text: string;
    icon?: string;
  };
  navigation: {
    tabs: TabItem[];
    activeTabId: string;
  };
  user: UserProfile;
  showSyncButton?: boolean;
}

@Component({
  selector: 'storybook-app-header',
  standalone: true,
  imports: [CommonModule, SegmentedControlComponent, InputDropdownComponent],
  template: `
    <header class="app-header">
      <!-- Logo section -->
      <div class="logo-section">
        <div class="logo">
          <!-- Logo Planexa avec icône -->
          <div class="logo-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="8" fill="url(#planexaGradient)"/>
              <path d="M10.5 13.5L16 8L21.5 13.5M16 8V24" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <defs>
                <linearGradient id="planexaGradient" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#6366F1"/>
                  <stop offset="1" stop-color="#8B5CF6"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span class="logo-text">{{ config.logo?.text || 'Planexa' }}</span>
        </div>
      </div>

      <!-- Navigation section -->
      <div class="navigation-section">
        <storybook-segmented-control
          [tabs]="config.navigation.tabs"
          [activeTabId]="config.navigation.activeTabId"
          [width]="400"
          (tabChange)="onNavigationChange($event)"
        ></storybook-segmented-control>
      </div>

      <!-- User section -->
      <div class="user-section" (click)="onUserProfileClick()">
        <!-- User profile -->
          <storybook-input-dropdown
            label=""
            [placeholder]="config.user.name"
            [selectedValue]="config.user.name"
            [options]="getUserOptions()"
            [leftIcon]="false"
            [rightIcon]="true"
            [showSupportingText]="false"
            (selectionChange)="onUserSelectionChange($event)">
          </storybook-input-dropdown>
        </div>
    </header>
  `,
  styleUrls: ['./app-header.component.css'],
})
export class AppHeaderComponent {
  /** Configuration du header */
  @Input()
  config: AppHeaderConfig = {
    logo: {
      text: 'Planexa'
    },
    navigation: {
      tabs: [
        { id: 'calendar', label: 'Calendrier', icon: 'calendar' },
        { id: 'patients', label: 'Patients', icon: 'patient' }
      ],
      activeTabId: 'calendar'
    },
    user: {
      name: 'Louis Pasteur',
      role: 'Médecin'
    },
    showSyncButton: true
  };

  /** Événements */
  @Output()
  navigationChange = new EventEmitter<TabItem>();

  @Output()
  syncClick = new EventEmitter<void>();

  @Output()
  userProfileClick = new EventEmitter<UserProfile>();

  @Output()
  logoClick = new EventEmitter<void>();

  @Output()
  userSelectionChange = new EventEmitter<string>();

  onNavigationChange(tab: TabItem): void {
    this.config.navigation.activeTabId = tab.id;
    this.navigationChange.emit(tab);
  }

  onSyncClick(): void {
    this.syncClick.emit();
  }

  onUserProfileClick(): void {
    this.userProfileClick.emit(this.config.user);
  }

  onLogoClick(): void {
    this.logoClick.emit();
  }

  getInitials(name: string): string {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .substring(0, 2);
  }

  getUserOptions(): string[] {
    // Options exemple pour le changement d'utilisateur
    return [
      this.config.user.name,
      'Dr. Marie Curie',
      'Dr. Pierre Dupont',
      'Déconnexion'
    ];
  }

  onUserSelectionChange(selectedUser: string): void {
    if (selectedUser === 'Déconnexion') {
      // Gérer la déconnexion
      this.userSelectionChange.emit('logout');
    } else {
      // Changer d'utilisateur
      this.config.user.name = selectedUser;
      this.userSelectionChange.emit(selectedUser);
    }
  }
}
