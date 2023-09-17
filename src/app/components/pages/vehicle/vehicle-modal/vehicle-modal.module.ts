import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleModalComponent } from './vehicle-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { VehicleRoutingModule } from '../vehicle-routing.module';
@NgModule({
  declarations: [
    VehicleModalComponent
  ],
  imports: [
    CommonModule,
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
    ReactiveFormsModule,
    VehicleRoutingModule
  ],
  exports: [VehicleModalComponent]
})
export class VehicleModalModule { }
