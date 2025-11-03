import type { Meta, StoryObj } from '@storybook/angular';
import { OptionListComponent } from './option-list.component';

const meta: Meta<OptionListComponent> = {
  title: 'Design System/Molecules/OptionList',
  component: OptionListComponent,
  tags: ['autodocs'],
  argTypes: {
    options:["a","b"]
  },
  args: { },
};

export default meta;
type Story = StoryObj<OptionListComponent>;

export const Default: Story = {
  args: {
    options: ["a", "b"],
  },
};
