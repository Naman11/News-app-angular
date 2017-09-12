import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map'; 

@Injectable()
export class FavouriteListService {
	private deleteurl: string="http://localhost:3003/deleteval/"

  constructor(private http:Http) { }

   deletefav(newsid:string){
   	 return this.http
   	 .delete(this.deleteurl+newsid)
   	 .map(res=>{
   	 	res.json();
   	  },(error:any)=>error.json());
   }
}