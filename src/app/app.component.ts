import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  param = { count: 2 };
  param2 = {value: 'world'};
  param3 = {
    value: 'space'
  }

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('de');
    this.translate.use('de');
    translate.addLangs(['en']);
  }

  selectLang(lang: string)  {
    this.translate.use(lang);
  }
}
