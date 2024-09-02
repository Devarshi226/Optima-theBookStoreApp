import {AfterViewInit, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mat';
  constructor(private route:Router){}

  checkRoute(): boolean{
    const route = this.route.url
    return ![ ''].includes(route)
  }
}