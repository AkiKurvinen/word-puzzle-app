import type { Meta, StoryObj } from '@storybook/angular';
import { OptionItemComponent } from './option-item.component';

const meta: Meta<OptionItemComponent> = {
  title: 'Design System/Molecules/OptionItem',
  component: OptionItemComponent,
  tags: ['autodocs'],
  argTypes: {
    index: {
      control: 'number',
    },
    label: {
      control: 'text',
    },
  },
  args: { },
};

export default meta;
type Story = StoryObj<OptionItemComponent>;

export const Default: Story = {
  args: {
    index: 1,
    label: 'Option item text',
    selected: false
  },
};

export const Selected: Story = {
  args: {
    index: 2,
    label: 'Option item text',
    selected: true,
  },
};

export const Correct: Story = {
  args: {
    index: 3,
    label: 'Option item text',
    correct: true,
  },
};

export const Incorrect: Story = {
  args: {
    index: 4,
    label: 'Option item text',
    correct: false,
    disabled: true
  },
};

export const CorrectSelected: Story = {
  args: {
    index: 5,
    label: 'Option item text',
    selected: true,
    correct: true,
    disabled: true
  },
};

export const IncorrectSelected: Story = {
  args: {
    index: 6,
    label: 'Option item text',
    selected: true,
    correct: false,
    disabled: true
  },
};


