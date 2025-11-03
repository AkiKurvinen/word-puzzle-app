import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-option-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './option-item.component.html',
  styleUrl: './option-item.component.css'
})
export class OptionItemComponent {
  @Input() index: number = 0;
  @Input() label: string = '';
  @Input() selected: boolean = false;
  @Input() correct?: boolean;
}
