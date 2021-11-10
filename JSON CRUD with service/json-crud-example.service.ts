import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonCrudExampleService {

  dataArray:any[] =  [];
  url:string  = "http://localhost:3000/employee";

  constructor(private httpObj: HttpClient) {

  }

  getData():Observable<any[]>
  {
      return this.httpObj.get<any[]>(this.url);
  }

  getDataById(empno:number) : Observable<any>
  {
    return this.httpObj.get<any>(`${this.url}/${empno}`);
  }

  addData(dataObj:any) : Observable<any>
  {
    return this.httpObj.post<any>(this.url, dataObj);
  }

  updateData(dataObj:any) : Observable<any>
  {
    return this.httpObj.put<any>(this.url + "/" + dataObj.empno, dataObj);
  }

  deleteData(empno:number) : Observable<any>
  {
    return this.httpObj.delete<any>(`${this.url}/${empno}`);
  }
}