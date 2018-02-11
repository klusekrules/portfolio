import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

export function createCustomTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './i18n/default/', '.json');
}
