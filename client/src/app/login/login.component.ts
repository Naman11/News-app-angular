import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent {

 data:any={};
  constructor(private loginService:LoginService, private router:Router) { }

	rightCredential(){
		alert("successfully login")
		this.router.navigateByUrl('search')
	}
	
	wrongCredential(){
		alert("wrong credential")
		this.router.navigateByUrl('login')
	}


  enter(data:any){
		data
		.filter((event)=>{return (event.email
		.includes(this.data.email)&&event.password.includes(this.data.password)) ?this.rightCredential():this.wrongCredential()})
	}
	
  login(data)
	{
	this.loginService.login()
	.subscribe(data=>this.enter(data));
	}
}