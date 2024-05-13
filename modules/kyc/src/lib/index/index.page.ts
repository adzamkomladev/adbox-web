import { Component,computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KycsComponent } from './table/kycs.component';
import { IconComponent, Kyc} from '@adbox/shared/data-access';
import { ShowComponent } from './details/show.component';

@Component({
  selector: 'adbox-index',
  standalone: true,
  imports: [CommonModule, KycsComponent,ShowComponent,IconComponent],
  templateUrl: './index.page.html',
  styles: ``,
})
export class IndexPage {
  // getSelectedKYC = signal<Kyc | null>(null);
  getSelectedKYC = signal<Kyc | null>({
      id: '1c864410-c57b-48a0-a4bd-b077bcd43382',
      createdAt: '2024-04-23T20:12:21.955Z',
      updatedAt: '2024-04-23T20:12:21.955Z',
      user: {
        id: '791e7642-e55c-4527-a7b6-7c4e3f0f94af',
        createdAt: '2024-04-23T20:12:21.956Z',
        updatedAt: '2024-04-23T20:12:21.956Z',
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
      identity: null,
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
  selectedKycDetails = computed(() => this.getSelectedKYC());

  changeSelectedKYC(kyc: Kyc) {
    this.getSelectedKYC.set(kyc);
  }



}
