import { Component, OnInit } from '@angular/core';
import { QuizComponent } from './components/organisms/quiz/quiz.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/organisms/footer/footer.component';
import { HeaderComponent } from './components/organisms/header/header.component';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { OptionItemComponent } from './option-item/option-item.component'
import { OptionListComponent } from './option-list/option-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, HeaderComponent, NzTypographyModule, NzButtonModule, QuizComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'the-app';
  quizData: any = null;
  loading = true;

  async ngOnInit() {
    try {
      const response = await fetch('data/demo.json');
      this.quizData = await response.json();
    } catch (e) {
      this.quizData = null;
    } finally {
      this.loading = false;
    }
  }
}
