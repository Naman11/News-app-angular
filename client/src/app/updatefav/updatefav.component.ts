import { Component,Input } from '@angular/core';
import { UpdatefavService } from './updatefav.service';

@Component({
  selector: 'app-updatefav',
  templateUrl: './updatefav.component.html',
  styleUrls: ['./updatefav.component.css'],
  providers: [UpdatefavService]
})
export class UpdatefavComponent {
	@Input() inputdata:any;
  resp:any;
  news:string;
  constructor(private updatefavService:UpdatefavService) { }
  updatefav(inputdata:any){
  	this.updatefavService.updatefav(inputdata)
  	.subscribe((res)=>{
  			this.resp=res;
        alert("successfully updated")
  	});
  }
}
