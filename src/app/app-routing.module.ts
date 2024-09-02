import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { TableComponent } from './table/table.component';
import { HeaderComponent } from './header/header.component';
import { LogInComponent } from './log-in/log-in.component';
import { UserFormComponent } from './Components/user-form/user-form.component';
import { authGuard } from './table/auth.guard';
import { DashbordComponent } from './dashbord/dashbord.component';
import { CoursesComponent } from './courses/courses.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { BooksComponent } from './books/books.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  { path: 'login', component:LogInComponent },
  {path:'dashboard', component:DashbordComponent, canActivate:[authGuard]},
  {path:'table',   component:TableComponent,canActivate:[authGuard]},
  {path:'signin', component:SignInComponent},
  {path:'header', component:HeaderComponent},
  {path:'userform', component:UserFormComponent},
  {path:'courses', component:CoursesComponent},
  {path: 'details/:id', component: CardDetailsComponent },
  {path: 'books', component:BooksComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
