import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router, RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

import { IStaticMethods } from 'preline/preline';
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}
@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'adbox-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'adbox';
  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          window.HSStaticMethods.autoInit();
        }, 100);
      }
    });
  }
}
