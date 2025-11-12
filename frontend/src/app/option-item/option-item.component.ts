import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-option-item',
  standalone: true,
  imports: [CommonModule, NzIconModule],
  templateUrl: './option-item.component.html',
  styleUrl: './option-item.component.less'
})
export class OptionItemComponent {
  @Input() index: number = 0;
  @Input() label: string = '';
  @Input() selected: boolean = false;
  @Input() correct?: boolean;
  @Input() disabled?: boolean;
}
