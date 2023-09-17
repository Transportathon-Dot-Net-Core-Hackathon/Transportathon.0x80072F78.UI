import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamWorkerComponent } from './teamworker.component';

const routes: Routes = [{ path: '', component: TeamWorkerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamworkerRoutingModule { }
