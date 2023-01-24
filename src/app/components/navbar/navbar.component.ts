import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MenuType} from "../../models/menu.type";
import {MenuModel} from "../../models/menu.model";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{

  @Input() selectedItem!: string | null;
  @Input() menu!: MenuModel[] | null;
  @Input() selectedLang!: string | null;
  @Output() changeRef = new EventEmitter<MenuType>();
  @Output() changeLang = new EventEmitter<'en' | 'it'>();

  public isCollapsed = true;
}
