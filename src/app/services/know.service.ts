import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {MenuModel} from "../models/menu.model";
import {KnowModel} from "../models/know.model";

@Injectable({
  providedIn: 'root'
})
export class KnowService {

  public knows: BehaviorSubject<KnowModel[] | null> = new BehaviorSubject<KnowModel[] | null>(null);
  constructor(private httpClient: HttpClient) {
    this.httpClient.get<KnowModel[]>('../../assets/know.json').subscribe(m => {
      this.knows.next(m);
    })
  }
}
