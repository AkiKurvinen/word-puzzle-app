import { Routes } from '@angular/router';
import { QuizListComponent } from './quiz-list.component';
import { QuizPageComponent } from './quiz-page.component';

export const routes: Routes = [
	{
		path: '',
		component: QuizListComponent
	},
	{
		path: 'quiz/:quizname',
		component: QuizPageComponent
	}
];
