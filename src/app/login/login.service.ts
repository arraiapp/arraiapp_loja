import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Logins } from './login-interface';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //Passa o endereço da nossa Api (Tem que colocar isso em um arquivo depois, ta paia assim.)
  private apiUrl: string = "http://localhost:8080"
  
  constructor(private http: HttpClient) { 
    this.apiUrl;
  }

  // Chama o método de login da nossa API, recebendo como parametro o cpf e senha.
  login(login: Logins): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/stallholder/login`, login);
  }


}