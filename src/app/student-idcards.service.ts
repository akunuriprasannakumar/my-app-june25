import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class StudentIdcardsService {
  getSortedstudentidcards(column: string, order: string) {
    throw new Error('Method not implemented.');
  }
  constructor(private _httpClient:HttpClient){ }
   apiUrl:string="https://6128991386a213001729f9df.mockapi.io/test/v1/student";

    getstudentidcards():Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student");
    
  }
   

deletestudentidcards(id:any):Observable<any>{
    return this._httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/student/"+id);
    
  }
  getFilteredstudentidcards(term:any):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student"+term);
    
  }
  getSortedstudentIdcards(column:string,order:string):Observable<any>{
   return this._httpClient.get(this.apiUrl+"?sortBy="+column+"&order="+order);

}
getPaginatedstudentIdcards(items:any,page:any):Observable<any>{
   return this._httpClient.get(this.apiUrl+"?limit="+items+"&page="+page);
}
}