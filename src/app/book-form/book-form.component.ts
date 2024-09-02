import { Component } from '@angular/core';
import { UserService } from '../Services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent {
  file: any;
  selectedImage: any;
  encodedImage: string | undefined;
  imgUrl: string = './assets/asd.jpeg';
  bookform: FormGroup;
  formData: any;
  
  constructor(private fb:FormBuilder, private service:UserService, private dialog: MatDialog){
    this.bookform = this.fb.group({
      bname:[''],
      disc:[''],
      price:[''],
      auth:[''],
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
        this.bookform.patchValue({ courceImg: this.selectedImage });
    };
    reader.readAsDataURL(file);
}
  
  onDragOver(event: DragEvent) {
    event.preventDefault();
    
  }


  getData(){
    this.service.getBook().subscribe(res => {
        console.log(res);
        
    })
  }
  OnSave() {
    debugger
    if (this.bookform.valid) {
      // Form is valid, proceed with saving
      this.formData = this.bookform.value;
      console.log(this.bookform.value);
      
      this.bookform.patchValue({ courceImg: this.selectedImage });
      this.service.addBook(this.bookform.value).subscribe(() => {
        this.bookform.reset();
        this.dialog.closeAll();
        console.log("hi");
      });
    } else {
      // Form is invalid, handle validation errors or notify the user
      console.log("Form is invalid");
    }
  }
}
