import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
    imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
    templateUrl: './main.layout.html',
    styles: ``
})
export class MainLayout { }
