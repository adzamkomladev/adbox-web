import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainIconComponent } from '../icon/mainIcon.component';
import { AccordionButtonComponent } from './accordion/button.component';
import { AccordionSubButtonComponent } from './accordion/subButton.component';
import { RouterLink ,RouterLinkActive} from '@angular/router';

@Component({
  selector: 'adbox-sidebar-index',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive, MainIconComponent,AccordionButtonComponent,AccordionSubButtonComponent],
  templateUrl: './index.component.html',
  styles: ``,
})
export class SideBarIndexComponent {


}
