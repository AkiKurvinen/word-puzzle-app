import { Component, Input } from '@angular/core';
import { OptionListComponent } from '../optionlist/option-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, OptionListComponent],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  @Input() data: any;
  @Input() loading: boolean = false;

  score = 0;
  current = 1;
  end = false;
  selectedIdx: number|null = null;
  optionsView: any[] = [];
  reveal = false;

  get total() {
    return this.data?.questions?.length || 0;
  }

  ngOnChanges() {
    this.updateOptionsView();
  }

  ngOnInit() {
    this.updateOptionsView();
  }

  updateOptionsView() {
    const options: any[] = this.data?.questions?.[this.current - 1]?.options || [];
    if (this.selectedIdx === null) {
      this.optionsView = options.map((o: any) => ({ ...o, selected: false, disabled: false, correct: o.correct, wrong: false }));
    } else {
      this.optionsView = options.map((o: any, i: number) => {
        const isSelected = i === this.selectedIdx;
        return {
          ...o,
          selected: isSelected,
          disabled: !isSelected,
          correct: o.correct,
          wrong: isSelected && !o.correct
        };
      });
    }
  }

  onOptionSelect(index: number) {
    if (this.selectedIdx !== null) return;
    this.selectedIdx = index;
    this.reveal = true;
    const options = this.data?.questions?.[this.current - 1]?.options;
    if (!options) return;
    const selected = options[index];
    if (selected?.correct) this.score++;
    this.updateOptionsView();
    setTimeout(() => {
      this.handleNextQuestion();
    }, 1000); // mimic reveal delay
  }

  handleNextQuestion() {
    this.selectedIdx = null;
    this.reveal = false;
    if (this.current < this.total) {
      this.current++;
    } else {
      this.end = true;
    }
    this.updateOptionsView();
  }
}
