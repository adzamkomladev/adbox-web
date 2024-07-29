import { Component, input, output, signal } from '@angular/core';
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
  extraStyles=signal<string>('')
  extraStyle=input<string>('bg-white');

  closed = output<void>();

  onClose() {
    this.closed.emit();
  }

  resetStyles(){
    this.extraStyles.set(this.extraStyles())
  }
}
