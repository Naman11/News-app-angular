import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { SearchdetailComponent } from './searchdetail.component/searchdetail/searchdetail.component';
import { SearchlistComponent } from './searchlist.component/searchlist/searchlist.component'
import { FavouriteComponent } from './favourite/favourite.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {	path: '', redirectTo: '/login', pathMatch: 'full' },
  {	path:'login',component: LoginComponent},
	{	path:'register',component: RegisterComponent},
	{	path: 'search',component: HeadComponent },
	{	path:'news-list',component:/*SearchlistComponent*/HeadComponent ,children: [{ path: 'movie-detail', component:/*SearchdetailComponent*/HeadComponent}]},
	{	path:'news-detail',component:/*SearchdetailComponent*/HeadComponent},
	{	path: 'favourites' , component: FavouriteComponent },
	{	path:'appComponent',component:AppComponent}];  
  
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}