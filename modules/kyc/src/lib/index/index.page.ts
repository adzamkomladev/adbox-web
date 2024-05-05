import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KycTable } from './tables/data.table';

@Component({
  selector: 'adbox-index',
  standalone: true,
  imports: [CommonModule,KycTable],
  templateUrl: './index.page.html',
  styles: ``,
})
export class IndexPage {}
