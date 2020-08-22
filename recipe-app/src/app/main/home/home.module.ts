import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeRountingModule } from './home.routing.module';

@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        HomeRountingModule
    ]
})
export class HomeModule { }
