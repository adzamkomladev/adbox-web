import { Component, OnInit, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainIconComponent } from '../../icon/mainIcon.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'adbox-sidebar-toggle',
  standalone: true,
  imports: [CommonModule,MainIconComponent],
  templateUrl: './toggle.component.html',
  styles: `:host{
    display:content
  }`,
})
export class SideBarToggleComponent implements OnInit{

  ngOnInit(): void {
    this.activatedRoute.url.subscribe((event) => {
      console.log(event[0]); // It's an array remember [0]
      console.log(event[0].path); // e.g. /products
      console.log(event[0].parameters); // e.g. { id: 'x8klP0' }
    });  }

  activeRoute =new ActivatedRoute()

  page =computed(()=>{
this.activeRoute
  })

  constructor(private activatedRoute: ActivatedRoute) {
// console.log('s')
}
}