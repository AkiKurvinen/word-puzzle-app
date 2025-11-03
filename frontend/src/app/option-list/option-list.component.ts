import { Component, Input } from '@angular/core';
import { OptionItemComponent } from '../option-item/option-item.component';

@Component({
  selector: 'app-option-list',
  imports: [OptionItemComponent],
  standalone: true,
  templateUrl: './option-list.component.html',
  styleUrl: './option-list.component.css'
})
export class OptionListComponent {
  @Input() options?: string[] = ["a","b"];
}
