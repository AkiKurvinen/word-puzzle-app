import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';
import { NzButtonModule } from 'ng-zorro-antd/button';

const meta: Meta = {
    title: 'Design System/Atoms/Button',
    decorators: [
    moduleMetadata({
      imports: [NzButtonModule],
    }),
  ],
  tags: ['autodocs'],
  render: (args) => ({
    props: args,
    template: `<button nz-button ${argsToTemplate(args)}>{{label}}</button>`,
  }),
  argTypes: {
    label: {
      control: 'text',
      description: 'Button text',
    },
    nzType: {
      control: 'select',
      options: ['primary', 'default', 'dashed', 'link', 'text'],
      description: 'Button type',
    },
  },
  args: {
    label: 'Button',
    nzType: 'default',
  },
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    nzType: 'primary',
  },
};

export const Default: Story = {
  args: {
    label: 'Default Button',
    nzType: 'default',
  },
};

export const Dashed: Story = {
  args: {
    label: 'Dashed Button',
    nzType: 'dashed',
  },
};

export const Link: Story = {
  args: {
    label: 'Link Button',
    nzType: 'link',
  },
};