import { Component, Input } from '@angular/core';

import { DishModel } from './models/dish.model';

@Component({
    selector: 'rcp-hot-dessert-item',
    templateUrl: './view/hot-dessert-item.component.html',
    styleUrls: ['./view/hot-dessert-item.component.scss']
})
export class HotDessertItemComponent {
    @Input() dish: DishModel;
}
