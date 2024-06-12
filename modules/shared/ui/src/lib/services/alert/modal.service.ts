import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

import { HSOverlay } from 'preline';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  close(id: string) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const element = this.document.getElementById(`hs-${id}`)!;
    HSOverlay.close(element);
  }

  open(id: string) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const element = this.document.getElementById(`hs-${id}`)!;
    console.log('helcaaaaaattttttsss', element)
    HSOverlay.open(element);
  }
}
