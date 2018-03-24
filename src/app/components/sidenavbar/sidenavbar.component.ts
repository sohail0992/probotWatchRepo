import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css']
})
export class SidenavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   views: object[] =[
   {
   	  name: "Dionaea",
   	  description: "All logs of Dionaea",
   	  icon: "hacker"
   },
   {
   	  name: "Kippo",
   	  description: "All logs of Kippo",
   	  icon: "hacker"
   }

  ]

}
