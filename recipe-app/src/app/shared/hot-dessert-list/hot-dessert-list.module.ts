import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotDessertListComponent } from './hot-dessert-list.component';
import { HotDessertItemComponent } from './components/hot-dessert-item/hot-dessert-item.component';
import { HotDissertHttpService } from './services/hot-dissert-http.service';

@NgModule({
    declarations: [HotDessertListComponent, HotDessertItemComponent],
    imports: [
        CommonModule
    ],
    exports: [HotDessertListComponent],
    providers: [HotDissertHttpService]
})
export class HotDessertsListModule { }
