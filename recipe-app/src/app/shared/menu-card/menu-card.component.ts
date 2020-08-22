import { Component, OnInit, Input } from '@angular/core';
import { RecipeMenuCardModel } from './models/recipe-menu-card.model';

@Component({
  selector: 'rcp-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss']
})
export class MenuCardComponent implements OnInit {

  @Input() title: string;
  @Input() recipes: RecipeMenuCardModel[];

  constructor() { }

  ngOnInit(): void {
  }

}
