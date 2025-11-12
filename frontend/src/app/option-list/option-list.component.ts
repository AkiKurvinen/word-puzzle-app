import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-option-list',
  standalone: true,
  templateUrl: './option-list.component.html',
  styleUrl: './option-list.component.css'
})

export class OptionListComponent {
  @Input() options?: string[] = ["a","b"];
}
