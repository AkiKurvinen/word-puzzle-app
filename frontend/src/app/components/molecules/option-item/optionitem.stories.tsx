// Angular context: import Angular components if needed, or mock for Storybook
import { OptionItemComponent } from './option-item.component';
import { OptionItemSkeletonComponent } from './option-item-skeleton.component';

export default {
  title: 'Molecules/OptionItem',
  component: OptionItemComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    item: {},
  },
};

export const Default = {
  args: {
    index: 1,
    item:{
        label: 'Some option',
        correct: false
    }
  },
};

export const Selected = {
    args: {
        index: 1,
        item:{
            label: 'Some option',
            selected: true
        }
    },
};

// Stories with reveal=false (no correct/wrong coloring)
export const Correct = {
    args: {
        index: 1,
        item: {
            label: 'Some option',
            correct: true
        },
        reveal: false
    },
};
export const Wrong = {
    args: {
        index: 1,
        item: {
            label: 'Some option',
            correct: false
        },
        reveal: false
    },
};
export const Disabled = {
    args: {
        index: 1,
        item: {
            label: 'Some option',
            disabled: true
        },
        reveal: false
    },
};

// Stories with reveal=true (show correct/wrong coloring)
export const RevealedCorrect = {
    args: {
        index: 1,
        item: {
            label: 'Some option',
            correct: true,
            disabled: true
        },
        reveal: true
    },
};
export const RevealedWrong = {
    args: {
        index: 1,
        item: {
            label: 'Some option',
            correct: false,
            wrong: true,
            disabled: true
        },
        reveal: true
    },
};
export const DisabledSelectedCorrect = {
    args: {
        index: 1,
        item: {
            label: 'Some option',
            correct: true,
            disabled: true,
            selected: true
        },
        reveal: true
    },
};
export const DisabledSelectedWrong = {
    args: {
        index: 1,
        item: {
            label: 'Some option',
            correct: false,
            wrong: true,
            disabled: true,
            selected: true
        },
        reveal: true
    },
};

export const Skeleton = {
  component: OptionItemSkeletonComponent,
};