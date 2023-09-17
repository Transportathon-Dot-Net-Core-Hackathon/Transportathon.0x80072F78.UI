import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DriverDTO, Services } from 'src/app/core/services';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss']
})
export class DriverComponent implements OnInit {

  driverDialog: boolean;

  drivers: any[];

  driver: DriverDTO;

  selectedDrivers: any[];

  submitted: boolean;

  statuses: any[];

  constructor(private services: Services,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private httpClient: HttpClient
  ) { }
  cols: any[] = [];

  ngOnInit() {
    const url = 'https://localhost:44304/api/Transportathon/Driver/GetAll';

    this.httpClient.get(url).subscribe(
      {
        next: (response: any) => {
          this.drivers = response.data
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
      { field: 'name', header: 'name' },
      { field: 'surname', header: 'surname' },
      { field: 'experience', header: 'experience' },
      { field: 'phoneNumber', header: 'phoneNumber' },
      { field: 'eMail', header: 'eMail' },
      { field: 'age', header: 'age' },
      { field: 'drivingLicenceTypes', header: 'drivingLicenceTypes' },
    ];
  }
  mode: string;
  openNew() {
    this.driver = new DriverDTO
    this.submitted = false;
    this.mode = 'add';
    this.driverDialog = true;
  }

  deleteSelectedDrivers() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected drivers?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.drivers = this.drivers.filter(val => !this.selectedDrivers.includes(val));
        this.selectedDrivers = null;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Drivers Deleted', life: 3000 });
      }
    });
  }

  editDriver(driver: any) {
    this.driver = { ...driver };
    this.mode = 'edit';

    this.driverDialog = true;
  }

  deleteDriver(driver: any) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + driver.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {

        this.services.delete4(driver.id).subscribe((result: any) => {
          debugger
        })
      }
    });
  }
  rowData:any
  hideDialog() {
    this.driverDialog = false;
    this.submitted = false;
  }

  saveDriver() {
    this.submitted = true;


  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.drivers.length; i++) {
      if (this.drivers[i].id === id) {
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
    this.driverDialog = false;
  }
}




