import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { SearchComponent } from './search/search.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { SeeAllComponent } from './see-all/see-all.component';
import { CheckComponent } from './check/check.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryComponent,
    SearchComponent,
    CartComponent,
    HeaderComponent,
    CategoryDetailsComponent,
    ProductCardComponent,
    SeeAllComponent,
    CheckComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
