import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tickets } from './ticket-interface';


@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private userData: Tickets | undefined;

  //Passa o endereço da nossa Api (Tem que colocar isso em um arquivo depois, ta paia assim.)
  private apiUrl: string = "http://ec2-3-86-32-26.compute-1.amazonaws.com:8080"

  setUserData(data: Tickets) {
    this.userData = data;
  }

  getUserData(): Tickets | undefined {
    return this.userData;
  }

  constructor(private http: HttpClient, private params: HttpParams) { 
    this.apiUrl
  }

  // Chama o método de registrar da nossa API, recebendo como parametro o json de todos os dados necessários.
  register(register: Tickets): Observable<Tickets> {
    return this.http.post<Tickets>(`${this.apiUrl}/api/ticket/register`, register);
  }

  getAll(): Observable<Tickets[]> {
    return this.http.get<Tickets[]>(`${this.apiUrl}/api/ticket/getAll`);
  }

  delete(ticketId : number) : Observable<any>{
    console.log(`${this.apiUrl}/api/ticket/${ticketId}`);
    return this.http.delete(`${this.apiUrl}/api/ticket/${ticketId}`);
  }

  getTicket(ticketId : Number): Observable<Tickets>{
    return this.http.get<Tickets>(`${this.apiUrl}/api/ticket/${ticketId}`);
  }

  updateTicket(ticket : Tickets): Observable<Tickets>{
    console.log(ticket);
    return this.http.put<Tickets>(`${this.apiUrl}/api/ticket`, ticket);
  }
}