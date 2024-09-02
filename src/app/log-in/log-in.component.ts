import { Component, Injectable, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../Services/user.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent implements OnInit {
  loginform: FormGroup;
  loginData: any;
  authData: any;
  userdata: any;
  isUserExist: boolean;

  
  constructor(
    private fb: FormBuilder,
    private service : UserService,
    private route: Router,
    private toast: NgToastService
  ) {}
  ngOnInit(): void {
    this.loginform = this.fb.group({
      username: [''],
      password: [''],
      role:['user']
    });
    this.getData();
  }

  // onLogin() {

  //   this.loginData = this.loginform.value;
   
  //   for (let i = 0; i < this.authData.length; i++) {
  //     this.isUserExist =
  //       this.authData[i].username === this.loginData.username &&
  //       this.authData[i].password === this.loginData.password &&
  //       this.authData[i].role === this.loginData.role;
  //     if (this.isUserExist) {
  //       break;
  //     }
  //   }
  //   console.log(this.isUserExist);
  //   if (this.isUserExist) {
  //     localStorage.setItem('username', this.loginData.username);
  //     this.route.navigate(['dashbord']);
  //      this.service.login();
  //      if(this.loginData.username === "devu"){
  //       localStorage.setItem('role', this.loginData.role );
  //      }else{ localStorage.setItem('role', this.loginData.role );}
  //     this.toast.success({
  //       detail: 'Success Message',
  //       summary: 'Login Successfully',
  //       duration: 5000,
  //     });
  //   } else {
  //     this.toast.error({
  //       detail: 'Error Message',
  //       summary: 'Incorrect Username & Password OR Select Correct Role',
  //       duration: 5000,
  //     });
  //     this.route.navigate(['login']);
  //   }
  // }

  onLogin() {
    this.loginData = this.loginform.value;
  
    if (this.authData && Array.isArray(this.authData)) {
      for (let i = 0; i < this.authData.length; i++) {
        this.isUserExist =
          this.authData[i].username === this.loginData.username &&
          this.authData[i].password === this.loginData.password &&
          this.authData[i].role === this.loginData.role;
        if (this.isUserExist) {
          break;
        }
      }
      console.log(this.isUserExist);
      if (this.isUserExist) {
        localStorage.setItem('username', this.loginData.username);
        this.route.navigate(['dashboard']);
        this.service.login();
        localStorage.setItem('role', this.loginData.role);
        this.toast.success({
          detail: 'Success Message',
          summary: 'Login Successfully',
          duration: 5000,
        });
      } else {
        this.toast.error({
          detail: 'Error Message',
          summary: 'Incorrect Username & Password OR Select Correct Role',
          duration: 5000,
        });
        this.route.navigate(['login']);
      }
    } else {
      console.error('authData is undefined or not an array');
      this.toast.error({
        detail: 'Error Message',
        summary: 'Authentication data is not available',
        duration: 5000,
      });
    }
  }
  

  getData() {
    this.service.getAuth().subscribe((res) => {
      this.authData = res;
      // console.log(this.authData[0].username);
   console.log(this.authData);
console.log("nhgd");

    });
  }
}
