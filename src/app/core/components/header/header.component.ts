import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public title: string = 'Marvel app';

  public loginForm?: FormGroup;

  public navList: string[] =['Home', 'Gallery', 'Contact', 'Characters'];
  isActive: boolean = false;
  closeResult: string = '';

  constructor(private router: Router, private modalService: NgbModal) { }

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      email: new FormControl('', {validators: [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}')], updateOn:'blur'}),
      password: new FormControl('',{validators: [Validators.required,Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}')], updateOn:'blur'})
    });
  }

  public activateLink(item:string){
    return this.router.url === '/'+item.toLowerCase();
    
    
  }

  public open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.loginForm?.setValue({email: '', password:''});
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.loginForm?.setValue({email: '', password:''});
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

}
