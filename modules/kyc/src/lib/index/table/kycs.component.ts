import { Component, EventEmitter, OnInit, Output, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent, Kyc, KycResponse, KycService } from '@adbox/shared/data-access';

@Component({
  selector: 'adbox-kycs-table',
  standalone: true,
  imports: [CommonModule,IconComponent],
  templateUrl: './kycs.component.html',
  styles: ``,
})
export class KycsComponent implements OnInit {
  private kycService = inject(KycService);

  usersPerPage = 10;
  totalPages = 1;
  currentPage = 1;
  loading = false;
  isSelected = true;
  @Output() selectedKYC = new EventEmitter<Kyc>();

  KycData = signal<KycResponse | null>(null);
  kycs = computed(() => this.KycData()?.kycs || []);

  next = computed(() => this.KycData()?.page !== this.KycData()?.totalPages);
  prev = computed(() => this.KycData()?.page !== 1);

  ngOnInit(): void {
    this.kycService.findAll({}).subscribe((res) => {
      console.log('kyc data ', res.data);
      this.KycData.set(res?.data || null);
      this.currentPage = res?.data?.page || 1;
      this.usersPerPage = res?.data?.size || 10;
      this.totalPages = res?.data?.totalPages || 1;
      this.loading = false;
    });
  }

  fetchData = () => {
    this.kycService
      .findAll({ page: this.currentPage, size: this.usersPerPage })
      .subscribe((res) => this.KycData.set(res?.data || null));
    return (this.loading = false);
  };

  onNext() {
    this.loading = true;
    // if (this.currentPage < this.totalPages) {
    this.currentPage++;
    this.fetchData();
  }
  // }

  onPrevious() {
    this.loading = true;
    // if (this.currentPage > 1) {
    this.currentPage--;
    this.fetchData();
    // }
  }

  onSelected(kyc:Kyc){
    this.selectedKYC.emit(kyc);
  }
}
