import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Services } from 'src/app/core/services';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {

  vehicleDialog: boolean;

  vehicles: any[];

  vehicle: any;

  selectedVehicles: any[];
  mode: any;
  submitted: boolean;

  statuses: any[];

  constructor(private services: Services,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private httpClient: HttpClient
  ) { }
  cols: any[] = [];

  ngOnInit() {
    const url = 'https://localhost:44304/api/Transportathon/Vehicle/GetAll';

    this.httpClient.get(url).subscribe(
      {
        next: (response: any) => {
          this.vehicles = response.data
        },
        error: (error) => {
          debugger
          console.error('Failed to retrieve data', error);
        },
        complete: () => {
        }
      }
    );


    this.cols = [
      { field: 'id', header: 'id', hide: true },
      { field: 'vehicleType', header: 'vehicleType' },
      { field: 'vehicleLicensePlate', header: 'vehicleLicensePlate' },
      { field: 'vehicleVolumeCapacity', header: 'vehicleVolumeCapacity' },
      { field: 'vehicleWeightCapacity', header: 'vehicleWeightCapacity' },
      { field: 'vehicleStatus', header: 'vehicleStatus' },
      { field: 'driverId', header: 'driverId' },
      { field: 'driver', header: 'driver' },
      { field: 'userId', header: 'userId' },
    ];
  }

  openNew() {
    this.vehicle = {};
    this.submitted = false;
    this.vehicleDialog = true;
  }

  deleteSelectedVehicles() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected vehicles?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.vehicles = this.vehicles.filter(val => !this.selectedVehicles.includes(val));
        this.selectedVehicles = null;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Vehicles Deleted', life: 3000 });
      }
    });
  }

  editVehicle(vehicle: any) {
    this.vehicle = { ...vehicle };
    this.vehicleDialog = true;
  }

  deleteVehicle(vehicle: any) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + vehicle.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.vehicles = this.vehicles.filter(val => val.id !== vehicle.id);
        this.vehicle = {};
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'any Deleted', life: 3000 });
      }
    });
  }

  hideDialog() {
    this.vehicleDialog = false;
    this.submitted = false;
  }

  saveVehicle() {
    this.submitted = true;


  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.vehicles.length; i++) {
      if (this.vehicles[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  createId(): string {
    let id = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }
  modalClosed() {
    this.vehicleDialog = false;
  }
}




