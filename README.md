# ngx-translate-http-loader-with-country

Loads translation files using http. To be used in conjunction with [ngx-translate-with-country](https://github.com/sOoT/ngx-translate-with-country)..

This is a fork of the [@ngx-translate/http-loader](https://github.com/ngx-translate/http-loader) library.

Adds country/region support.

## Usage

Translation files are expected to include the language and country.

```
strings-[language]-[country].json
```

This allows you to differentiate between regions for a specific language. For instance:
```
strings-en-US.json
strings-en-NZ.json
```

### Setting Up the Code

The library is setup the same as [@ngx-translate/http-loader](https://github.com/ngx-translate/http-loader).

```ts
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from 'ngx-translate-with-country';
import {TranslateHttpLoader} from 'ngx-translate-http-loader-with-country';
import {AppComponent} from "./app";

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
```
