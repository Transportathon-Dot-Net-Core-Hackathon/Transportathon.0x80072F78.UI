import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Services } from 'src/app/core/services';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  addressDialog: boolean;

  addresss: any[];

  address: any;

  selectedAddresss: any[];

  submitted: boolean;

  statuses: any[];

  constructor(private services: Services,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private httpClient: HttpClient
  ) { }
  cols: any[] = [];

  ngOnInit() {
    const url = 'https://localhost:44304/api/Transportathon/Address/GetAll';

    this.httpClient.get(url).subscribe(
      {
        next: (response: any) => {
          this.addresss = response.data
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
      { field: 'city', header: 'city' },
      { field: 'district', header: 'district' },
      { field: 'localAddress', header: 'localAddress' },
      { field: 'userId', header: 'userId' }
    ];
  }

  openNew() {
    this.address = {}
    this.submitted = false;
    this.addressDialog = true;
    this.mode = 'add';
  }

  deleteSelectedAddresss() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected addresss?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.addresss = this.addresss.filter(val => !this.selectedAddresss.includes(val));
        this.selectedAddresss = null;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Addresss Deleted', life: 3000 });
      }
    });
  }
  mode: any
  editAddress(address: any) {
    this.address = { ...address };
    this.addressDialog = true;
    this.mode = 'edit';
  }

  deleteAddress(address: any) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + address.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.addresss = this.addresss.filter(val => val.id !== address.id);
        this.address = {};
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'any Deleted', life: 3000 });
      }
    });
  }

  hideDialog() {
    this.addressDialog = false;
    this.submitted = false;
  }

  saveAddress() {
    this.submitted = true;


  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.addresss.length; i++) {
      if (this.addresss[i].id === id) {
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
    this.addressDialog = false;
  }
}




