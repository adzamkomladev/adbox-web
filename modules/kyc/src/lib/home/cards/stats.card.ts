import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'adbox-kyc-stats-card',
    imports: [CommonModule],
    templateUrl: './stats.card.html',
    styles: `:host { display: block; }`
})
export class StatsCard { }
