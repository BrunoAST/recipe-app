import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeRountingModule } from './home.routing.module';
import { HotDessertsListModule } from 'src/app/shared/hot-dessert-list/hot-dessert-list.module';

@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        HomeRountingModule,

        HotDessertsListModule
    ]
})
export class HomeModule { }
