import type { Meta, StoryObj } from '@storybook/angular';
import { SegmentedControlComponent, TabItem } from './segmented-control.component';

const meta: Meta<SegmentedControlComponent> = {
  title: 'Components/SegmentedControl',
  component: SegmentedControlComponent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Un composant de contrôle segmenté (tabs) avec design moderne, basé sur le SVG fourni. Reproduit fidèlement les dimensions et le style.',
      },
    },
  },
  argTypes: {
    tabs: {
      control: 'object',
      description: 'Liste des onglets à afficher',
    },
    activeTabId: {
      control: 'text',
      description: 'ID de l\'onglet actuellement actif',
    },
    width: {
      control: { type: 'range', min: 300, max: 1200, step: 50 },
      description: 'Largeur du composant en pixels',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<SegmentedControlComponent>;

/** État par défaut - avec différentes icônes */
export const Default: Story = {
  args: {
    tabs: [
      { id: 'segment1', label: 'Calendrier', icon: 'calendar' },
      { id: 'segment2', label: 'Patient', icon: 'patient' },
      { id: 'segment3', label: 'Hexagone', icon: 'hexagon' },
      { id: 'segment4', label: 'Sans icône', icon: false },
    ],
    activeTabId: 'segment1',
    width: 850,
  },
};

/** Avec labels personnalisés et icônes spécifiques */
export const CustomLabels: Story = {
  args: {
    tabs: [
      { id: 'dashboard', label: 'Dashboard', icon: 'calendar' },
      { id: 'analytics', label: 'Analytics', icon: 'patient' },
      { id: 'settings', label: 'Settings', icon: 'hexagon' },
      { id: 'profile', label: 'Profile', icon: 'patient' },
    ],
    activeTabId: 'dashboard',
    width: 850,
  },
};

/** Démonstration des types d'icônes */
export const IconTypes: Story = {
  args: {
    tabs: [
      { id: 'calendar-tab', label: 'Calendrier', icon: 'calendar' },
      { id: 'patient-tab', label: 'Patient', icon: 'patient' },
      { id: 'hexagon-tab', label: 'Hexagone', icon: 'hexagon' },
    ],
    activeTabId: 'calendar-tab',
    width: 600,
  },
};

/** Sans icônes */
export const WithoutIcons: Story = {
  args: {
    tabs: [
      { id: 'overview', label: 'Overview', icon: false },
      { id: 'details', label: 'Details', icon: false },
      { id: 'history', label: 'History', icon: false },
      { id: 'settings', label: 'Settings', icon: false },
    ],
    activeTabId: 'overview',
    width: 850,
  },
};

/** Avec 3 onglets */
export const ThreeTabs: Story = {
  args: {
    tabs: [
      { id: 'tab1', label: 'Personal', icon: 'calendar' },
      { id: 'tab2', label: 'Business', icon: 'patient' },
      { id: 'tab3', label: 'Enterprise', icon: 'hexagon' },
    ],
    activeTabId: 'tab1',
    width: 600,
  },
};

/** Avec 5 onglets */
export const FiveTabs: Story = {
  args: {
    tabs: [
      { id: 'home', label: 'Home', icon: 'calendar' },
      { id: 'products', label: 'Products', icon: 'patient' },
      { id: 'services', label: 'Services', icon: 'hexagon' },
      { id: 'about', label: 'About', icon: 'calendar' },
      { id: 'contact', label: 'Contact', icon: 'patient' },
    ],
    activeTabId: 'home',
    width: 850,
  },
};

/** Avec onglet désactivé */
export const WithDisabled: Story = {
  args: {
    tabs: [
      { id: 'active1', label: 'Active', icon: 'calendar' },
      { id: 'active2', label: 'Active', icon: 'patient' },
      { id: 'disabled', label: 'Disabled', icon: 'hexagon', disabled: true },
      { id: 'active3', label: 'Active', icon: 'calendar' },
    ],
    activeTabId: 'active1',
    width: 850,
  },
};

/** Version compacte */
export const Compact: Story = {
  args: {
    tabs: [
      { id: 'tab1', label: 'Tab 1', icon: 'calendar' },
      { id: 'tab2', label: 'Tab 2', icon: 'patient' },
      { id: 'tab3', label: 'Tab 3', icon: 'hexagon' },
    ],
    activeTabId: 'tab1',
    width: 400,
  },
  parameters: {
    docs: {
      description: {
        story: 'Version plus compacte du composant pour les espaces restreints.',
      },
    },
  },
};

/** Version responsive */
export const Responsive: Story = {
  args: {
    tabs: [
      { id: 'mobile1', label: 'Home', icon: 'calendar' },
      { id: 'mobile2', label: 'Search', icon: 'patient' },
      { id: 'mobile3', label: 'Profile', icon: 'hexagon' },
    ],
    activeTabId: 'mobile1',
    width: 320,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'Version adaptée aux écrans mobiles avec largeur réduite.',
      },
    },
  },
};

/** Playground pour tester */
export const Playground: Story = {
  args: {
    tabs: [
      { id: 'segment1', label: 'Calendrier', icon: 'calendar' },
      { id: 'segment2', label: 'Patient', icon: 'patient' },
      { id: 'segment3', label: 'Hexagone', icon: 'hexagon' },
      { id: 'segment4', label: 'Sans icône', icon: false },
    ],
    activeTabId: 'segment1',
    width: 850,
  },
};
