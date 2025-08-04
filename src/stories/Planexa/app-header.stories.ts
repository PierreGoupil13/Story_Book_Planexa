import type { Meta, StoryObj } from '@storybook/angular';
import { AppHeaderComponent, AppHeaderConfig } from './app-header.component';

const meta: Meta<AppHeaderComponent> = {
  title: 'Planexa/App Header',
  component: AppHeaderComponent,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
Le composant **App Header** représente l'en-tête principal de l'application Planexa.

## Fonctionnalités

- **Logo** : Logo Planexa cliquable
- **Navigation** : Contrôle segmenté pour naviguer entre les sections (Calendrier/Patients)
- **Synchronisation** : Bouton de synchronisation des données
- **Profil utilisateur** : Affichage du nom, rôle et avatar de l'utilisateur connecté
- **Responsive** : Adapté aux différentes tailles d'écran

## Usage

Ce composant utilise le \`SegmentedControlComponent\` existant pour la navigation centrale.
        `
      }
    }
  },
  argTypes: {
    config: {
      control: 'object',
      description: 'Configuration complète du header'
    },
    navigationChange: {
      action: 'navigationChange',
      description: 'Émis lors du changement de navigation'
    },
    syncClick: {
      action: 'syncClick',
      description: 'Émis lors du clic sur le bouton de synchronisation'
    },
    userProfileClick: {
      action: 'userProfileClick',
      description: 'Émis lors du clic sur le profil utilisateur'
    },
    logoClick: {
      action: 'logoClick',
      description: 'Émis lors du clic sur le logo'
    }
  },
};

export default meta;
type Story = StoryObj<AppHeaderComponent>;

// Configuration par défaut
const defaultConfig: AppHeaderConfig = {
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

export const Default: Story = {
  args: {
    config: defaultConfig
  }
};

export const CalendrierActif: Story = {
  args: {
    config: {
      ...defaultConfig,
      navigation: {
        ...defaultConfig.navigation,
        activeTabId: 'calendar'
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Header avec la section Calendrier active.'
      }
    }
  }
};

export const PatientsActif: Story = {
  args: {
    config: {
      ...defaultConfig,
      navigation: {
        ...defaultConfig.navigation,
        activeTabId: 'patients'
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Header avec la section Patients active.'
      }
    }
  }
};

export const AvecAvatar: Story = {
  args: {
    config: {
      ...defaultConfig,
      user: {
        name: 'Dr. Marie Curie',
        role: 'Spécialiste',
        avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face'
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Header avec un avatar personnalisé pour l\'utilisateur.'
      }
    }
  }
};

export const SansSynchronisation: Story = {
  args: {
    config: {
      ...defaultConfig,
      showSyncButton: false
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Header sans le bouton de synchronisation.'
      }
    }
  }
};

export const UtilisateurLongNom: Story = {
  args: {
    config: {
      ...defaultConfig,
      user: {
        name: 'Dr. Jean-Baptiste de la Fontaine-Montmorency',
        role: 'Chirurgien Cardio-Thoracique'
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Header avec un nom d\'utilisateur très long pour tester la troncature.'
      }
    }
  }
};

export const Responsive: Story = {
  args: {
    config: defaultConfig
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    },
    docs: {
      description: {
        story: 'Version responsive du header pour mobile.'
      }
    }
  }
};
