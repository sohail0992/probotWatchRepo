import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
// import { logger } from 'logger';
import { Auth  } from 'basic-auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
userData = { username:'', password:'' };
// error = String;
data: any;
isTrue : boolean;
constructor(private http: HttpClient, private router: Router) {
 // this.Logger = logger;
 this.isTrue = false;
}
ngOnInit() {
// data = {
// 	email: "blah.com",
// 	pass: 123
// 	};

//  this.http.post('http://localhost:3000/users/login:data').subscribe(data => {
//   });
 }

 login() {
   console.log('dfsdf')
   this.http.post('http://localhost:3000/users/login',this.userData).subscribe(resp => {
    this.data = resp;
    console.log(this.data,'ddddd');
    // localStorage.setItem('jwtToken', this.data.token);
    // this.router.navigate(['books']);
  }, err => {
     var error = err.error.msg;
  });
}

}
