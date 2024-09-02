import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../Services/user.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-coform',
  templateUrl: './coform.component.html',
  styleUrls: ['./coform.component.scss']
})
export class COformComponent implements OnInit {
  file: any;
  selectedImage: any;
  encodedImage: string | undefined;
  imgUrl: string = './assets/asd.jpeg';
  coursform: FormGroup;
  formData: any;
  
  constructor(private fb:FormBuilder, private service:UserService, private dialog: MatDialog){
    this.coursform = this.fb.group({
      title:[''],
      disc:[''],
      price:[''],
      auth:[''],
      duration:[''],
      type:[''],
      courceImg: ['']
    })
  }

  ngOnInit(): void {
    
  }

  _handleReaderLoaded(readerEvt : any) {
    this.selectedImage = ('data:image/png;base64,' + btoa(readerEvt.target.result));
  }
  
  onFileSelected(event: any) {
    const files = event.target.files;
    if (files && files.length > 0) {
        const file = files[0];
        this.handleFile(file);
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
        this.coursform.patchValue({ courceImg: this.selectedImage });
    };
    reader.readAsDataURL(file);
}
  onDragOver(event: DragEvent) {
    event.preventDefault();
    
  }


  getData(){
    this.service.getCourse().subscribe(res => {
        console.log(res);
        
    })
  }
  OnSave() {
    debugger
    if (this.coursform.valid) {
      // Form is valid, proceed with saving
      this.formData = this.coursform.value;
      console.log(this.coursform.value);
      
      this.coursform.patchValue({ courceImg: this.selectedImage });
      this.service.addCourse(this.coursform.value).subscribe(() => {
        this.coursform.reset();
        this.dialog.closeAll();
        console.log("hi");
      });
    } else {
      // Form is invalid, handle validation errors or notify the user
      console.log("Form is invalid");
    }
  }
  

}
