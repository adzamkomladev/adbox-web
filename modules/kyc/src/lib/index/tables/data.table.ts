import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KycData, KycService } from '@adbox/shared/data-access';

@Component({
  selector: 'adbox-kyc-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data.table.html',
  styles: ``,
})
export class KycTable implements OnInit {
  private kycService = inject(KycService);

  KycData = signal<KycData | null>(null);
  kycs = computed(() => this.KycData()?.kycs || []);

  ngOnInit(): void {
    this.kycService.findAll({}).subscribe((res) => {
      console.log("kyc data ",res.data);
     this.KycData.set(res?.data ||null)
    });
  }
}
