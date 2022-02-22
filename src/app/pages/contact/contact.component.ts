import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { dateValidator } from './Validators/date.validator';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public contactForm?: FormGroup;
  public countries: string[] = ['Spain', 'United Kingdom', 'France', 'Italy', 'Germany', 'Portugal', 'Ireland', 'Denmark', 'Netherlands', 'Sweden']
  public isValid: boolean = false;
  public fields: string[] =[];

  constructor() { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl('',Validators.required),
      lastname: new FormControl(''),
      nif: new FormControl('',{validators: [Validators.required,Validators.pattern('[0-9]{7,8}[A-Z]')], updateOn:'blur'}),
      email: new FormControl('', {validators: [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}')], updateOn:'blur'}),
      password: new FormControl('',{validators: [Validators.required,Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}')], updateOn:'blur'}),
      policyCheck: new FormControl('',Validators.required),
      description: new FormControl(''),
      phone: new FormControl('',{validators: Validators.pattern('[0-9]{9}'), updateOn:'blur'}),
      country: new FormControl(''),
      birthdate: new FormControl('', {validators: dateValidator(), updateOn:'change'}),
      companyCheck: new FormControl(''),
      company: new FormControl('')
    })
  }

  public sendForm(event:Event){
    event.preventDefault();
    
    if (this.contactForm?.valid){
      this.isValid = !this.isValid;
      console.log(this.contactForm);
      for (let value in this.contactForm.value){
        this.fields.push(value + ': ' + this.contactForm.value[value]);
        
      }

      console.log(this.fields);
      
      
      
    }

  }

}
