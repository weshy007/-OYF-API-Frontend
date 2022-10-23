import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillManagerComponent } from './bill-manager/bill-manager.component';
import { TaxCalcComponent } from './Entities/tax-calc/tax-calc.component';
import { TeamsComponent } from './Entities/teams/teams.component';

const routes: Routes = [
  {
    path:'',
    component:TaxCalcComponent
  },

  {
    path:'tax',
    component:TaxCalcComponent
  },

  {
    path:'teams',
    component:TeamsComponent
  },
  {
    path:'bills',
    component:BillManagerComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
