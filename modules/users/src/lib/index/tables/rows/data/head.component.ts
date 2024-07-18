import { Component, input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'adbox-table-head',
  standalone: true,
  imports: [CommonModule],
  template: ` 
  <th scope="col" class="px-6 py-3 text-start capitalize">
    <div class="flex items-center gap-x-2">
      <span
        class="text-xs font-bold whitespace-nowrap tracking-wide text-black-300 uppercase dark:text-gray-200"
      >
   {{label()}}
   <ng-content></ng-content>
   
      </span>
    </div>
  </th>`,
  styles: ':host{display:contents}',
})
export class TableHeadComponent {
    label =input<string>()
}