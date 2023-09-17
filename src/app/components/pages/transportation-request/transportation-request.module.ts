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
import { CommonModule } from '@angular/common';
import { TransportationRequestRoutingModule } from './transportation-request-routing.module';
import { TransportationRequestComponent } from './transportation-request.component';

@NgModule({
  declarations: [
    TransportationRequestComponent
  ],
  imports: [
    CommonModule,
    TransportationRequestRoutingModule,
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
  ]
})
export class TransportationRequestModule { }
