import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { range, take } from 'rxjs';

@Component({
  selector: 'adbox-bg-net',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="absolute grid grid-cols-[20] gap-0 overflow-clip border border-transparent">
    <span
      *ngFor="let _ of arr"
      class="bg-transparent border border-black-400 w-[5vw] h-[10vh]"
    ></span>
  </div>`,
  styles: ``,
})
export class BgNetComponent {
  arr = new Array(200)
}
