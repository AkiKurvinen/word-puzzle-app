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
    index: 0,
    label: 'Option item text',
    selected: false,
  },
};

export const Selected: Story = {
  args: {
    index: 0,
    label: 'Option item text',
    selected: true,
  },
};

export const Correct: Story = {
  args: {
    index: 0,
    label: 'Option item text',
    correct: true,
  },
};

export const Incorrect: Story = {
  args: {
    index: 0,
    label: 'Option item text',
    correct: false,
  },
};

export const CorrectSelected: Story = {
  args: {
    index: 0,
    label: 'Option item text',
    selected: true,
    correct: true,
  },
};

export const IncorrectSelected: Story = {
  args: {
    index: 0,
    label: 'Option item text',
    selected: true,
    correct: false,
  },
};


