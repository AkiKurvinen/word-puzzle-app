import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';
import { NzIconModule } from 'ng-zorro-antd/icon';

const meta: Meta = {
    title: 'Design System/Atoms/Icon',
    decorators: [
    moduleMetadata({
      imports: [NzIconModule],
    }),
  ],
  tags: ['autodocs'],
  render: (args) => ({
    props: args,
    template: `<nz-icon nzType="check"  ${argsToTemplate(args)} nzTheme="outline"/>`,
  }),

  args: {

  },
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  args: {
 
  },
};
