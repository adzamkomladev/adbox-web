import {
  Component,
  OnInit,
  computed,
  inject,
  output,
  signal,
} from '@angular/core';
import {CommonModule} from '@angular/common';

import {
  IconComponent,
  KYCService,
  UsersRequest,
  UsersResponse,
  UsersService,
} from '@adbox/shared/data-access';
import { KYC, KYCResponse} from 'modules/shared/data-access/src/lib/kyc/models/kyc.model';
import { KycShowDetailsComponent } from '../details/show.component';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
@Component({
  selector:
    'adbox-kyc-table',
  standalone: true,
  imports: [
    CommonModule,IconComponent,KycShowDetailsComponent,RouterLink,RouterOutlet
  ],
  templateUrl:
    './kyc.component.html',
  styles: `
    :host {
      display:block;}
  `,
})
export class KYCTable
  implements OnInit
{
  private kycService =
    inject(KYCService);

  selected = output<KYC>();
  addUser = output<void>();


 getSelectedKYC = signal<KYC | null>({
      id: '1c864410-c57b-48a0-a4bd-b077bcd43382',
      createdAt: '2024-04-23T20:12:21.955Z',
      updatedAt: '2024-04-23T20:12:21.955Z',
      user: {
        id: '791e7642-e55c-4527-a7b6-7c4e3f0f94af',
        createdAt: '2024-04-23T20:12:21.956Z',
        updatedAt: '2024-04-23T20:12:21.956Z',
        age:2,
        role: {
          id: 'f85ae4cb-3a1a-4d76-8c0b-f01a781d1966',
          createdAt: '2024-04-23T20:12:20.479Z',
          updatedAt: '2024-04-23T20:12:20.479Z',
          name: 'Publisher',
          description:
            'This user can publish and maintain campaigns on the system',
          code: 'PUBLISHER',
        },
        kyc: '1c864410-c57b-48a0-a4bd-b077bcd43382',
        firstName: 'Kristy',
        lastName: 'Boyer',
        avatar: 'https://avatars.githubusercontent.com/u/56009010',
        email: 'Violette18@hotmail.com',
        phone: null,
        phoneVerifiedAt: null,
        dateOfBirth: '1995-04-29T00:00:00.000Z',
        sex: 'male',
        roleTitle: 'Publisher',
        status: 'active',
      },
      level: 1,
      country: 'GH',
      identity: {
        atempt:2,
back:'',
combined:'',
front:'',
idType:'',
      },
      business: null,
      attempts: [
        {
          id: '5b8e3fd0-d22c-4c84-a408-bc8d6d57bd24',
          createdAt: '2024-04-23T20:12:21.955Z',
          updatedAt: '2024-04-23T20:12:21.955Z',
          kyc: '1c864410-c57b-48a0-a4bd-b077bcd43382',
          updatedBy: null,
          status: 'pending',
          level: 2,
          reason: null,
          details: {
            type: 0,
            level: 2,
            idType: 'national_id',
            front:
              'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/422.jpg',
            back: 'https://avatars.githubusercontent.com/u/98846764',
            combined: 'https://avatars.githubusercontent.com/u/86884181',
          },
        },
      ],
    });

  data =
    signal<KYCResponse | null>(
      null
    );

    paginationPages = signal<number[]>([]);

  kycs = computed(
    () =>
      this.data()?.kycs || []
  );

  next = computed(
    () =>
      this.data()?.page !==
      this.data()?.totalPages
  );
  prev = computed(
    () =>
      this.data()?.page !== 1
  );
  page = computed(
    () =>
      this.data()?.page || 1
  );
  size = computed(
    () =>
      this.data()?.size || 20
  );

  paginationsPages = computed(() => {
    const totalPages = this.data()?.totalPages || 1; 
    const pages: number[] = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  });


  ngOnInit(): void {
    this.kycService
      .findAll({})
      .subscribe((res) =>
        this.data.set(
          res?.data || null
        )
      );

     
  }

  onSelect(data: KYC) {
    this.selected.emit(data);
    console.log('data',data.id)
  }

  onAddUser() {
    this.addUser.emit();
  }

  onFetch(page:number) {
    this.kycService
      .findAll({
        page: page,
        size: this.size(),
      })
      .subscribe((res) =>
        this.data.set(
          res?.data ||
            this.data()
        )
      );
  }

  changeKyc(){
    document.getElementById('hs-vertically-centered-modal')?.setAttribute('open','true')
  }
  
  onNext() {
    this.onFetch(this.page() + 1)
  }

  onPrev() {
   this.onFetch(this.page() - 1)
  }

  onGotoPage(page:number) {
    this.onFetch(page)
  }
    
}
