import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { SearchComponent } from './search/search.component';
import { CartComponent } from './cart/cart.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { SeeAllComponent } from './see-all/see-all.component';
import { CheckComponent } from './check/check.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'category/:id', component: CategoryDetailsComponent},
  {path: 'category/see-all/:id', component: SeeAllComponent},
  {path: 'search', component: SearchComponent},
  {path: 'cart', component: CartComponent},
  {path: 'check', component: CheckComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'admin', component: AdminComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
