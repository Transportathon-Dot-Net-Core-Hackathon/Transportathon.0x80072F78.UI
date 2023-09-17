import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { OfferDTO, Services } from 'src/app/core/services';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {

  offerDialog: boolean;

  offers: any[];

  offer: OfferDTO;

  selectedOffers: any[];

  submitted: boolean;

  statuses: any[];

  constructor(private services: Services,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private httpClient: HttpClient
  ) { }
  cols: any[] = [];

  ngOnInit() {
    const url = 'https://localhost:44304/api/Transportathon/Offer/GetAll';

    this.httpClient.get(url).subscribe(
      {
        next: (response: any) => {
          this.offers = response.data
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
      { field: 'transportationRequestId', header: 'transportationRequestId' },
      { field: 'transportationRequest', header: 'transportationRequest' },
      { field: 'companyId', header: 'companyId' },
      { field: 'company', header: 'company' },
      { field: 'userId', header: 'userId' },
      { field: 'user', header: 'user' },
      { field: 'teamId', header: 'teamId' },
      { field: 'team', header: 'team' },
      { field: 'vehicleId', header: 'vehicleId' },
      { field: 'vehicle', header: 'vehicle' },
      { field: 'price', header: 'price' },
      { field: 'note', header: 'note' },
      { field: 'transportationDate', header: 'transportationDate' },
      { field: 'offerTime', header: 'offerTime' },
      { field: 'status', header: 'status' },
    ];
  }

  openNew() {
    this.offer = new OfferDTO
    this.submitted = false;
    this.offerDialog = true;
  }

  deleteSelectedOffers() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected offers?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.offers = this.offers.filter(val => !this.selectedOffers.includes(val));
        this.selectedOffers = null;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Offers Deleted', life: 3000 });
      }
    });
  }

  editOffer(offer: any) {
    this.offer = { ...offer };
    this.offerDialog = true;
  }

  deleteOffer(offer: any) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + offer.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.offers = this.offers.filter(val => val.id !== offer.id);
        this.offer = new OfferDTO;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'any Deleted', life: 3000 });
      }
    });
  }

  hideDialog() {
    this.offerDialog = false;
    this.submitted = false;
  }

  saveOffer() {
    this.submitted = true;


  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.offers.length; i++) {
      if (this.offers[i].id === id) {
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




