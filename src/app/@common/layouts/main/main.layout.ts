import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MainIconComponent } from '../../components/icon/mainIcon.component';
import { SideBarIndexComponent } from '../../components/sidebar/index.component';
import { HeaderComponent } from '../../components/header/index.component';
import { SideBarToggleComponent } from '../../components/sidebar/toggle/toggle.component';

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive,MainIconComponent, RouterOutlet,SideBarIndexComponent,HeaderComponent,SideBarToggleComponent],
  templateUrl: './main.layout.html',
  styles: ``,
})
export class MainLayout { }
