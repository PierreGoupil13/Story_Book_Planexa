import type { Meta, StoryObj } from '@storybook/angular';
import { NavigationBarComponent, NavigationBarConfig } from './navigation-bar.component';

const meta: Meta<NavigationBarComponent> = {
  title: 'Components/NavigationBar',
  component: NavigationBarComponent,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Barre de navigation complexe reproduisant le design fourni. Combine titre, navigation par flèches, contrôle segmenté et boutons d\'action.',
      },
    },
  },
  argTypes: {
    config: {
      control: 'object',
      description: 'Configuration complète de la barre de navigation',
    },
    previousClick: {
      action: 'previousClick',
      description: 'Événement déclenché lors du clic sur la flèche précédente',
    },
    nextClick: {
      action: 'nextClick',
      description: 'Événement déclenché lors du clic sur la flèche suivante',
    },
    viewModeChange: {
      action: 'viewModeChange',
      description: 'Événement déclenché lors du changement de mode de vue',
    },
    todayClick: {
      action: 'todayClick',
      description: 'Événement déclenché lors du clic sur "Aujourd\'hui"',
    },
    primaryButtonClick: {
      action: 'primaryButtonClick',
      description: 'Événement déclenché lors du clic sur le bouton principal',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<NavigationBarComponent>;

/** Design par défaut - reproduction exacte du SVG fourni */
export const Default: Story = {
  args: {
    config: {
      title: 'Juillet 2025',
      viewModes: [
        { id: 'month', label: 'Mois', icon: false },
        { id: 'week', label: 'Semaine', icon: false },
        { id: 'day', label: 'Jour', icon: false }
      ],
      activeViewMode: 'month',
      showTodayButton: true,
      todayButtonText: 'Aujourd\'hui',
      primaryButtonText: 'Nouveau RDV',
      showPrimaryButton: true
    }
  },
};

/** Calendrier médical avec icônes */
export const MedicalCalendar: Story = {
  args: {
    config: {
      title: 'Septembre 2025',
      viewModes: [
        { id: 'month', label: 'Mois', icon: 'calendar' },
        { id: 'week', label: 'Semaine', icon: 'calendar' },
        { id: 'day', label: 'Jour', icon: 'calendar' }
      ],
      activeViewMode: 'week',
      showTodayButton: true,
      todayButtonText: 'Aujourd\'hui',
      primaryButtonText: 'Nouveau Patient',
      showPrimaryButton: true
    }
  },
};

/** Interface projet avec modes personnalisés */
export const ProjectInterface: Story = {
  args: {
    config: {
      title: 'Projet Q4 2025',
      viewModes: [
        { id: 'timeline', label: 'Timeline', icon: 'hexagon' },
        { id: 'kanban', label: 'Kanban', icon: 'hexagon' },
        { id: 'calendar', label: 'Calendrier', icon: 'calendar' }
      ],
      activeViewMode: 'kanban',
      showTodayButton: false,
      primaryButtonText: 'Nouvelle Tâche',
      showPrimaryButton: true
    }
  },
};

/** Version simplifiée sans boutons secondaires */
export const Minimal: Story = {
  args: {
    config: {
      title: 'Décembre 2025',
      viewModes: [
        { id: 'list', label: 'Liste', icon: false },
        { id: 'grid', label: 'Grille', icon: false }
      ],
      activeViewMode: 'list',
      showTodayButton: false,
      showPrimaryButton: false
    }
  },
};

/** Avec tous les boutons et icônes */
export const FullFeatured: Story = {
  args: {
    config: {
      title: 'Planning Médical - Octobre 2025',
      viewModes: [
        { id: 'day', label: 'Jour', icon: 'calendar' },
        { id: 'week', label: 'Semaine', icon: 'calendar' },
        { id: 'month', label: 'Mois', icon: 'calendar' },
        { id: 'patients', label: 'Patients', icon: 'patient' }
      ],
      activeViewMode: 'day',
      showTodayButton: true,
      todayButtonText: 'Aujourd\'hui',
      primaryButtonText: 'Nouveau RDV',
      showPrimaryButton: true
    }
  },
};

/** Version mobile responsive */
export const Mobile: Story = {
  args: {
    config: {
      title: 'Août 2025',
      viewModes: [
        { id: 'day', label: 'Jour', icon: false },
        { id: 'week', label: 'Semaine', icon: false }
      ],
      activeViewMode: 'day',
      showTodayButton: true,
      todayButtonText: 'Aujourd\'hui',
      primaryButtonText: 'Nouveau',
      showPrimaryButton: true
    }
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'Version adaptée aux écrans mobiles avec textes raccourcis et layout responsive.',
      },
    },
  },
};

/** Playground pour tester toutes les variations */
export const Playground: Story = {
  args: {
    config: {
      title: 'Juillet 2025',
      viewModes: [
        { id: 'month', label: 'Mois', icon: 'calendar' },
        { id: 'week', label: 'Semaine', icon: 'calendar' },
        { id: 'day', label: 'Jour', icon: 'calendar' }
      ],
      activeViewMode: 'month',
      showTodayButton: true,
      todayButtonText: 'Aujourd\'hui',
      primaryButtonText: 'Nouveau RDV',
      showPrimaryButton: true
    }
  },
};
