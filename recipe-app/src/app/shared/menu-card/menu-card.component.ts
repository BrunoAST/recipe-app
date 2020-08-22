import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rcp-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss']
})
export class MenuCardComponent implements OnInit {

  @Input() title: string;
  @Input() recipes: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
