import { Component, Input, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainIconComponent } from '../../icon/mainIcon.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SideBarLink } from '../../modules';

@Component({
  selector: 'adbox-sidebar-link-button',
  standalone: true,
  imports: [CommonModule, MainIconComponent, RouterLink, RouterLinkActive],
  template: ` <li class="p-[1px]">
    <a
      class="flex active:scale-[0.99] items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-lg  hover:bg-black-20 dark:bg-black-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-black-600 {{
        linkStyle()
      }}"
      [routerLink]="[routeTo()]"
      [routerLinkActive]="isActiveStyle()"
      [routerLinkActiveOptions]="{ exact: true }"
    >
    <ng-content select=[icon]></ng-content>
    
      @if (iconName()) {
      <adbox-main-icon [name]="iconName()" />
      }
      {{ label() }}
    </a>
        <ng-content></ng-content>

  </li>`,
})
export class LinkButtonComponent {
  label = input<string>();
  routeTo = input<string>();
  iconName = input<string>();

  isActiveStyle = input<string>('bg-black-40');
  linkStyle = input<string>('');
}