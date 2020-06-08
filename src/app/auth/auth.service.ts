import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthData } from './auth-data.model';

@Injectable({providedIn: "root"})
export class AuthService {

  constructor(private http: HttpClient){}

  /**/

  createUser (
    email: string,
    password: string,
    name: string,
    birthday:string,
    telephone: string){

      const authData: AuthData = {
        email: email,
        password: password,
        name:name,
        birthday: birthday,
        telephone: telephone
      };
      this.http.post('http://localhost:3000/api/user/signup', authData)
        .subscribe(response => {
          console.log(response);
      });
  }
}
