import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';
import { BookFormComponent } from '../book-form/book-form.component';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {
 bookData: any;
 abc: any[]=[];
 Button2: boolean = true;
term: any;

 constructor(private dailog:MatDialog,  private service:UserService, private route:Router){}
  ngOnInit(): void {
    this.getCourseData();
    if(localStorage.getItem("role") == "user"){
      this.Button2 = false
    }
  }

  onSubmit(){
    this.dailog.open(BookFormComponent);
  }
  getCourseData(){
   this.service.getBook().subscribe((res)=>{
    this.bookData = res;
    
    for(let i = 0; i<this.bookData.length; i++){
      this.abc.push(this.bookData[i])
    }
    console.log(this.abc);
    
   })
  }

}
