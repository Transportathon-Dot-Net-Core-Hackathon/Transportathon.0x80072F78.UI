import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LoginDTO, Services, TokenDTOCustomResponse } from 'src/app/core/services';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent implements OnInit {

    valCheck: string[] = ['remember'];

    password!: string;

    loginForm: FormGroup;

    constructor(
        public layoutService: LayoutService,
        private services: Services,
        private http: HttpClient,
        private fb: FormBuilder,
        private messageService: MessageService,
        public router: Router,
        private ref: ChangeDetectorRef
    ) { }


    ngOnInit(): void {
        this.loginForm = this.fb.group({
            userName: [undefined, Validators.required],
            password: [undefined, Validators.required],
        })
    }




    onSubmit() {
        if (this.loginForm.valid == false) {

            this.messageService.add({ key: 'tst', severity: 'error', summary: 'HATA', detail: 'HATA' });
            this.ref.detectChanges();
            return
        }

        this.services.login(this.loginForm.value).subscribe({
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
