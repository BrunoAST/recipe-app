import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotDessertListComponent } from './hot-dessert-list.component';

@NgModule({
    declarations: [HotDessertListComponent],
    imports: [
        CommonModule
    ],
    exports: [HotDessertListComponent]
})
export class HotDessertsListModule { }
