import { JsonCrudExampleService } from '../json-crud-example.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json-service-example-employee',
  templateUrl: './json-service-example-employee.component.html',
  styleUrls: ['./json-service-example-employee.component.css']
})
export class JsonServiceExampleEmployeeComponent implements OnInit {
  
  
  empno :number  = 0;
  ename  :string  = "";
  job  :string  = "";
  sal  :number = 0;
  deptno :number  = 0;
  isDisabled :boolean = false;
 
 
   public empArray:any[] = [];
 
 
   constructor(private jsonCrudService: JsonCrudExampleService) { }

   ngOnInit(): void {
   }
 
   getEmp_click()
   {
    this.jsonCrudService.getData().subscribe( (response:any[]) =>{
      this.empArray = response;
   });
 
   }
 
 
   addEmp_click()
   {
     let empObj:Emp = new Emp();
     empObj.empno = this.empno;
     empObj.ename = this.ename;
     empObj.job = this.job;
     empObj.sal = this.sal;
     empObj.deptno = this.deptno;
 
     this.jsonCrudService.addData(empObj).subscribe( (response:any) =>{
      //console.log("New Employee details are added to server.");
       alert("New Employee details are added to server.");
       this.clearFields();
       this.getEmp_click();  // to get all the updated results
     });
   }
 
   removeEmp_click(empno:number)
   {
    this.jsonCrudService.deleteData(empno).subscribe( (response:any) =>{
      // console.log("Requested Employee details are deleted from  server.");
       alert("Requested Employee details are deleted from  server.");
       this.getEmp_click();  // to get all the updated results
     });
   }
 
 
   selectEmp_click(empno:number)
   {
    this.jsonCrudService.getDataById(empno).subscribe( (response:any) =>{
 
       let empObj = response;
       this.empno =   empObj.empno;
       this.ename =   empObj.ename;
       this.job 		=  empObj.job;
       this.sal 		=  empObj.sal;
       this.deptno 		=  empObj.deptno;
       this.isDisabled = true;
     });
   }
 
   updateEmp_click()
   {
     let empObj:Emp = new Emp();
     empObj.empno = this.empno;
     empObj.ename = this.ename;
     empObj.job = this.job;
     empObj.sal = this.sal;
     empObj.deptno = this.deptno;
 
     this.jsonCrudService.updateData(empObj).subscribe( (response:any) =>{
       //console.log("Requested Employee details are updated to server.");
       alert("Requested Employee details are updated to server.");
       this.clearFields();
       this.getEmp_click();  // to get all the updated results
     });
   }
 
   clearFields()
   {
       this.isDisabled = false;
       this.empno = 0;
       this.ename  = "";
       this.job  = "";
       this.sal  = 0;
       this.deptno = 0;
   }
 
 }
 
 class Emp
 {
   empno  : number = 0;
   ename  : string  = "";
   job  : string  = "";
   sal  : number = 0;
  deptno: number  = 0;
 }