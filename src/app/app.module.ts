import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { AppLayoutModule } from './layout/app.layout.module';
import { AppRoutingModule } from './app-routing.module';
import { API_BASE_URL, Services } from './core/services';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AuthInterceptor } from './core/auth.interceptor';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    DropdownModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppLayoutModule,
    AppRoutingModule,
  ],
  providers: [
    Services, MessageService, HttpClient, ConfirmationService,
    { provide: API_BASE_URL, useValue: 'https://localhost:44304' },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
