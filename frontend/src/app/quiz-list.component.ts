import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Available Quizzes</h2>
    <ul>
      <li *ngFor="let quiz of quizzes">
        <a (click)="goToQuiz(quiz)">{{ quiz }}</a>
      </li>
    </ul>
  `
})
export class QuizListComponent implements OnInit {
  quizzes: string[] = [];
  constructor(private router: Router) {}
  async ngOnInit() {
    const API_URL = (import.meta as any).env?.API_URL || 'http://127.0.0.1:8000';
    try {
      const response = await fetch(`${API_URL}/quiz`);
      const data = await response.json();
      this.quizzes = data.quizzes || [];
    } catch (e) {
      this.quizzes = [];
    }
  }
  goToQuiz(name: string) {
    this.router.navigate(['/quiz', name]);
  }
}
