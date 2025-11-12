import { Component, Input } from '@angular/core';
import { OptionItemSkeletonComponent } from '../../molecules/option-item/option-item-skeleton.component';
import { OptionListComponent } from '../optionlist/option-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, OptionItemSkeletonComponent, OptionListComponent],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  @Input() data: any;
  @Input() loading: boolean = false;

  score = 0;
  current = 1;
  end = false;

  get total() {
    return this.data?.questions?.length || 0;
  }

  onOptionSelect(index: number) {
    const options = this.data?.questions?.[this.current - 1]?.options;
    if (!options) return;
    const selected = options[index];
    if (selected?.correct) this.score++;
    setTimeout(() => {
      this.handleNextQuestion();
    }, 1000); // mimic reveal delay
  }

  handleNextQuestion() {
    if (this.current < this.total) {
      this.current++;
    } else {
      this.end = true;
    }
  }
}
