import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.scss']
})
export class SidenavbarComponent implements OnInit {
  username: any;
  imgUrl: any;
  constructor( private router:Router){}
  ngOnInit(): void {
    this.username = localStorage.getItem('username');
    if(this.username === "devu") {
      this.imgUrl = './assets/devu.jpg';
    } if(this.username === "jay") {
      this.imgUrl = './assets/jay.png';
    }if(this.username === "mitul") {
      this.imgUrl = './assets/mitul.png';
  }
}
  onHome(){
    this.router.navigate(['table']);
  }
  db(){
    this.router.navigate(['dashbord']);
  }
  onCourse(){
    this.router.navigate(['courses']);
  }
  onBooks(){
    this.router.navigate(['books']);
  }
}
