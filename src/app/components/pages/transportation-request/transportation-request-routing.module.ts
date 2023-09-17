import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransportationRequestComponent } from './transportation-request.component';

const routes: Routes = [{ path: '', component: TransportationRequestComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransportationRequestRoutingModule { }
