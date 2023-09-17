import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'empty', loadChildren: () => import('./empty/emptydemo.module').then(m => m.EmptyDemoModule) },
        { path: 'timeline', loadChildren: () => import('./timeline/timelinedemo.module').then(m => m.TimelineDemoModule) },

        { path: 'Driver', loadChildren: () => import('./driver/driver.module').then(m => m.DriverModule) },
        { path: 'Teamworker', loadChildren: () => import('./teamworker/teamworker.module').then(m => m.TeamWorkerModule) },
        { path: 'Address', loadChildren: () => import('./address/address.module').then(m => m.AddressModule) },
        { path: 'Vehicle', loadChildren: () => import('./vehicle/vehicle.module').then(m => m.VehicleModule) },
        { path: 'transportationRequest', loadChildren: () => import('./transportation-request/transportation-request.module').then(m => m.TransportationRequestModule) },
        { path: 'company', loadChildren: () => import('./company/company.module').then(m => m.CompanyModule) },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
