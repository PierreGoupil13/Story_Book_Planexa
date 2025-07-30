import type { Meta, StoryObj } from '@storybook/angular';
import { PlaceholderComponent } from './placeholder.component';

const meta: Meta<PlaceholderComponent> = {
  title: 'Components/Placeholder',
  component: PlaceholderComponent,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Un composant de placeholder.',
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
      description: 'Texte placeholder dans le champ',
    },
    supportingText: {
      control: 'text',
      description: 'Texte d\'aide affiché en dessous',
    },
    value: {
      control: 'text',
      description: 'Valeur actuelle du champ',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
      description: 'Type d\'input HTML',
    },
    disabled: {
      control: 'boolean',
      description: 'État désactivé du champ',
    },
    leftIcon: {
      control: 'boolean',
      description: 'Afficher l\'icône utilisateur à gauche',
    },
    rightIcon: {
      control: 'boolean',
      description: 'Afficher l\'icône dropdown à droite',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<PlaceholderComponent>;

/** État par défaut - reproduction exacte du design Figma */
export const Default: Story = {
  args: {
    label: 'Input title',
    placeholder: 'Placeholder',
    supportingText: 'Supporting text',
    value: '',
    type: 'text',
    disabled: false,
    leftIcon: true,
    rightIcon: true,
  },
};

/** Input avec valeur pré-remplie */
export const WithValue: Story = {
  args: {
    label: 'Input title',
    placeholder: 'Placeholder',
    supportingText: 'Supporting text',
    value: 'Valeur saisie',
    type: 'text',
    disabled: false,
    leftIcon: true,
    rightIcon: true,
  },
};

/** Input sans icônes */
export const WithoutIcons: Story = {
  args: {
    label: 'Input title',
    placeholder: 'Placeholder',
    supportingText: 'Supporting text',
    value: '',
    type: 'text',
    disabled: false,
    leftIcon: false,
    rightIcon: false,
  },
};

/** Input avec icône gauche seulement */
export const LeftIconOnly: Story = {
  args: {
    label: 'Email address',
    placeholder: 'Enter your email',
    supportingText: 'We\'ll never share your email',
    value: '',
    type: 'email',
    disabled: false,
    leftIcon: true,
    rightIcon: false,
  },
};

/** Input avec icône droite seulement (dropdown) */
export const RightIconOnly: Story = {
  args: {
    label: 'Select option',
    placeholder: 'Choose an option',
    supportingText: 'Click the arrow to expand',
    value: '',
    type: 'text',
    disabled: false,
    leftIcon: false,
    rightIcon: true,
  },
};

/** État désactivé */
export const Disabled: Story = {
  args: {
    label: 'Input title',
    placeholder: 'Placeholder',
    supportingText: 'This field is disabled',
    value: '',
    type: 'text',
    disabled: true,
    leftIcon: true,
    rightIcon: true,
  },
};

/** Input pour mot de passe */
export const Password: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    supportingText: 'Must be at least 8 characters',
    value: '',
    type: 'password',
    disabled: false,
    leftIcon: true,
    rightIcon: false,
  },
};

/** Input numérique */
export const Number: Story = {
  args: {
    label: 'Age',
    placeholder: 'Enter your age',
    supportingText: 'Must be between 18 and 99',
    value: '',
    type: 'number',
    disabled: false,
    leftIcon: true,
    rightIcon: false,
  },
};

/** Playground pour tester toutes les variations */
export const Playground: Story = {
  args: {
    label: 'Input title',
    placeholder: 'Placeholder',
    supportingText: 'Supporting text',
    value: '',
    type: 'text',
    disabled: false,
    leftIcon: true,
    rightIcon: true,
  },
};
