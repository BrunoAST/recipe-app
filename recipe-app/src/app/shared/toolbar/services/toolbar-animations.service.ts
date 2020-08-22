import { Injectable } from '@angular/core';

@Injectable()
export class ToolbarAnimationsService {
  private _navLinks: Element;
  private _linkList: NodeListOf<Element>;
  private _menuMobile: Element;

  constructor() { }

  //#region Setters
  set navLinks(navLinks: Element) {
    this._navLinks = navLinks;
  }

  set listNavLinks(listNavLinks: NodeListOf<Element>) {
    this._linkList = listNavLinks;
  }

  set menuMobile(menuMobile: Element) {
    this._menuMobile = menuMobile;
  }
  //#endregion Setters

  toggleMenu(): void {
    this._navLinks.classList.toggle('nav-active');

    this._animateLinks();
    this._animateButtonMenuMobile();
  }

  private _animateLinks(): void {
    this._linkList.forEach((link: any, index: number) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
    });
  }

  private _animateButtonMenuMobile(): void {
    this._menuMobile.classList.toggle('toggle');
  }

}