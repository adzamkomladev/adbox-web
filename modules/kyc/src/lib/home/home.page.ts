import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsCard } from "./cards/stats.card";
import { KycTable } from "./tables/kyc.table";

@Component({
  selector: 'adbox-home',
  standalone: true,
  imports: [CommonModule, StatsCard, KycTable],
  templateUrl: './home.page.html',
  styles: ``,
})
export class HomePage { }
