import { Component, Input, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainIconComponent } from '../../icon/mainIcon.component';

@Component({
  selector: 'adbox-sidebar-accordion-button',
  standalone: true,
  imports: [CommonModule, MainIconComponent],
  template: `<li class="hs-accordion" id="account-accordion">
    <button
      type="button"
      class="hs-accordion-toggle w-full text-start flex  items-center justify-between  py-2 px-2.5 hs-accordion-active:text-black-300 hs-accordion-active:bg-black-40 hs-accordion-active:hover:bg-black-20  rounded-lg hover:bg-black-20 dark:bg-black-800 dark:hover:bg-black-900  dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-black-600"
    >
      <div class="flex gap-3.5 capitalize">
        @if (accordionIconName()) {
        <adbox-main-icon [name]="accordionIconName()" />
        }
        {{ label() }}
      </div>

      <adbox-main-icon name="accordion" />
    </button>

    <div
      id="account-accordion-child"
      class="hs-accordion-content pl-4 w-full overflow-hidden transition-[height] duration-300 hidden"
    >
      <ul class="ps-2 border-l-2 border-black-40 my-2">
        <ng-content></ng-content>
      </ul>
    </div>
  </li> `,
  styles: ``,
})
export class AccordionButtonComponent {
  label = input<string>('label');
  accordionIconName = input<string>();
}
