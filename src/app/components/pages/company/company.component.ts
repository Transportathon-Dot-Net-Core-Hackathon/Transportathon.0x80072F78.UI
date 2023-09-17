import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CompanyDTO, Services } from 'src/app/core/services';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  companyDialog: boolean;

  companys: any[];

  company: CompanyDTO;

  selectedCompanys: any[];

  submitted: boolean;

  statuses: any[];

  constructor(private services: Services,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private httpClient: HttpClient
  ) { }
  cols: any[] = [];

  ngOnInit() {
    const url = 'https://localhost:44304/api/Transportathon/Company/GetAll';

    this.httpClient.get(url).subscribe(
      {
        next: (response: any) => {
          this.companys = response.data
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
      { field: 'companyName', header: 'companyName' },
      { field: 'title', header: 'title' },
      { field: 'name', header: 'name' },
      { field: 'surname', header: 'surname' },
      { field: 'city', header: 'city' },
      { field: 'district', header: 'district' },
      { field: 'street', header: 'street' },
      { field: 'alley', header: 'alley' },
      { field: 'buildingNumber', header: 'buildingNumber' },
      { field: 'apartmentNumber', header: 'apartmentNumber' },
      { field: 'postCode', header: 'postCode' },
      { field: 'vkn', header: 'vkn' },
      { field: 'companyUsersId', header: 'companyUsersId' },
      { field: 'companyUsers', header: 'companyUsers' },
    ];
  }

  openNew() {
    this.company = new CompanyDTO
    this.submitted = false;
    this.companyDialog = true;
  }

  deleteSelectedCompanys() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected companys?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.companys = this.companys.filter(val => !this.selectedCompanys.includes(val));
        this.selectedCompanys = null;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Companys Deleted', life: 3000 });
      }
    });
  }

  editCompany(company: any) {
    this.company = { ...company };
    this.companyDialog = true;
  }

  deleteCompany(company: any) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + company.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.companys = this.companys.filter(val => val.id !== company.id);
        this.company = new CompanyDTO;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'any Deleted', life: 3000 });
      }
    });
  }

  hideDialog() {
    this.companyDialog = false;
    this.submitted = false;
  }

  saveCompany() {
    this.submitted = true;


  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.companys.length; i++) {
      if (this.companys[i].id === id) {
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




