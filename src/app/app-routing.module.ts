import { BabybodysuitsComponent } from './website/baby/babybodysuits/babybodysuits.component';
import { ClothingsetComponent } from './website/baby/clothingset/clothingset.component';
import { CartComponent } from './website/cart/cart.component';
import { AccountComponent } from './website/account/account.component';
import { AccessoriesComponent } from './website/accessories/accessories.component';
import { EthinicwearComponent } from './website/ethinicwear/ethinicwear.component';
import { BlogComponent } from './website/blog/blog.component';
import { WhatsnewComponent } from './website/whatsnew/whatsnew.component';
import { SaleComponent } from './website/sale/sale.component';
import { GirlsComponent } from './website/girls/girls.component';
import { BabyComponent } from './website/baby/baby.component';
import { BoysComponent } from './website/boys/boys.component';
import { HomeComponent } from './website/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'boys', component : BoysComponent},
  {path: 'baby', component: BabyComponent},
  {path: 'girls', component: GirlsComponent},
  {path: 'sale', component: SaleComponent},
  {path: 'whatsnew', component: WhatsnewComponent},
  {path: 'blog', component:BlogComponent},
  {path: 'ethinicwear', component:EthinicwearComponent},
  {path: 'accessories', component:AccessoriesComponent},
  {path: 'account', component:AccountComponent},
  {path: 'cart' , component:CartComponent},
  {path: 'baby/clothingset' , component:ClothingsetComponent},
  {path: 'baby/babybodysuits', component:BabybodysuitsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
