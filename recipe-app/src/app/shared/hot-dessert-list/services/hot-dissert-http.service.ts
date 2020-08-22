import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { DishModel } from '../components/hot-dessert-item/models/dish.model';
import { APIRoutes } from 'src/app/routes/api.routes';

@Injectable()
export class HotDissertHttpService {
    private _dishesRoute = `${APIRoutes}/foods`;

    constructor(private _http: HttpClient) { }

    getDishes(): Observable<DishModel[]> {
        return this._http.get<DishModel[]>('http://fe726bb94d89.ngrok.io/api/foods');
    }
}
