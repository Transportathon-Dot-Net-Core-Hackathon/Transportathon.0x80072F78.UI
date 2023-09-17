import { Component, OnInit } from '@angular/core';
import { Services } from './core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  constructor(private services: Services) {

  }
  async ngOnInit(): Promise<void> {
  }
}
