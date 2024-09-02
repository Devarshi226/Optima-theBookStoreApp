import { Component, Inject, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { SnackService } from 'src/app/Services/snack.service';
import Swal from 'sweetalert2';
import {NgToastService} from 'ng-angular-popup';
import { TableComponent } from 'src/app/table/table.component';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  file: any;
  selectedImage: any;
  encodedImage: string | undefined;
  imgUrl: string = './assets/asd.jpeg';
  formData: any;
 


  constructor(private http: HttpClient, private service:UserService, private dialog:MatDialogRef<UserFormComponent>, private snack:SnackService,@Inject(MAT_DIALOG_DATA)public data:any , private toast:NgToastService){}

studentform=new FormGroup({
  name: new FormControl("", [Validators.required, Validators.minLength(4)]),
  department: new FormControl("", [Validators.required]),
  email: new FormControl("", [Validators.required, Validators.minLength(4), Validators.email,]),
  cno: new FormControl("", [Validators.required]),
  eno: new FormControl("", [Validators.required, Validators.minLength(4)]),
  dob:new FormControl("", [Validators.required]),
  img:new FormControl(""),
})

ngOnInit(){
  this.studentform.patchValue(this.data);
  
}


_handleReaderLoaded(readerEvt : any) {
  this.selectedImage = ('data:image/png;base64,' + btoa(readerEvt.target.result));
}

onFileSelected(event: any) {
  var files = event.target.files;
  var file = files[0];
  this.imgUrl = './assets/asd.jpeg';
  this.imgUrl=this.file;
 
  
  if (files && file) {
    var reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsBinaryString(file);
 
  }
}




encodeImageFileAsBase64() {

  const reader = new FileReader();
  reader.onloadend = () => {
    this.encodedImage = reader.result?.toString(); // Base64 encoded string
  
  }
  reader.readAsDataURL(this.selectedImage);
 
}



onDrop(event: DragEvent) {
  event.preventDefault();
  const files = event.dataTransfer?.files;
  if (files && files.length > 0) {
    const file = files[0];
    this.handleFile(file);  
  }
}
private handleFile(file: File) {
  const reader = new FileReader();
  reader.onload = () => {
    const base64String = reader.result as string;
    this.imgUrl = base64String;
    this.selectedImage = base64String;
    
  };
  reader.readAsDataURL(file);
}

onDragOver(event: DragEvent) {
  event.preventDefault();
  
}
getData(){
  this.service.getUser().subscribe(res => {
      console.log(res);
      
  })
}
onSave(){
  debugger
  this.formData = this.studentform.value;
  console.log(this.studentform.value);
  this.studentform.patchValue({img: this.selectedImage})
    console.log('this.studentinfo',this.studentform);

   this.getData()

  if(this.studentform.valid){
    if(this.data){
      this.service.updateUser(this.data.id,this.studentform.value).subscribe(res=>{
        // alert('Student Updated Success')
        // this.snack.openSnackBar('Update Successfully','Done')
        // Swal.fire("Update Successfully!");
        this.toast.success({detail:"Success Message" , summary:"Update Successfully", duration:5000});
        this.studentform.reset();
        this.dialog.close(true);
      })
    }else{
     this.studentform.patchValue({img: this.selectedImage});
      this.service.addUser(this.studentform.value).subscribe(()=>{
        // alert('Student Added Success')
        // this.snack.openSnackBar('Added Successfully','Done')
        // Swal.fire("Added Successfully!");
        this.toast.success({detail:"Success Message" , summary:"Added Successfully", duration:5000});
        this.studentform.reset();
        this.dialog.close(true);
  })
}
}
}





}

