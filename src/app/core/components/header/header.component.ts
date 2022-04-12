
import { UserLogged } from './../../../models/User/User.models';
import { AuthService } from './../../services/auth.service';

import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public title: string = 'Marvel app';

  public loginForm?: FormGroup;

  public navList: string[] =['Home', 'Gallery', 'Characters', 'Contact'];
  isActive: boolean = false;
  closeResult: string = '';

  public loginError: boolean = false;
  public loginErrorText: string = '';

  public user?: UserLogged;
  public userLoggedClass: string = 'icon icon-user-o';

  public isCollapsed = true;

  constructor(private router: Router, private modalService: NgbModal, private authService: AuthService) { 
  }

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      email: new FormControl('', {validators: [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}')], updateOn:'blur'}),
      password: new FormControl('',{validators: [Validators.required,Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}')], updateOn:'change'})
    });

    this.authService.userAuthenticated.subscribe(user =>{
      this.userLoggedClass = user?._id ? this.userLoggedClass + ' icon-logged' : this.userLoggedClass;
    })

    this.userLoggedClass = this.authService.isAuthenticated() ? this.userLoggedClass + ' icon-logged' : this.userLoggedClass;

    this.user = this.authService.getUserInfo();    
    

  }

  // ngAfterViewInit(): void {

  //   this.authService.isAuthenticated() ? this.userLoggedClass + ' icon-logged' : this.userLoggedClass
  //   // this.authService.isAuthenticated() ? console.log('condicion') : this.userLoggedClass
  //   console.log(this.userLoggedClass);
    
  // }

  public activateLink(item:string){
    return this.router.url === '/'+item.toLowerCase();
    
    
  }

  public open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      // this.loginForm?.setValue({email: '', password:''});
      this.loginError = false;
      this.loginForm?.reset();
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      // this.loginForm?.setValue({email: '', password:''});
      this.loginError = false;
      this.loginForm?.reset();
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  public loginUser(event: Event){
    event.preventDefault();

    console.log(this.loginForm?.value);

    // this.authService.authenticateUser(this.loginForm?.value).subscribe({next: res => this.modalService.dismissAll('login'),
    //   error: err => {
    //     this.loginError = true;
    //     this.loginErrorText = err.error;
    //   }
    // })
    
    this.authService.authenticateUser(this.loginForm?.value).subscribe({next: (res: UserLogged) => {
      this.user = res;      
      this.isCollapsed = !this.isCollapsed
      this.loginError = false;
      this.loginForm?.reset();
    },
      error: err => {
        this.loginError = true;
        this.loginErrorText = err.error;
      }
    })


  }

  public signUpClick(){
    this.isCollapsed = !this.isCollapsed;
    this.loginError = false;
    this.loginForm?.reset();
    // this.modalService.dismissAll('sign up');
  }

  public clickCollapse(){
    this.isCollapsed = !this.isCollapsed;
  }

  public logOut(){
    
    
    this.authService.logOutUser(this.user).subscribe({next: res => {
      // this.isCollapsed = !this.isCollapsed;
      // this.userLoggedClass = this.userLoggedClass.slice(0, this.userLoggedClass.indexOf(' icon-logged'));
      // this.user = undefined;
    },
    error: err => console.log(err)
    
    });

    this.isCollapsed = !this.isCollapsed;
    this.userLoggedClass = this.userLoggedClass.slice(0, this.userLoggedClass.indexOf(' icon-logged'));
    this.user = undefined;
    
    
    
    
    // this.userLoggedClass = this.authService.isAuthenticated() ? this.userLoggedClass + ' icon-logged' : this.userLoggedClass;
  }

}
