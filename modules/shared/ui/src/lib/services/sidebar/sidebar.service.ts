import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

import HSOverlay from '@preline/overlay';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  close(id: string) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const element = this.document.getElementById(`hs-${id}`)!;
    HSOverlay.close(element);
  }

  open(id: string) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const element = this.document.getElementById(`hs-${id}`)!;
    HSOverlay.open(element);
  }
}
