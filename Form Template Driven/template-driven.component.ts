import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {

  public  fname:string   = "";
	public  lname:string   = "";
	public  city:string   = "";
	public  email:string   = "";
	public  pincode:string   = "";


  public submit_click():void
  {
      // ajax call to send data to server
      alert("Customer Details are registered.");
      this.reset_click();
  }
  public reset_click():void
  {
    this.fname  = "";
    this.lname  = "";
    this.city = "";
    this.email  = "";
    this.pincode   = "";
  }
  constructor() { }


}
