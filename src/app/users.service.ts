import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from 'src/app/users';
import { Customers } from './customers';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  //private baseURL = "http://localhost:8080/api/v1/users";
  private baseURL = "http://localhost:8080/api/v1/";
  private userlink = "users";
  private signuplink = "signup";
  private CustomerURL = "http://localhost:8080/api/v1/customers";
  constructor(private httpClient : HttpClient, private toast:ToastrService) { 
  }

  loginUser(users:Users):Observable<String>{
    //console.log(users)
    return this.httpClient.post(`${this.baseURL}`+this.userlink,users,{responseType: 'text'});
  }


  CustomerValidation(customers:Customers):Observable<String>{
   //console.log(customers)
   return this.httpClient.post(`${this.CustomerURL}`,customers,{responseType: 'text'}); 
  }


  CustomerSignup(users:Users):Observable<String>{
    console.log(users)
    return this.httpClient.post(`${this.baseURL}`+this.signuplink,users,{responseType: 'text'});
  }

  Showsuccess(title:any, message:any)
  {
    this.toast.success(message, title,{
    })
  }
  Showerror(title:any, message:any)
  {
    this.toast.error(message, title)
  }
  Showwarning(title:any, message:any)
  {
    this.toast.warning(message, title,{
      easing:'ease-in',
    })
  }
  Showinfo(title:any, message:any)
  {
    this.toast.info(message, title,{
      easing:'ease-in'
    })
  }



}
