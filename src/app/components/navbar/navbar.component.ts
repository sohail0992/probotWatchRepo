import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   

   navLinks: object[] =[
   {
   	   label : "HAV",
       path: "/dashboard",  
   },
   {
   	   label : "Dionaea",
       path: "/dionaea",  
   }

  ]

  constructor() { }

  ngOnInit() {
  }
 
}
