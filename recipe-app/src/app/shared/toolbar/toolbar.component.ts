import { Component, OnInit } from '@angular/core';
import { ToolbarAnimationsService } from './services/toolbar-animations.service';

@Component({
  selector: 'rcp-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  providers: [ToolbarAnimationsService]
})
export class ToolbarComponent implements OnInit {

  constructor(
    private readonly _toolbarAnimationsService: ToolbarAnimationsService
  ) { }

  ngOnInit(): void {
    this._initAnimationService();
  }

  toggleMenu(): void {
    this._toolbarAnimationsService.toggleMenu();
  }

  private _initAnimationService(): void {
    this._toolbarAnimationsService.navLinks = document.querySelector('.nav-links');
    this._toolbarAnimationsService.listNavLinks = document.querySelectorAll('.nav-links li');
    this._toolbarAnimationsService.menuMobile = document.querySelector('.menu-mobile');
  }
}
