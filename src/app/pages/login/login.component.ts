import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginObj : any = {
  "EmailId": "",
  "Password": ""
}
/*
  "EmailId": "chetan@gmail.com",
  "Password": "admin"
  https://freeapi.miniprojectideas.com/index.html
*/
  constructor(private http: HttpClient, private route: Router) { }

  ngOnInit(): void {
  }
  onLogin(){
   this.http.post('/api/User/Login', this.loginObj).subscribe((res:any)=>{
    if(res.result){
      alert("Login Success");
      localStorage.setItem('loginToken', res.data.token);
      this.route.navigateByUrl('/dashboard')
    }
    else{
      alert(res.message);
    }
   })
  }
}
