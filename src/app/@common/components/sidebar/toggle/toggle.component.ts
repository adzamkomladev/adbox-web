import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainIconComponent } from '../../icon/mainIcon.component';

@Component({
  selector: 'adbox-sidebar-toggle',
  standalone: true,
  imports: [CommonModule,MainIconComponent],
  templateUrl: './toggle.component.html',
  styles: ``,
})
export class SideBarToggleComponent {}
