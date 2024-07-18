import {Routes } from "@angular/router";
import { KycShowDetailsComponent } from "./details/show.component";

export const kycChildRoute: Routes = [
    {
      path: 'detail', // Example child route path
      component:KycShowDetailsComponent, // Child component to be loaded
      // ... other child route configurations
    },
    // ... additional child routes
  ];