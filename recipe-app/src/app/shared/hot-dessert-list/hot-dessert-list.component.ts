import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { DishModel } from './components/hot-dessert-item/models/dish.model';

@Component({
    selector: 'rcp-hot-dessert-list',
    templateUrl: './view/hot-dessert-list.component.html',
    styleUrls: ['./view/hot-dessert-list.component.scss']
})
export class HotDessertListComponent implements OnInit, OnDestroy {
    dishList: DishModel[]  = [
        {
            country: 'USA',
            name: 'Pizza'
        },
        {
            country: 'Mexico',
            name: 'Taco'
        },
        {
            country: 'India',
            name: 'Gelatto'
        }
    ];

    private _subscription$ = new Subscription();

    constructor() { }

    ngOnInit(): void {
        this._getDishes();
    }

    ngOnDestroy(): void {
        this._subscription$.unsubscribe();
    }

    private _getDishes(): void {

    }
}
