import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private cardData = new BehaviorSubject<any>(null);
  currentCardData = this.cardData.asObservable();


  constructor(private httpClient:HttpClient) { }

  
  updateCardData(data: any) {
    this.cardData.next(data);
  }

  
  addUser(data:any){
    return this.httpClient.post("http://localhost:4000/students",data);
  }
  getUser(){
    return this.httpClient.get("http://localhost:4000/students");
  }
  deleteUser(id:number){
    return this.httpClient.delete("http://localhost:4000/students/"+id);
  }
  updateUser(id:number,data:any){
    return this.httpClient.put("http://localhost:4000/students/"+id,data);
  }
  addAuth(data:any){
    return this.httpClient.post("http://localhost:3000/auth",data);
  }
  getAuth(){
    return this.httpClient.get("http://localhost:3000/auth");
  }
  addCourse(data:any){
    return this.httpClient.post("http://localhost:3000/course",data);
  }
  getCourse(){
    return this.httpClient.get("http://localhost:3000/course");
  }

  getDetails(id: any){
    return this.httpClient.get("http://localhost:3000/course/",id);
  }

  deleteCourse(id:number){
    return this.httpClient.delete("http://localhost:3000/course/"+id);
  }
  addBook(data:any){
    return this.httpClient.post("http://localhost:3000/book",data);
  }
  getBook(){
    return this.httpClient.get("http://localhost:3000/book");
  }
  deleteBook(id:number){
    return this.httpClient.delete("http://localhost:3000/book/"+id);
  }
  login(){
  
    this.sendtoken();
  }
  signout(){
    localStorage.removeItem('token')
    localStorage.removeItem('username')
  
    
  }


  sendtoken() {
    
    const length = 32
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@~#$%^&*()_+|}{:;<>?';
    let token = '';
    for (let i = 0; i < length; i++) {
      token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    localStorage.setItem("token", token)

  }


  IsLoggedIn(){
    if (localStorage.getItem("username")){
      return true;
    }
    return false;
  }
  
}


