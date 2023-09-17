import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] },

                    { label: 'Driver Informations', icon: 'pi pi-fw pi-id-card', routerLink: ['/pages/Driver'] },
                    { label: 'Teamworker Informations', icon: 'pi pi-fw pi-users', routerLink: ['/pages/Teamworker'] },
                    { label: 'Address Informations', icon: 'pi pi-fw pi-map', routerLink: ['/pages/Address'] },
                    { label: 'Vehicle Informations', icon: 'pi pi-fw pi-car', routerLink: ['/pages/Vehicle'] },
                    // { label: 'TransportationRequest', icon: 'pi pi-fw pi-file-edit', routerLink: ['/pages/TransportationRequest'] },
                    { label: 'Company Informations', icon: 'pi pi-fw pi-building', routerLink: ['/pages/company'] },
                ]
            },
            // {
            //     label: 'Prime Blocks',
            //     items: [
            //         { label: 'Free Blocks', icon: 'pi pi-fw pi-eye', routerLink: ['/blocks'], badge: 'NEW' },
            //         { label: 'All Blocks', icon: 'pi pi-fw pi-globe', url: ['https://www.primefaces.org/primeblocks-ng'], target: '_blank' },
            //     ]
            // },
            // {
            //     label: 'Utilities',
            //     items: [
            //         { label: 'PrimeIcons', icon: 'pi pi-fw pi-prime', routerLink: ['/utilities/icons'] },
            //         { label: 'PrimeFlex', icon: 'pi pi-fw pi-desktop', url: ['https://www.primefaces.org/primeflex/'], target: '_blank' },
            //     ]
            // },

        ];
    }
}
