import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../Services/user.service';
import { CardData } from '../Model/carddetails.model';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {
  card: any;
  cardid: any
  courcedetails: any;
  carddata: any;
  Button: boolean = true;
  
  // courcedetails: CardData ={
  //   id: '',
  //   title: '',
  //   disc:'',
  //   price:'',
  //   courceImg: '',
  // };



  constructor(private route: ActivatedRoute, private service:UserService,  private router:Router ) {}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe( params=>{
      const id = params.get('id');
      if (typeof id === "string") {
        localStorage.setItem("userdataid", id)
        this.cardid = localStorage.getItem("userdataid")
      }
      this.getData(id)
    })
    if(localStorage.getItem("role") == "admin"){
      this.Button = false
    }
}


getData(id:any){
this.service.getDetails(id).subscribe((devu:any) =>{
  this.courcedetails = devu
  console.log(this.courcedetails)
  
  this.courcedetails.forEach((e: any) => {
    if (e.id === id) {
      this.carddata = e;
    }
  });
  console.log(this.carddata);
  

})
}

back(){
  this.router.navigate(['courses'])
}
}
