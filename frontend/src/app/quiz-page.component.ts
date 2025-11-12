import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizComponent } from './components/organisms/quiz/quiz.component';

@Component({
  selector: 'app-quiz-page',
  standalone: true,
  imports: [QuizComponent],
  template: `
    <app-quiz [quizData]="quizData" [loading]="loading"></app-quiz>
  `
})
export class QuizPageComponent implements OnInit {
  quizData: any = null;
  loading = true;
  constructor(private route: ActivatedRoute) {}
  async ngOnInit() {
    const API_URL = (import.meta as any).env?.API_URL || 'http://127.0.0.1:8000';
    const quizname = this.route.snapshot.paramMap.get('quizname');
    try {
      const response = await fetch(`${API_URL}/quiz/${quizname}`);
      this.quizData = await response.json();
    } catch (e) {
      this.quizData = null;
    } finally {
      this.loading = false;
    }
  }
}
