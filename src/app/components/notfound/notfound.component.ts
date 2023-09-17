import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-notfound',
    templateUrl: './notfound.component.html',
})
export class NotfoundComponent {

    constructor(
        public router: Router,
    ) { }
}