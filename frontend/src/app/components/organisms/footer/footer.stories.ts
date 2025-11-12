import type { Meta, StoryObj } from '@storybook/angular';
import { FooterComponent } from './footer.component';

const meta: Meta<FooterComponent> = {
  title: 'Design System/Organisms/Footer',
  component: FooterComponent,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
    },
  },
  args: { },
};

export default meta;
type Story = StoryObj<FooterComponent>;

export const Primary: Story = {
  args: {
    title: 'footer text',
  },
};
