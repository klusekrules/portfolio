import { Component, ViewContainerRef } from '@angular/core';
import { isArray } from 'util';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'app';

  constructor(
    private TranslateService: TranslateService,
    private Title: Title,
    private ViewContainerRef: ViewContainerRef) {

    TranslateService.setDefaultLang('en');

    const preferredLanguage = this.determinePreferredLanguage();

    if (preferredLanguage) {
      const langCode = preferredLanguage.split('-')[0];
      TranslateService.use(langCode);
    }

    TranslateService.get('AFH - Correspondence Registry')
      .subscribe((res: string) => Title.setTitle(res));
  }

  private determinePreferredLanguage = () => {
    const nav: any = window.navigator;

    if (isArray(nav.languages)) {
      for (let i = 0; i < nav.languages.length; i++) {
        const language = nav.languages[i];

        if (language && language.length) {
          return language;
        }
      }
    }

    const browserLanguagePropertyKeys = ['language', 'browserLanguage', 'systemLanguage', 'userLanguage'];

    for (let i = 0; i < browserLanguagePropertyKeys.length; i++) {
      const language = nav[browserLanguagePropertyKeys[i]];

      if (language && language.length) {
        return language;
      }
    }
  }
}
