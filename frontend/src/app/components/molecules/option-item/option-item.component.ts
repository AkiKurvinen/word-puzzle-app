import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-option-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './option-item.component.html',
  styleUrls: ['./option-item.component.css']
})
export class OptionItemComponent {
  @Input() item: any;
  @Input() index: number = 0;
  @Input() reveal: boolean = false;

  get classNames(): string {
    const classNames = [];
    if (this.item?.disabled) classNames.push('disabled');
    if (this.item?.selected) classNames.push('selected');
    if (this.reveal && this.item?.correct) classNames.push('correct');
    if ((this.reveal && this.item?.wrong) || (this.reveal && this.item?.disabled && !this.item?.correct)) {
      classNames.push('wrong');
    }
    return classNames.join(' ');
  }
}
