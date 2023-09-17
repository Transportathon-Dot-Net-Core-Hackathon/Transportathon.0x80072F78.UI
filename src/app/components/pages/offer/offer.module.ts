import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';
import { InputNumberModule } from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { OfferRoutingModule } from './offer-routing.module';
import { OfferComponent } from './offer.component';
import { CommonModule } from '@angular/common';
import { OfferModalModule } from './offer-modal/offer-modal.module';


@NgModule({
  declarations: [
    OfferComponent
  ],
  imports: [
    CommonModule,
    OfferRoutingModule,
    TableModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    ToolbarModule,
    FormsModule,
    InputNumberModule,
    ConfirmDialogModule,
    InputTextareaModule,
    OfferModalModule
  ]
})
export class OfferModule { }
