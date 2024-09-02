import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
[x: string]: any;
  signinform: FormGroup;
  userdata:any;


  constructor(private service:UserService, private fb:FormBuilder, private toast:NgToastService, private route:Router){
    

 }
  ngOnInit(){
    this.signinform = this.fb.group({
      username:['', [Validators.required, Validators.minLength(2)]],
      password:['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/) ]],
      firstname:['',[Validators.required]],
      lastname:['', [Validators.required]],
      email:['',[Validators.required],[Validators.pattern('^([0-9a-zA-Z]([-\\.\\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\\w]*[0-9a-zA-Z]\\.)+[a-zA-Z]{2,9})$')]],
      contactno:['',[Validators.required,  Validators.pattern(/^\d{10}$/)]],
      role:['user']
   
    })
   
  }
  get f(){
    return this.signinform.controls;
  }
  noWhitespaceValidator(control: AbstractControl): { [key: string]: any } | null {
    const isWhitespace = (control.value || '').trim().length === 0;
    return isWhitespace ? { 'whitespace': true } : null;
  }

  signIn(){ 
    this.userdata= this.signinform.value
    console.log(this.userdata)
    this.service.addAuth(this.userdata).subscribe(()=>{})
    this.toast.success({detail:"Success Message" , summary:"Register Successfully", duration:5000});
    this.route.navigate(['login'])

 }
}
