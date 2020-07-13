import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './website/navbar/navbar.component';
import { HomeComponent } from './website/home/home.component';
import { BoysComponent } from './website/boys/boys.component';
import { WhatsnewComponent } from './website/whatsnew/whatsnew.component';
import { GirlsComponent } from './website/girls/girls.component';
import { EthinicwearComponent } from './website/ethinicwear/ethinicwear.component';
import { AccessoriesComponent } from './website/accessories/accessories.component';
import { SaleComponent } from './website/sale/sale.component';
import { BlogComponent } from './website/blog/blog.component';
import { BabyComponent } from './website/baby/baby.component';
import { FooterComponent } from './website/footer/footer.component';
import { AccountComponent } from './website/account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BoysComponent,
    WhatsnewComponent,
    GirlsComponent,
    EthinicwearComponent,
    AccessoriesComponent,
    SaleComponent,
    BlogComponent,
    BabyComponent,
    FooterComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
