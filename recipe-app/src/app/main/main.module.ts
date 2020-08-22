import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main.component';
import { MainRountingModule } from './main.routing.module';

import { ToolbarModule } from './../shared/toolbar/toolbar.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MainRountingModule,
    ToolbarModule
  ],
  exports: [MainComponent]
})
export class MainModule { }
