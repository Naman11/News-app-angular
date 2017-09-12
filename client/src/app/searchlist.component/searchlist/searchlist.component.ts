import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-searchlist',
  templateUrl: './searchlist.component.html',
  styleUrls: ['./searchlist.component.css']
})
export class SearchlistComponent {
	@Input() inputdata : any;
  

}
