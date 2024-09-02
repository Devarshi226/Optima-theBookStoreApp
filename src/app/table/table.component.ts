import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { UserFormComponent } from '../Components/user-form/user-form.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../Services/user.service';
import { SnackService } from '../Services/snack.service';
import Swal from 'sweetalert2';
import { NgToastService } from 'ng-angular-popup';
import { NgxSpinnerService } from "ngx-spinner";



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit{
  displayedColumns: string[] = ['id', 'department','name','cno','email','dob', 'eno','image', 'action' ];
  dataSource!: MatTableDataSource<any>;
  tableData: any;
  refresh: boolean
  showSpinner: boolean;
  bufferValue = 60;
  progressValue=40;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  

  constructor(private dailog:MatDialog,private service:UserService,private snack:SnackService, private toast: NgToastService, private spinner:NgxSpinnerService){
    this.dataSource = new MatTableDataSource<any>(this.tableData);
  }
   
  Spinner(){
    this.showSpinner=true;
    setTimeout(()=>{
      this.showSpinner=false;
    },1000)
  }

  ngAfterViewInit(): void {
    this.spinner.show()
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
      
  }

  ngOnInit(){
 

    this.getUserList();
//     this.updateSubscription = interval(1000).subscribe(
//       (val) => { this.getUserList()
//     }

// );
  }
  
  Onsubmit(){
  
    this.dailog.open(UserFormComponent);
    
       
  }
 
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
 
  getUserList() {
    // this.service.getUser().subscribe((res: any) => {
    //     this.tableData = res;
    //     this.dataSource = new MatTableDataSource(this.tableData);
    //     console.log(res);
    //     this.dataSource.sort = this.sort;
    //     this.dataSource.paginator = this.paginator;
    //    }
    //    );
    return this.service.getUser().subscribe((res:any)=>{
      // this.dataSource=new MatTableDataSource(res);
      setTimeout(()=>{
        this.dataSource=new MatTableDataSource(res);
      },1000)
      setTimeout(()=>{
        this.showSpinner=true;
      },1500)
    })
  }
  

  onDelete(id:number){
    // debugger
    console.log(id);
    this.service.deleteUser(id).subscribe((res)=>{
     
      this.toast.error({detail:"Success Message" , summary:"Delet Successfully", duration:5000});
      this.getUserList();
  }) 
   
  }
  onEdit(data:any)  {
   
    const dailog = this.dailog.open(UserFormComponent,{data,});
    dailog.afterClosed().subscribe((res: any)=>{
      if(res){
        this.getUserList();
      }
    })
  }
  }
   
 
  
  
  
 



