import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'adbox-bg-net',
  standalone: true,
  imports: [CommonModule],
  template: `<div
    class=" absolute left-0 grid gap-2 grid-cols-20 gap-y-0 gap-x-0 overflow-clip border border-transparent opacity-50 h-screen w-screen top-0"
  >
    <span
      *ngFor="let _ of arr"
      class="bg-transparent borde  bg-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,rgba(0,0,0,0.40)_0%,rgba(255,255,255,0.00)_100%)] border-black- w-[5vw] h-[10vh]"
    ></span>
  </div>`,
  styles: ``,
})
export class BgNetComponent {
  arr = new Array(200);
}
