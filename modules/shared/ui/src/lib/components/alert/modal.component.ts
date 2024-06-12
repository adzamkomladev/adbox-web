import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'adbox-alert-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styles: ``,
})
export class ModalComponent {
  id = input.required<string>();
  title = input.required<string>();

  closed = output<void>();

  onClose() {
    this.closed.emit();
  }
}
