import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(email: string, password: string) {
    return this.http.post(
      `https://localhost:7058/api/Auth/login`,
      { email, password},{withCredentials: true}
    )
  }
  signUp(name:string,surname:string,phoneNumber:string,email:string,password:string,usertype:string,adress:string){
    return this.http.post(
      `https://localhost:7058/api/Auth/register`,
      {name,surname,phoneNumber, email, password,usertype,adress}
    )
  }
}
