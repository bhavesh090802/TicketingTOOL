import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private _http:HttpClient) { }

  addTicket(data:any):Observable<any> {
    return this._http.post(`http://localhost:3000/tickets`,data);
  }

  updateTicket(id:number ,data:any):Observable<any> {
    return this._http.put(`http://localhost:3000/tickets/${id}`,data);
  }
  getTicketList():Observable<any> {
    return this._http.get(`http://localhost:3000/tickets`);
  }
}
