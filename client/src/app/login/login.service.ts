import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from './../model/User';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  constructor(private http:Http) { }
  login(): Observable<any>{
  	const url="http://localhost:3003/login";
  	return this.http
  	.get(url)
  	.map((res:Response)=> res.json() as User);

  }
}