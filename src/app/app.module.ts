import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MainViewComponent } from './main-view/main-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductViewComponent } from './product-view/product-view.component';
import { AboutViewComponent } from './about-view/about-view.component';
import { ContactViewComponent } from './contact-view/contact-view.component';
import { Constants } from './Constants';

const routes: Routes = [
  { path: '', component: MainViewComponent,
  children: [
    {
      path: Constants.PRODUCT_PATH, component: ProductViewComponent,
    },
    {
      path: Constants.ABOUT_PATH, component: AboutViewComponent,
    },
    {
      path: Constants.CONTACT_PATH, component: ContactViewComponent,
    }
  ]},
];

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    ProductViewComponent,
    AboutViewComponent,
    ContactViewComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [RouterOutlet],
  bootstrap: [AppComponent]
})
export class AppModule { }
