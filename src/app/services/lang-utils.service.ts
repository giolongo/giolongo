import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {TranslateService} from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class LangUtilsService {
  public langSelected: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  constructor(private translateService: TranslateService) {
    this.translateService.use('it');
    this.langSelected.next(this.translateService.currentLang);
    this.translateService.onLangChange.subscribe(l => this.langSelected.next(l.lang));
  }

  changeLang(lang: 'it' | 'en'): void {
    this.translateService.use(lang);
  }
}
