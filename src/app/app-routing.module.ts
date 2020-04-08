import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { SearchComponent } from './search/search.component';
import { CartComponent } from './cart/cart.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { SeeAllComponent } from './see-all/see-all.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'category/:id', component: CategoryDetailsComponent},
  {path: 'category/see-all/:id', component: SeeAllComponent},
  {path: 'search', component: SearchComponent},
  {path: 'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
