import {HttpClient} from "@angular/common/http";
import {TranslateLoader} from "ngx-translate-with-country";
import {Observable} from 'rxjs';

export class TranslateHttpLoader implements TranslateLoader {
  constructor(private http: HttpClient, public prefix: string = "/assets/i18n/", public suffix: string = ".json") {}

  /**
   * Gets the translations from the server
   */
  public getTranslation(lang: string, country: string): Observable<Object> {
    return this.http.get(`${this.prefix}${lang}-${country}${this.suffix}`);
  }
}
