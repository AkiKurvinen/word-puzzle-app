import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionListComponent } from '../optionlist/option-list.component';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, OptionListComponent],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  private revealTimeout: any = null;
  @Input() data: any;
  @Input() quizData: any;
  @Input() loading: boolean = false;

  score = 0;
  current = 1;
  end = false;
  selectedIdx: number|null = null;
  optionsView: any[] = [];
  reveal = false;

  get total() {
    const d = this.quizData ?? this.data;
    return d?.questions?.length || 0;
  }

  ngOnChanges() {
    this.updateOptionsView();
  }

  ngOnInit() {
    this.updateOptionsView();
  }

  updateOptionsView() {
    const d = this.quizData ?? this.data;
    const options: any[] = d?.questions?.[this.current - 1]?.options || [];
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
    if (this.selectedIdx !== null || this.revealTimeout) return;
    this.selectedIdx = index;
    this.reveal = false;
    this.updateOptionsView();
    this.revealTimeout = setTimeout(() => {
      this.reveal = true;
      const d = this.quizData ?? this.data;
      const options = d?.questions?.[this.current - 1]?.options;
      if (!options) return;
      const selected = options[index];
      if (selected?.correct) this.score++;
      this.updateOptionsView();
      setTimeout(() => {
        this.handleNextQuestion();
        this.revealTimeout = null;
      }, 2000); // delay next question
    }, 1000); // delay reveal
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
