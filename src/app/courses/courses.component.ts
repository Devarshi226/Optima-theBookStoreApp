import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { COformComponent } from '../coform/coform.component';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
 courseData: any;
 abc: any[]=[];
 Button2: boolean = true;


constructor(private dailog:MatDialog,  private service:UserService, private route:Router){}
  ngOnInit(): void {
    this.getCourseData();
    if(localStorage.getItem("role") == "user"){
      this.Button2 = false
    }
  }

  onSubmit(){
    this.dailog.open(COformComponent);
  }
  getCourseData(){
   this.service.getCourse().subscribe((res)=>{
    this.courseData = res;
    
    for(let i = 0; i<this.courseData.length; i++){
      this.abc.push(this.courseData[i])
    }
    console.log(this.abc);
    
   })
  }

  showDetails(){
     this.route.navigate(['card-details']);
  }
}
