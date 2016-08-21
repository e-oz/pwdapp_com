import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './components/app/component';
import { routes } from './routes';
import {FormsModule} from "@angular/forms";
import {Home} from "./components/home/home";

@NgModule({
  imports: [BrowserModule, HttpModule, RouterModule.forRoot(routes), FormsModule],
  declarations: [AppComponent, Home],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})

export class AppModule { }
