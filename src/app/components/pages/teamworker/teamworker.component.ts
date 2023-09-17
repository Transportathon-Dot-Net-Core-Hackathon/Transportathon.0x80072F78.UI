import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import {  Services } from 'src/app/core/services';

@Component({
  selector: 'app-teamWorker',
  templateUrl: './teamWorker.component.html',
  styleUrls: ['./teamWorker.component.scss']
})
export class TeamWorkerComponent implements OnInit {

  teamWorkerDialog: boolean;

  teamWorkers: any[];

  teamWorker: any;

  selectedTeamWorkers: any[];

  submitted: boolean;

  statuses: any[];

  constructor(private services: Services,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private httpClient: HttpClient
  ) { }
  cols: any[] = [];

  ngOnInit() {
    const url = 'https://localhost:44304/api/Transportathon/TeamWorker/GetAll';

    this.httpClient.get(url).subscribe(
      {
        next: (response: any) => {
          this.teamWorkers = response.data
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
    ];
  }

  openNew() {
    this.teamWorker = {}
    this.submitted = false;
    this.teamWorkerDialog = true;
  }

  deleteSelectedTeamWorkers() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected teamWorkers?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.teamWorkers = this.teamWorkers.filter(val => !this.selectedTeamWorkers.includes(val));
        this.selectedTeamWorkers = null;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'TeamWorkers Deleted', life: 3000 });
      }
    });
  }

  editTeamWorker(teamWorker: any) {
    this.teamWorker = { ...teamWorker };
    this.teamWorkerDialog = true;
  }

  deleteTeamWorker(teamWorker: any) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + teamWorker.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.teamWorkers = this.teamWorkers.filter(val => val.id !== teamWorker.id);
        this.teamWorker = {};
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'any Deleted', life: 3000 });
      }
    });
  }

  hideDialog() {
    this.teamWorkerDialog = false;
    this.submitted = false;
  }

  saveTeamWorker() {
    this.submitted = true;


  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.teamWorkers.length; i++) {
      if (this.teamWorkers[i].id === id) {
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




