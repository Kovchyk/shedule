import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { FilterComponent } from './filter/filter.component';
import { TimePipe } from './pipes/time.pipe';
import { DataService } from "./services/data.service";
import { FilterPipe } from './pipes/filter.pipe';
import { NavComponent } from './nav/nav.component';
import { NavItemComponent } from './nav-item/nav-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    FilterComponent,
    TimePipe,
    FilterPipe,
    NavComponent,
    NavItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
