import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogsComponent } from './logs/logs.component';
import { LogListComponent } from './logs/log-list/log-list.component';
import { LogDetailsComponent } from './logs/log-list/log-details/log-details.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LogsComponent,
    LogListComponent,
    LogDetailsComponent,
    SidebarComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
