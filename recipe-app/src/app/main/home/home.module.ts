import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeRountingModule } from './home.routing.module';
import { MenuCardModule } from 'src/app/shared/menu-card/menu-card.module';

@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        HomeRountingModule,
        MenuCardModule
    ]
})
export class HomeModule { }
