import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Services } from 'src/app/core/services';

@Component({
  selector: 'app-driver-modal',
  templateUrl: './driver-modal.component.html',
  styleUrls: ['./driver-modal.component.scss']
})
export class DriverModalComponent implements OnInit {

  driverForms: FormGroup
  @Input() mode: string;

  @Output() modalClosed: EventEmitter<any> = new EventEmitter<any>()
  @Input() driverDialog: boolean = true;
  @Input() rowData: any;

  drivers: any[];

  licence: any = [
    { value: 0, label: "B" },
    { value: 1, label: "C" },
    { value: 2, label: "CE" },
  ]

  constructor(private services: Services,
    private fb: FormBuilder,
    private httpClient: HttpClient,

  ) {

  }

  ngOnInit(): void {
    this.driverForms

    this.driverForms = this.fb.group({
      id: [],
      name: [],
      surname: [],
      experience: [],
      phoneNumber: [],
      eMail: [],
      age: [],
      drivingLicenceTypes: [],
    })

    if (this.mode == 'edit') {
      this.driverForms.patchValue(this.rowData)
    }
  }





  hideDialog() {
    this.modalClosed.emit(true)
    this.driverDialog = false;
  }

  saveDriver() {
    if (this.mode == 'add') {
      this.services.create4((this.driverForms.value)).subscribe(
        (result: any) => {
          this.modalClosed.emit(true)
        },
        err => {

        }
      )
    }
    else {
      this.services.update4((this.driverForms.value)).subscribe((result: any) => {
        this.modalClosed.emit(true)
      },
        err => {

        })
    }

  }
}
