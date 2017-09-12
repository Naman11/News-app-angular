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
	@Input() data : any;                                        // Takes imput from it's parent
	  constructor(private searchdetailservice :SearchdetailService) { }

   ngOnInit() { }
  getNewsData( newsdata : any){                            //To get the response from service when connected to database
  	this.searchdetailservice.saveData(newsdata).subscribe(refer=> {this.refer=refer;});
  }
}




 