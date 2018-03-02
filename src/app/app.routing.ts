import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillComponent } from './bill/bill.component';

const appRoutes: Routes = [
  {
     path: '',
     component: BillComponent
   }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
