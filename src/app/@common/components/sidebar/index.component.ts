import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainIconComponent } from '../icon/mainIcon.component';
import { AccordionButtonComponent } from './accordion/button.component';
import { RouterLink ,RouterLinkActive} from '@angular/router';
import { LinkButtonComponent } from './link/button.component';

@Component({
  selector: 'adbox-sidebar-index',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive,LinkButtonComponent, MainIconComponent,AccordionButtonComponent],
  templateUrl: './index.component.html',
  styles: ``,
})

export class SideBarIndexComponent {

}
