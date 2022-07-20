
import { Injectable } from '@angular/core';
import {Evenement} from "../model/evenement";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class EvenementService {
   url: string = environment.url  + "/evenement";
   constructor(private http: HttpClient) { }
   //get Books
   getList(){
     return this.http.get<Evenement[]>(this.url + "/")
   }
   //add a new Book
  addEvenement(evenement:Evenement){
     return this.http.post(this.url + "/add",evenement )
  }
  //delete a book
  deleteEvenement(_id: string){
     return this.http.delete(this.url + "/delete/" +_id)
  }
  //update a book
  updateEvenement(evenement: Evenement){
     return this.http.put(this.url + "/update/" + evenement._id, evenement)
  }
}


*/