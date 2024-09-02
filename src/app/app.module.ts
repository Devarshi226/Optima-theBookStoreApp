import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserFormComponent } from './Components/user-form/user-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SignInComponent } from './sign-in/sign-in.component';
import { TableComponent } from './table/table.component';
import { HeaderComponent } from './header/header.component';
import { LogInComponent } from './log-in/log-in.component';
import { NgToastModule } from 'ng-angular-popup';
import{MatProgressSpinnerModule} from'@angular/material/progress-spinner';
import { NgxSpinnerModule } from 'ngx-spinner';
import { DashbordComponent } from './dashbord/dashbord.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import {MatCardModule} from '@angular/material/card';
import { CoursesComponent } from './courses/courses.component';
import { COformComponent } from './coform/coform.component';
import { SingleCardComponent } from './single-card/single-card.component';
import { CommonModule } from '@angular/common';
import { CardDetailsComponent } from './card-details/card-details.component';
import { BooksComponent } from './books/books.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BookSingleComponent } from './book-single/book-single.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    SignInComponent,
    TableComponent,
    HeaderComponent,
    LogInComponent,
    DashbordComponent,
    SidenavbarComponent,
    CoursesComponent,
    COformComponent,
    SingleCardComponent,
    CardDetailsComponent,
    BooksComponent,
    BookFormComponent,
    BookSingleComponent,
    

  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatSnackBarModule,
    NgToastModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatCardModule,
    Ng2SearchPipeModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
  
 ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
