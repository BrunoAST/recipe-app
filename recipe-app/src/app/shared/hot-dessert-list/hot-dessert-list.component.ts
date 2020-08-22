import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { DishModel } from './components/hot-dessert-item/models/dish.model';
import { HotDissertHttpService } from './services/hot-dissert-http.service';

@Component({
    selector: 'rcp-hot-dessert-list',
    templateUrl: './view/hot-dessert-list.component.html',
    styleUrls: ['./view/hot-dessert-list.component.scss']
})
export class HotDessertListComponent implements OnInit, OnDestroy {
    dishList: DishModel[]  = [];

    private _subscription$ = new Subscription();

    constructor(private _hotDissertHttpService: HotDissertHttpService) { }

    ngOnInit(): void {
        this._getDishes();
    }

    ngOnDestroy(): void {
        this._subscription$.unsubscribe();
    }

    private _getDishes(): void {
        this._hotDissertHttpService
            .getDishes()
            .subscribe((res: DishModel[]) => this.dishList = res);
    }
}
