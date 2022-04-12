import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './../../core/services/auth.service';
import { UserLogged, UserDetails } from './../../models/User/User.models';
import { Component, OnInit } from '@angular/core';
import { dateValidator } from '../contact/Validators/date.validator';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent implements OnInit {

  public user: UserDetails = {
    name: '',
    lastname: '',
    email: ''
  };
  public objectKeys: (keyof UserDetails)[] = [];

  public userForm!: FormGroup;

  public pwdError: boolean = false;
  

  constructor(private authService: AuthService) { 
    
    this.authService.getUserDetails().subscribe((userLogged: UserLogged) => {
      this.userForm = new FormGroup({
        name: new FormControl({value: userLogged.name, disabled:true}, Validators.required),
        lastname: new FormControl({value: userLogged.lastname, disabled:true},Validators.required),
        email: new FormControl({value: userLogged.email, disabled: true}, {validators: [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}')], updateOn:'blur'}),
        password: new FormControl({value:'', disabled:true},{validators: [Validators.required, Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}')], updateOn:'blur'}),
        phone: new FormControl({value:userLogged.phone, disabled:true},{validators: Validators.pattern('[0-9]{9}'), updateOn:'blur'}),
        birthdate: new FormControl({value:userLogged.birthdate, disabled:true}, {validators: dateValidator(), updateOn:'change'}),
        address: new FormControl({value:userLogged.address, disabled:true}),
        city: new FormControl({value:userLogged.city, disabled: true}),
        postal_code: new FormControl({value:userLogged.postal_code, disabled:true}),
        province: new FormControl({value:userLogged.province, disabled:true})
      });
  

      this.user = {
        name: userLogged.name,
        lastname: userLogged.lastname,
        email: userLogged.email,
        password: userLogged.password || '',
        phone: userLogged.phone || 0,
        birthdate: userLogged.birthdate,
        address: userLogged.address || '',
        city: userLogged.city || '',
        postal_code: userLogged.postal_code || 0,
        province: userLogged.province || ''
      }
  
      
      this.objectKeys = Object.keys(this.user) as [keyof UserDetails];
      this.objectKeys.splice(this.objectKeys.indexOf('email'),1);

    }, err => {
      if(err.status === 401){
        console.log(err.error);
        
        this.authService.removeUserInfo();
        
      }
    });
  
  }

  ngOnInit(): void {
  }

 

  public enableInput(e: Event) {
    
    const input = (e.target as HTMLElement).previousElementSibling as HTMLInputElement;
    let buttonText = (e.target as HTMLElement).innerText;
    const id = (e.target as HTMLElement).id;
    
    this.userForm?.get(id)?.disabled ? this.userForm?.get(id)?.enable() : this.userForm?.get(id)?.disable();
    if (input.value === 'undefined'){
      input.value = '';
      
    }

    if(buttonText === 'Modify') input.focus();
    else input.blur();
      
    buttonText === 'Modify' ? buttonText='Done' : buttonText = 'Modify';

    (e.target as HTMLElement).innerText = buttonText;
    
  }

  public updateUserInfo(e: Event) {
    e.preventDefault();

    const regExp = new RegExp('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}');
    const pwd = this.userForm.get('password');

    if((!regExp.test(pwd?.value) && pwd?.dirty) && !(pwd?.value === '')){
      this.pwdError = true;
    } else{
      this.pwdError = false;
      this.authService.updateUser(this.userForm?.getRawValue()).subscribe(res => console.log(res),
        err => {
          if(err.status === 401){
            console.log(err.error);
            
            this.authService.removeUserInfo();
            
          }
       }
      );
    }
    
    
    
  }

}
