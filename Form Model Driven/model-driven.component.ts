import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.css']
})

export class ModelDrivenComponent
{

  customerForm : FormGroup = new FormGroup({
    fname :  new FormControl('', Validators.required),
    lname :  new FormControl('', Validators.required),
    city :  new FormControl('',  [Validators.minLength(3), Validators.maxLength(10)]),
    email :  new FormControl('', Validators.email),
    pincode :  new FormControl('', Validators.pattern("\\d{6}")),
    isToRead: new FormControl(false, Validators.requiredTrue)
  });


  result:string  = "";

  public submit_click():void
  {
      // ajax call to send data to server
      alert("Customer Details are registered.");
      console.log(this.customerForm.value);
      this.result = this.customerForm.value;
  }

}