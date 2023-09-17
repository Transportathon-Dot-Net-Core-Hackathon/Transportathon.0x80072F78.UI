import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Services } from 'src/app/core/services';

@Component({
  selector: 'app-offer-modal',
  templateUrl: './offer-modal.component.html',
  styleUrls: ['./offer-modal.component.scss']
})
export class OfferModalComponent implements OnInit {

  offerForms: FormGroup

  @Input() offerDialog: boolean = true;

  offers: any[];

  documentstatus: any = [
    { value: 0, label:"Pending"},
    { value: 1, label:"Approved"},
    { value: 2, label:"Completed"},
    { value: 2, label:"Canceled"},
    { value: 2, label: "Rejected" },
  ]

  constructor(private services: Services,
    private fb: FormBuilder,) {

  }

  ngOnInit(): void {
    this.offerForms

    this.offerForms = this.fb.group({
      id: [],
      TransportationRequestId: [],
      TransportationRequest: [],
      CompanyId: [],
      Company: [],
      UserId: [],
      User: [],
      TeamId: [],
      Team: [],
      VehicleId: [],
      Vehicle: [],
      Price: [],
      Note: [],
      TransportationDate: [],
      OfferTime: [],
      Status: [],
    })
  }





  hideDialog() {
    this.offerDialog = false;
  }

  saveOffer() {



  }
}
