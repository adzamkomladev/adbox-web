import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BgNetComponent, IconComponent, Kyc } from '@adbox/shared/data-access';

@Component({
  selector: 'adbox-show',
  standalone: true,
  imports: [CommonModule,IconComponent,BgNetComponent],
  templateUrl: './show.component.html',
  styles: ``,
})
export class ShowComponent {
  @Input() selectedKycDetails!: Kyc |null ;


 
}
