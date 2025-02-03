import { Component, inject, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router, RouterModule } from '@angular/router';

import { IStaticMethods } from 'preline/preline';

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

@Component({
    imports: [RouterModule],
    selector: 'adbox-root',
    template: `<router-outlet></router-outlet>`,
    styles: ``
})
export class AppComponent implements OnInit {
  private router = inject(Router);

  title = 'adbox';

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
