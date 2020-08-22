import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main.component';
import { MainRountingModule } from './main.routing.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MainRountingModule
  ],
  exports: [MainComponent]
})
export class MainModule { }
