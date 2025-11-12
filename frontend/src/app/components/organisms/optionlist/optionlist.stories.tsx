// Angular context: import Angular components if needed, or mock for Storybook
import { OptionListComponent } from './option-list.component';

export default {
  title: 'Organisms/OptionList',
  component: OptionListComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {},
};

const options_data = [
    {label: "Cat", correct: false},
    {label: "Dog", correct: true},
    {label: "Turtle", correct: false},
    {label: "Snake", correct: false}
  ]


export const Default = {
  args: {
    options: options_data,
    reveal: false
  },
};

export const Selected = {
  args: {
    options: options_data.map((opt, i) => i === 1 ? { ...opt, selected: true } : { ...opt, disabled: true }),
    reveal: false
  },
};

export const RevealedCorrect = {
  args: {
    options: options_data.map((opt, i) => {
      if (i === 1) return { ...opt, selected: true, correct: true, disabled: true };
      if (opt.correct) return { ...opt, correct: true, disabled: true };
      return { ...opt, correct: false, disabled: true };
    }),
    reveal: true
  },
};

export const RevealedWrong = {
  args: {
    options: options_data.map((opt, i) => {
      if (i === 0) return { ...opt, selected: true, wrong: true, correct: false, disabled: true };
      if (opt.correct) return { ...opt, correct: true, disabled: true };
      return { ...opt, correct: false, disabled: true };
    }),
    reveal: true
  },
};

export const AllDisabled = {
  args: {
    options: options_data.map(opt => ({ ...opt, disabled: true })),
    reveal: false
  },
};
