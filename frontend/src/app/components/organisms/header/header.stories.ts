import type { Meta, StoryObj } from '@storybook/angular';
import { HeaderComponent } from './header.component';

const meta: Meta<HeaderComponent> = {
  title: 'Design System/Organisms/Header',
  component: HeaderComponent,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
    },
  },
  args: { },
};

export default meta;
type Story = StoryObj<HeaderComponent>;

export const Primary: Story = {
  args: {
    logo: 'angular_logo.webp',
    title: 'Header text',
  },
};
