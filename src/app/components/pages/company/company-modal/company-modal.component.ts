import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Services } from 'src/app/core/services';

@Component({
  selector: 'app-company-modal',
  templateUrl: './company-modal.component.html',
  styleUrls: ['./company-modal.component.scss']
})
export class CompanyModalComponent implements OnInit {

  companyForms: FormGroup

  @Input() companyDialog: boolean = true;

  companys: any[];

  licence: any = [
    { value: 0, label: "B" },
    { value: 1, label: "C" },
    { value: 2, label: "CE" },
  ]

  constructor(private services: Services,
    private fb: FormBuilder,) {

  }

  ngOnInit(): void {
    this.companyForms

    this.companyForms = this.fb.group({
      id: [],
      companyName: [],
      title: [],
      Name: [],
      Surname: [],
      City: [],
      District: [],
      Street: [],
      Alley: [],
      BuildingNumber: [],
      ApartmentNumber: [],
      PostCode: [],
      VKN: [],
      CompanyUsersId: [],
      CompanyUsers: [],
      AverageScore: [],
    })
  }





  hideDialog() {
    this.companyDialog = false;
  }

  saveCompany() {



  }
}
