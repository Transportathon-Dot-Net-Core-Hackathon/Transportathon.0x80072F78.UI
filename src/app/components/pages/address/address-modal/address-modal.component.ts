import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Services } from 'src/app/core/services';

@Component({
  selector: 'app-address-modal',
  templateUrl: './address-modal.component.html',
  styleUrls: ['./address-modal.component.scss']
})
export class AddressModalComponent {
  addressForms: FormGroup

  @Input() addressDialog: boolean = true;
  @Input() mode: string;

  @Output() modalClosed: EventEmitter<any> = new EventEmitter<any>()
  addresses: any[];

  licence: any = [
    { value: 0, label: "OutputAddress" },
    { value: 1, label: "DestinationAddress" }
  ]

  constructor(private services: Services,
    private fb: FormBuilder,) {

  }

  ngOnInit(): void {
    this.addressForms

    this.addressForms = this.fb.group({
      id: [],
      addressType: [],
      name: [],
      city: [],
      district: [],
      localAddress: [],
    })
  }





  hideDialog() {
    this.modalClosed.emit(true)
    this.addressDialog = false;
  }

  saveAddress() {
    if (this.mode == 'add') {
      this.services.create((this.addressForms.value)).subscribe((result: any) => {
        debugger
      })
    }
    else{
      this.services.update((this.addressForms.value)).subscribe((result: any) => {
        debugger
      })
    }
    this.modalClosed.emit(true)
  }
}
