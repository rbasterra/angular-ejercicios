import { AuthService } from './../../core/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { dateValidator } from '../contact/Validators/date.validator';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public signUpForm?: FormGroup;
  public provinces: string[] = ["Álava",
  "Albacete",
  "Alicante",
  "Almería",
  "Asturias",
  "Ávila",
  "Badajoz",
  "Barcelona",
  "Burgos",
  "Cáceres",
  "Cádiz",
  "Cantabria",
  "Castellón",
  "Ciudad Real",
  "Córdoba",
  "La Coruña",
  "Cuenca",
  "Gerona",
  "Granada",
  "Guadalajara",
  "Guipúzcoa",
  "Huelva",
  "Huesca",
  "Baleares",
  "Jaén",
  "León",
  "Lérida",
  "Lugo",
  "Madrid",
  "Málaga",
  "Murcia",
  "Navarra",
  "Ourense",
  "Palencia",
  "Las Palmas",
  "Pontevedra",
  "La Rioja",
  "Salamanca",
  "Segovia",
  "Sevilla",
  "Soria",
  "Tarragona",
  "Santa Cruz de Tenerife",
  "Teruel",
  "Toledo",
  "Valencia",
  "Valladolid",
  "Vizcaya",
  "Zamora",
  "Zaragoza"]

  constructor(private authService: AuthService) { 

    this.signUpForm = new FormGroup({
      name: new FormControl('',Validators.required),
      lastname: new FormControl('',Validators.required),
      email: new FormControl('', {validators: [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}')], updateOn:'blur'}),
      password: new FormControl('',{validators: [Validators.required,Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}')], updateOn:'blur'}),
      phone: new FormControl('',{validators: Validators.pattern('[0-9]{9}'), updateOn:'blur'}),
      birthdate: new FormControl('', {validators: dateValidator(), updateOn:'change'}),
      address: new FormControl(''),
      city: new FormControl(''),
      postal_code: new FormControl(''),
      province: new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  public signUp(event:Event){
    event.preventDefault();
    console.log(this.signUpForm?.value);
    this.authService.signUpUser(this.signUpForm?.value).subscribe(res => console.log(res))
    
  }

}
