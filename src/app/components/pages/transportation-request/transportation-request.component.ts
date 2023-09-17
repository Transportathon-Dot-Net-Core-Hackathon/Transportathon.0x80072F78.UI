import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TransportationRequestDTO, Services } from 'src/app/core/services';

@Component({
  selector: 'app-transportation-request',
  templateUrl: './transportation-request.component.html',
  styleUrls: ['./transportation-request.component.scss']
})
export class TransportationRequestComponent implements OnInit {

  transportationRequestDialog: boolean;

  transportationRequests: any[];

  transportationRequest: TransportationRequestDTO;

  selectedTransportationRequests: any[];

  submitted: boolean;

  statuses: any[];

  constructor(private services: Services,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private httpClient: HttpClient
  ) { }
  cols: any[] = [];

  ngOnInit() {
    const url = 'https://localhost:44304/api/Transportathon/TransportationRequest/GetAll';

    this.httpClient.get(url).subscribe(
      {
        next: (response: any) => {
          this.transportationRequests = response.data
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
      { field: 'requestType', header: 'requestType' },
      { field: 'outputAddressId', header: 'outputAddressId' },
      { field: 'outputAddress', header: 'outputAddress' },
      { field: 'destinationAddressId', header: 'destinationAddressId' },
      { field: 'destinationAddress', header: 'destinationAddress' },
      { field: 'userId', header: 'userId' },
      { field: 'user', header: 'user' },
      { field: 'weight', header: 'weight' },
      { field: 'volume', header: 'volume' },
      { field: 'note', header: 'note' },
      { field: 'firstDateRange', header: 'firstDateRange' },
      { field: 'lastDateRange', header: 'lastDateRange' },
      { field: 'createdDate', header: 'createdDate' },
      { field: 'documentStatus', header: 'documentStatus' },
    ];
  }

  openNew() {
    this.transportationRequest = new TransportationRequestDTO
    this.submitted = false;
    this.transportationRequestDialog = true;
  }

  deleteSelectedTransportationRequests() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected transportationRequests?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.transportationRequests = this.transportationRequests.filter(val => !this.selectedTransportationRequests.includes(val));
        this.selectedTransportationRequests = null;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'TransportationRequests Deleted', life: 3000 });
      }
    });
  }

  editTransportationRequest(transportationRequest: any) {
    this.transportationRequest = { ...transportationRequest };
    this.transportationRequestDialog = true;
  }

  deleteTransportationRequest(transportationRequest: any) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + transportationRequest.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.transportationRequests = this.transportationRequests.filter(val => val.id !== transportationRequest.id);
        this.transportationRequest = new TransportationRequestDTO;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'any Deleted', life: 3000 });
      }
    });
  }

  hideDialog() {
    this.transportationRequestDialog = false;
    this.submitted = false;
  }

  saveTransportationRequest() {
    this.submitted = true;


  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.transportationRequests.length; i++) {
      if (this.transportationRequests[i].id === id) {
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
}




