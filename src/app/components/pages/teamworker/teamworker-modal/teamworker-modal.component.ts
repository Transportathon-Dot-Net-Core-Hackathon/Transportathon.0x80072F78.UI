import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Services } from 'src/app/core/services';

@Component({
  selector: 'app-teamWorker-modal',
  templateUrl: './teamWorker-modal.component.html',
  styleUrls: ['./teamWorker-modal.component.scss']
})
export class TeamWorkerModalComponent implements OnInit {

  teamWorkerForms: FormGroup

  @Input() teamWorkerDialog: boolean = true;

  teamWorkers: any[];

  licence: any = [
    { value: 0, label: "B" },
    { value: 1, label: "C" },
    { value: 2, label: "CE" },
  ]

  constructor(private services: Services,
    private fb: FormBuilder,) {

  }

  ngOnInit(): void {
    this.teamWorkerForms

    this.teamWorkerForms = this.fb.group({
      id: [],
      name: [],
      surname: [],
      experience: [],
      phoneNumber: [],
      eMail: [],
      age: [],
    })
  }





  hideDialog() {
    this.teamWorkerDialog = false;
  }

  saveTeamWorker() {



  }
}
