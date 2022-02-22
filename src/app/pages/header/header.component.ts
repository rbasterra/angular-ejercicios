import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public title: string = 'Ejercicio Rutas';

  public navList: string[] =['Home', 'Gallery', 'Contact'];
  isActive: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public activateLink(item:string){
    return this.router.url === '/'+item;
    
    
  }

}
