import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
// import { MainIconComponent } from '@app/@common/components/icon/mainIcon.component';
import { SideBarIndexComponent } from '@app/@common/components/sidebar/index.component';
import { HeaderComponent } from '@app/@common/components/header/index.component';
import { SideBarToggleComponent } from '@app/@common/components/sidebar/toggle/toggle.component';

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet,SideBarIndexComponent,HeaderComponent,SideBarToggleComponent],
  templateUrl: './main.layout.html',
  styles: ``,
})
export class MainLayout { }
