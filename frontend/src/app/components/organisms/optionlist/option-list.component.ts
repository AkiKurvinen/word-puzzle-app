import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OptionItemComponent } from '../../molecules/option-item/option-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-option-list',
  standalone: true,
  imports: [CommonModule, OptionItemComponent],
  templateUrl: './option-list.component.html',
  styleUrls: ['./option-list.component.css']
})
export class OptionListComponent {
  @Input() options: any[] = [];
  @Input() reveal: boolean = false;
  @Output() select = new EventEmitter<number>();

  onSelect(index: number) {
    this.select.emit(index);
  }
}
