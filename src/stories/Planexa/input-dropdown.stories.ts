import type { Meta, StoryObj } from '@storybook/angular';
import { InputDropdownComponent } from './input-dropdown.component';

const meta: Meta<InputDropdownComponent> = {
  title: 'Components/InputDropdown',
  component: InputDropdownComponent,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Un composant qui combine l\'input field avec un dropdown fonctionnel. Cliquez sur la flèche pour ouvrir la liste.',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Label affiché au-dessus du champ',
    },
    placeholder: {
      control: 'text',
      description: 'Texte placeholder quand rien n\'est sélectionné',
    },
    supportingText: {
      control: 'text',
      description: 'Texte d\'aide affiché en dessous',
    },
    options: {
      control: 'object',
      description: 'Liste des options disponibles',
    },
    selectedValue: {
      control: 'text',
      description: 'Valeur actuellement sélectionnée',
    },
    leftIcon: {
      control: 'boolean',
      description: 'Afficher l\'icône utilisateur à gauche',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<InputDropdownComponent>;

/** Dropdown basique avec options par défaut */
export const Default: Story = {
  args: {
    label: 'Select option',
    placeholder: 'Choose an option',
    supportingText: 'Click the arrow to expand',
    options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    selectedValue: '',
    leftIcon: true,
  },
};

/** Dropdown avec une valeur pré-sélectionnée */
export const WithSelectedValue: Story = {
  args: {
    label: 'Country',
    placeholder: 'Select your country',
    supportingText: 'Choose your country of residence',
    options: ['France', 'Spain', 'Germany', 'Italy', 'United Kingdom'],
    selectedValue: 'France',
    leftIcon: true,
  },
};

/** Dropdown sans icône de gauche */
export const WithoutLeftIcon: Story = {
  args: {
    label: 'Priority level',
    placeholder: 'Select priority',
    supportingText: 'Choose the priority level for this task',
    options: ['Low', 'Medium', 'High', 'Critical'],
    selectedValue: '',
    leftIcon: false,
  },
};

/** Dropdown avec beaucoup d'options (scroll) */
export const ManyOptions: Story = {
  args: {
    label: 'City',
    placeholder: 'Select your city',
    supportingText: 'Choose from the available cities',
    options: [
      'Paris', 'Lyon', 'Marseille', 'Toulouse', 'Nice', 'Nantes', 
      'Strasbourg', 'Montpellier', 'Bordeaux', 'Lille', 'Rennes', 
      'Reims', 'Le Havre', 'Saint-Étienne', 'Toulon'
    ],
    selectedValue: '',
    leftIcon: true,
  },
};

/** Playground pour tester */
export const Playground: Story = {
  args: {
    label: 'Select option',
    placeholder: 'Choose an option',
    supportingText: 'Click the arrow to expand',
    options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    selectedValue: '',
    leftIcon: true,
  },
};
