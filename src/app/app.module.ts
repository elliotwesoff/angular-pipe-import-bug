import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import ItemsCountPipe from './pipes/items-count.pipe';

const providers = [
  ItemsCountPipe
]

@NgModule({
  declarations: [
    ItemsCountPipe,
    AppComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers,
  bootstrap: [AppComponent]
})
export class AppModule { }
