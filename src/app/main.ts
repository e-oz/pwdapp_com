import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './module';
import {disableDeprecatedForms, provideForms} from '@angular/forms';
import {enableProdMode} from "@angular/core";

if (location.host !== 'localhost:5555') {
  enableProdMode();
}
disableDeprecatedForms();
provideForms();
platformBrowserDynamic().bootstrapModule(AppModule);
