import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'adbox-table-data',
  standalone: true,
  imports: [CommonModule],
  template: `
    <td
      class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200"
    >
    <div class="">
         @if(data()){
      {{ data() }}
      }
      <ng-content class=""></ng-content>
    </div>
    </td>
  `,
  styles: `:host{
display:contents;
  }`,
})
export class TableDataComponent {
  data = input<string>();
}
