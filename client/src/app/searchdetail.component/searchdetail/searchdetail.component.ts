import { Component, OnInit,Input } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchdetailService } from './../../searchdetail.service/searchdetail.service';

@Component({
  selector: 'app-searchdetail',
  templateUrl: './searchdetail.component.html',
  styleUrls: ['./searchdetail.component.css']
})
export class SearchdetailComponent implements OnInit {
   refer: any;
	@Input() data : any;
	  constructor(private searchdetailservice :SearchdetailService) { }

   ngOnInit() { }
  getNewsData( newsdata : any){
  	this.searchdetailservice.saveData(newsdata).subscribe(refer=> {this.refer=refer;});
  }
}




 