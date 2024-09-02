import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';
import { UserFormComponent } from '../Components/user-form/user-form.component';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

 

  constructor(private dailog:MatDialog,private service:UserService, private router:Router, private toast:NgToastService){}

  Onsubmit(){
  
    this.dailog.open(UserFormComponent);
    
       
  }
  onSignout(){
    this.service.signout();
    this.toast.info({detail:"Success Message" , summary:"SignOut!!", duration:5000});
    this.router.navigate(['login']);
  }
  
   

 
}
