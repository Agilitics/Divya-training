import { Component, OnInit } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { FormGroup,FormControl,ReactiveFormsModule,FormBuilder,Validators,RequiredValidator, EmailValidator } from '@angular/forms';


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',


  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

firstname:string;
lastname:string;
email:string;
phone:number;
message:string;
form: FormGroup;

  constructor(private readonly fb: FormBuilder) {

    this.form = this.fb.group({
      firstname: ['',[Validators.required, Validators.minLength(3)]],
      lastname:['',[Validators.required,Validators.minLength(3)]],
      email: ['bad@',[Validators.required,Validators.email]],
      phone: ['',[Validators.required, Validators.min(10), Validators.max(10)]],
      message: ['',Validators.required],
    });
  
    this.form.setValue({
      firstname: 'firstname',
      lastname: 'lastname',
      email: 'email',
      phone:'phone',
      message: 'message',
    })
    };
contact: any= {};

  codes: string[]=[
    '(US)00',
    '(CAN)+1',
    '(AUS)+61',
    '(GER)+49',
    '(IND)+91',
  ];
  ngOnInit(): void{}
  
  submitForm(){ 
console.log(this.form.get('email'));
    console.log(this.form.getRawValue());

    
    }
   
  sendMessage() {
    console.log(this.contact);
      
    }

}

  


