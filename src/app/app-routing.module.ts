import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { OffresemploisComponent } from './offresemplois/offresemplois.component';
import { AddProductComponent } from './add-product/add-product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  {path:'products',component:ProductsComponent},
  {path:'offresEmplois',component:OffresemploisComponent},
  {path:'addProduct',component:AddProductComponent},
  {path:'todos',component:TodoListComponent},

  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
