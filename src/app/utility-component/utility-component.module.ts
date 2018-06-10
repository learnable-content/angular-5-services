import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  declarations: [ModalWindowComponent],
  exports: [
    ModalWindowComponent
  ]
})
export class UtilityComponentModule { }
