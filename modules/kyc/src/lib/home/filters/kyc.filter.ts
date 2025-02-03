import { AfterViewInit, Component, computed, ElementRef, inject, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

import { FilterService } from '../services/filter.service';
import { Status } from '../models/filter.model';

@Component({
    selector: 'adbox-kyc-filter',
    imports: [CommonModule],
    templateUrl: './kyc.filter.html',
    styles: ``
})
export class KycFilter implements AfterViewInit {

  private filterService = inject(FilterService);

  filter = computed(() => this.filterService.filter());
  filterCount = computed(() => this.filter().statuses.length);
  isPendingChecked = computed(() => this.filter().statuses.includes(Status.PENDING));
  isFailedChecked = computed(() => this.filter().statuses.includes(Status.FAILED));
  isAllChecked = computed(() => this.filter().statuses.includes(Status.ALL));

  search = viewChild.required<ElementRef<HTMLInputElement>>('search');

  ngAfterViewInit(): void {
    fromEvent(this.search().nativeElement, 'keyup')
      .pipe(
        map((event: any) => event.target.value),
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe((value: string) => this.filterService.setFilter({ ...this.filter(), search: value }));

    this.search().nativeElement.setAttribute('value', this.filter().search || '');

  }

}
