import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-book-single',
  templateUrl: './book-single.component.html',
  styleUrls: ['./book-single.component.scss']
})
export class BookSingleComponent implements OnInit {
  id:any;
  UserService: any;
  Button: boolean = true;
  Button2: boolean = true;
  term: string;

  constructor(private service:UserService, private route:Router){}

  ngOnInit(): void {
    if(localStorage.getItem("role") == "admin"){
      this.Button = false
    }
    if(localStorage.getItem("role") == "user"){
      this.Button2 = false
    }
  }
  @Input () postData : any;

  removeCard(id: number){
    this.service. deleteBook(id).subscribe(()=>{}) 
  }
  
  delete(id:any){
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {

      if (result.isConfirmed) {
        this.removeCard(id)
        
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
    
  }
}
