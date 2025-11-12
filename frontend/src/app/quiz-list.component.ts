import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-list',
  standalone: true,
  template: `
    <h2>Available Quizzes</h2>
    <ul>
      <li><a (click)="goToQuiz('demo')">Demo Quiz</a></li>
      <li><a (click)="goToQuiz('quiz')">Quiz</a></li>
    </ul>
  `
})
export class QuizListComponent {
  constructor(private router: Router) {}
  goToQuiz(name: string) {
    this.router.navigate(['/quiz', name]);
  }
}
