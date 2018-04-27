import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; 
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';


import {DemoService} from './data.service';
import { HomeComponent } from './home/home.component';
import { AnotherComponent } from './another/another.component';
import { NewComponent } from './new/new.component';
import { ListComponent } from './list/list.component';
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnotherComponent,
    NewComponent,
    ListComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DemoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
