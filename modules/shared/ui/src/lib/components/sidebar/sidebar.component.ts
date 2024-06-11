import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'adbox-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styles: ``,
})
export class SidebarComponent {
  id = input.required<string>();
  title = input.required<string>();

  close = output<void>();

  onClose() {
    this.close.emit();
  }
}
