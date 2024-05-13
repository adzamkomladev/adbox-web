import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'adbox-sidebar-link-button',
  standalone: true,
  imports: [CommonModule],
  template: `<p>button works!</p>`,
  styles: ``,
})
export class LinkButtonComponent {
  @Input() title = 'title';
}
