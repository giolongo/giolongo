import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {MenuModel} from "../models/menu.model";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  public selectedMenu: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  public menu: BehaviorSubject<MenuModel[] | null> = new BehaviorSubject<MenuModel[] | null>(null);
  constructor(private httpClient: HttpClient) {
    this.httpClient.get<MenuModel[]>('../../assets/menu.json').subscribe(m => {
      this.menu.next(m);
      this.selectedMenu.next(m[0].link);
    })
  }
}
