import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainIconComponent } from '../icon/mainIcon.component';

@Component({
  selector: 'adbox-header',
  standalone: true,
  imports: [CommonModule,MainIconComponent],
  templateUrl: './index.component.html',
  styles: ``,
})
export class HeaderComponent {}
