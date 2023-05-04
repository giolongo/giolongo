import {Injectable} from '@angular/core';
import {BehaviorSubject, map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {KnowModel} from "../models/know.model";
import {groupBy, uniq} from "lodash";
import {Dictionary} from "../models/dictionary.model";

@Injectable({
  providedIn: 'root'
})
export class KnowService {

  public knows: BehaviorSubject<KnowModel[] | null> = new BehaviorSubject<KnowModel[] | null>(null);

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<KnowModel[]>('assets/know.json').subscribe(m => {
      this.knows.next(m);
    })
  }

  get knowByGroups(): Observable<Dictionary<KnowModel[]>> {
    return this.knows.pipe(map(knows => groupBy(knows, 'group')));
    // return this.knows.pipe(map(knows => uniq(knows?.map(know => know.group))));
  }

  get groups():Observable<KnowModel['group'][]> {
    return this.knows.pipe(map(knows => uniq(knows?.map(know => know.group))));
  }
}
