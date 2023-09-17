import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Services } from 'src/app/core/services';

@Component({
  selector: 'app-vehicle-modal',
  templateUrl: './vehicle-modal.component.html',
  styleUrls: ['./vehicle-modal.component.scss']
})
export class VehicleModalComponent implements OnInit {

  vehicleForms: FormGroup
  @Output() modalClosed: EventEmitter<any> = new EventEmitter<any>()
  @Input() vehicleDialog: boolean = true;
  @Input() mode: string;

  vehicles: any[];

  vehicleStatus: any = [
    { value: 0, label: "Available" },
    { value: 1, label: "BeingUsed" },
    { value: 2, label: "InMaintenance" },
    { value: 2, label: "OutOfUse" },
  ]
  vehicleType: any = [
    { value: 0, label: "PickupTruck" },
    { value: 1, label: "Truck" },
  ]


  constructor(private services: Services,
    private fb: FormBuilder,) {

  }

  ngOnInit(): void {
    this.vehicleForms

    this.vehicleForms = this.fb.group({
      id: [],
      vehicleType: [],
      vehicleLicensePlate: [],
      vehicleVolumeCapacity: [],
      vehicleWeightCapacity: [],
      vehicleStatus: [],
      driverId: [],
      driver: [],
      userId: [],
    })
  }





  hideDialog() {
    this.vehicleDialog = false;
    this.modalClosed.emit(true)
  }

  saveVehicle() {



  }
}
