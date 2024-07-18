import {Component, input} from '@angular/core';
import {CommonModule} from '@angular/common';
import { IconComponent, KYC } from '@adbox/shared/data-access';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'adbox-kyc-show-details',
  standalone: true,
  imports: [CommonModule,IconComponent,RouterLink],
  templateUrl: './show.component.html',
  styles: `
 :host{
  display:content
 }`,
})
export class KycShowDetailsComponent {

  selectedKYC = input <KYC|null>()

  
  
}
