import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Services } from 'src/app/core/services';

@Component({
  selector: 'app-transportation-request-modal',
  templateUrl: './transportation-request-modal.component.html',
  styleUrls: ['./transportation-request-modal.component.scss']
})
export class TransportationRequestModalComponent implements OnInit {

  transportationRequestForms: FormGroup

  @Input() transportationRequestDialog: boolean = true;

  transportationRequests: any[];

  document: any = [
    { value: 0, label: "Pending" },
    { value: 1, label: "Approved" },
    { value: 2, label: "Completed" },
    { value: 3, label: "Canceled" },
    { value: 4, label: "Rejected" },  
  ]
  transportation: any = [
    { value: 0, label: "HomeToHome" },
    { value: 1, label: "OfficeTransportation" },
    { value: 2, label: "LargeVolume" },
    { value: 3, label: "HeavyGoods" },
  ]

  constructor(private services: Services,
    private fb: FormBuilder,) {

  }

  ngOnInit(): void {
    this.transportationRequestForms

    this.transportationRequestForms = this.fb.group({
      id: [],
      RequestType: [],
      OutputAddressId: [],
      OutputAddress: [],
      DestinationAddressId: [],
      DestinationAddress: [],
      UserId: [],
      User: [],
      Weight: [],
      Volume: [],
      Note: [],
      FirstDateRange: [],
      LastDateRange: [],
      CreatedDate: [],
      DocumentStatus: [],
    })
  }





  hideDialog() {
    this.transportationRequestDialog = false;
  }

  saveTransportationRequest() {



  }
}
