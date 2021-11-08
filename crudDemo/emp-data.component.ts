import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-data',
  templateUrl: './emp-data.component.html',
  styleUrls: ['./emp-data.component.css']
})


export class EmpDataComponent implements OnInit {

  empno : number  = 0;
  ename  : string  = "";
  job  : string  = "";
  sal : number  = 0;
  deptno : number  = 0;
  isDisabled : boolean = false;

 url:string  = "http://localhost:3000/emps";

  public empsArray:any[] = [];

  constructor(private httpObj: HttpClient) { }

  ngOnInit(): void {
  }

  getEmps_click()
  {
    this.httpObj.get<any[]>(this.url).subscribe( (response:any[]) =>{
          this.empsArray = response;
    });

  }

  addEmps_click()
  {
    let empsObj:Employees = new Employees();
    empsObj.empno = this.empno;
    empsObj.ename = this.ename;
    empsObj.job = this.job;
    empsObj.sal = this.sal;
    empsObj.deptno = this.deptno;

    this.httpObj.post<any>(this.url,  empsObj).subscribe( (response:any) =>{
      console.log("New Employee details are added to server.");
      alert("New Employee details are added to server.");
      this.clearFields();
      this.getEmps_click();  // to get all the updated results
    });
  }

  removeEmps_click(empno:number)
  {
    this.httpObj.delete<any>(this.url + "/" + empno).subscribe( (response:any) =>{
      console.log("Requested Employee details are deleted from  server.");
      alert("Requested Employee details are deleted from  server.");
      this.getEmps_click();  // to get all the updated results
    });
  }


  selectEmps_click(empno:number)
  {
    this.httpObj.get<any>(this.url + "/" + empno).subscribe( (response:any) =>{

      let empsObj = response;
      this.empno =   empsObj.empno;
      this.ename =   empsObj.ename;
      this.job 		=  empsObj.job;
      this.sal = empsObj.sal;
      this.deptno = empsObj.deptno;
      this.isDisabled = true;

    });

  }

  updateEmps_click()
  {
    let empsObj:Employees = new Employees();
    empsObj.empno = this.empno;
    empsObj.ename = this.ename;
    empsObj.job = this.job;
    empsObj.sal = this.sal;
    empsObj.deptno = this.deptno;

    this.httpObj.put<any>(this.url + "/" +  empsObj.empno,  empsObj).subscribe( (response:any) =>{
      console.log("Requested Employee details are updated to server.");
      alert("Requested Employee details are updated to server.");
      this.clearFields();
      this.getEmps_click();  // to get all the updated results
    });

  }

  clearFields()
  {
      this.isDisabled = false;
      this.empno = 0;
      this.ename  = "";
      this.job  = "";
      this.sal = 0;
      this.deptno = 0;
  }

}

class Employees
{
  empno : number  = 0;
  ename  :string  = "";
  job  :string  = "";
  sal : number  = 0;
  deptno : number  = 0;
}

