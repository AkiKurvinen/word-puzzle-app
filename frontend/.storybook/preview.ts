import type { Preview } from "@storybook/angular";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ['Design tokens', 'Atoms', 'Molecules', 'Organisms', '*'],

      },
    },
  },
};

export default preview;
