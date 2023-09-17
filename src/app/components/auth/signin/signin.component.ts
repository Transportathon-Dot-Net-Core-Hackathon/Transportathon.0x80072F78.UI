import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CompanyCreateDTO, CreateUserDTO, Services, TokenDTOCustomResponse } from 'src/app/core/services';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup<any>

  isCompany: boolean = false;

  constructor(
    private services: Services,
    private fb: FormBuilder,
    private messageService: MessageService,
    public router: Router,
    private ref: ChangeDetectorRef
  ) { }


  ngOnInit(): void {

    this.signinForm = this.fb.group({
      email: [],
      companyName: [],
      title: [],
      name: [],
      surname: [],
      address: [],
      street: [],
      alley: [],
      district: [],
      buildingNumber: [],
      apartmentNumber: [],
      postCode: [],
      vkn: [],

      userName: [undefined, Validators.required],
      password: [undefined, Validators.required],
      firstName: [undefined, Validators.required],
      familyName: [undefined, Validators.required],

    })
  }




  onSubmit() {
    if (!this.isCompany) {
      if (this.signinForm.valid == false) {
        this.messageService.add({ key: 'tst', severity: 'error', summary: 'HATA', detail: 'HATA' });
        this.ref.detectChanges();
        return
      }



      this.services.createUser(this.signinForm.value).subscribe({
        next: (result: TokenDTOCustomResponse) => {
          setTimeout(() => {
            this.login({ userName: this.signinForm.value.userName, password: this.signinForm.value.password })
          }, 1000);

        },

      })
    }
    else {
      this.services.create3(this.signinForm.value).subscribe(
        {
          next: (result: any) => {
            setTimeout(() => {
              this.login({ userName: this.signinForm.value.userName, password: this.signinForm.value.password })
            }, 1000);
          }, error: err => {
            this.messageService.add({ key: 'tst', severity: 'error', summary: 'HATA', detail: 'HATA' });
          }
        }
      )

    }
  }




  login(loginData) {



    this.services.login(loginData).subscribe({
      next: (result: TokenDTOCustomResponse) => {
        sessionStorage.setItem('token', result.data.token)
        this.messageService.add({ key: 'tst', severity: 'success', summary: 'Servis Mesajı', detail: 'Başarıyla Giriş Yapıldı' });
        this.router.navigate([''])
      },
      error: err => {
        this.messageService.add({ key: 'tst', severity: 'error', summary: 'HATA', detail: 'HATA' });
      }
    }
    )
  }
}