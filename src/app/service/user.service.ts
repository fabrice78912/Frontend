import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  url = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  signUp(data: any) {
    return this.httpClient.post(this.url
      + "/user/signUp", data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
  }

  forgotPassword(data: any) {
    return this.httpClient.post(this.url
      + "/user/forgotPassword", data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
  }

  login(data: any) {
    return this.httpClient.post(this.url
      + "/user/login", data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
  }

  checkToken(){
    return this.httpClient.get(this.url
      + "/user/checkToken");
  }


  changePassword(data: any) {
    return this.httpClient.post(this.url
      + "/user/changePassword", data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
  }


  getUser(){
    return this.httpClient.get(this.url+"/user/get");
  }



  updateUser(data: any) {
    return this.httpClient.post(this.url
      + "/user/update", data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
  }

  
}
