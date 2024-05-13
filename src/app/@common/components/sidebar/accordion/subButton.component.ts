import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'adbox-sidebar-accordion-subbutton',
  standalone: true,
  imports: [CommonModule],
  template: ` <li>
    <a
      class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      href="#"
    >
      {{ title }}
    </a>
  </li>`,
  styles: ``,
})
export class AccordionSubButtonComponent {
  @Input() title = 'title';
}
