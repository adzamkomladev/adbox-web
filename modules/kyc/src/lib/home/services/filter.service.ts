import { computed, inject, Injectable, signal } from '@angular/core';

import { StoreService } from '@adbox/shared/data-access';
import { Filter, Status } from '../models/filter.model';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private store = inject(StoreService);

  private readonly storeKey = 'kyc.filter';
  private readonly filterState = signal<Filter>(new Filter());

  filter = computed(() => this.filterState());

  constructor() {
    this.setupFilter();
  }

  setFilter(filter: Filter) {
    const data = { ...filter };
    const containsAll = data.statuses.includes(Status.ALL) || data.statuses.length === 0;
    data.statuses = containsAll ? [Status.ALL] : data.statuses;

    this.setFilterData({ ...data });
  }

  clearFilter() {
    this.store.clear(this.storeKey);
    this.filterState.set(new Filter());
  }

  setupFilter() {
    const filter: Filter = this.store.get(this.storeKey);
    this.filterState.set(filter);
    console.log(filter)
  }

  private setFilterData(filter: Filter) {
    this.store.set(this.storeKey, filter);
    this.filterState.set(filter);
  }
}
