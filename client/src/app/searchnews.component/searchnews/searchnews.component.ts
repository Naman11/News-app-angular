import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchnewsService } from './../../searchnews.service/searchnews.service'

@Component({
  selector: 'app-searchnews',
  templateUrl: './searchnews.component.html',
  styleUrls: ['./searchnews.component.css']
})
export class SearchnewsComponent implements OnInit {
	title="News";
	news:any=[];  
  selected:any;

  @Output() childEvent= new EventEmitter();          //Passes output to parent to be used by siblings 

  constructor(private searchnewsservice:SearchnewsService) { }

  nameSearch(): void {   
    this.searchnewsservice.nameSearch()
    .subscribe(resnews=> {
       this.news=resnews;});
  }
  getNews(){                                            //Function to get data from service and emit it to the parent
   this.searchnewsservice.newSearch(this.selected)
     .subscribe(data=>{
       this.childEvent.emit(data);
     });
  }
  ngOnInit() {
    this.nameSearch();
  }
   onSelect(value: any): void {                       //Function gets value when clicked at the dropdown                 
    this.selected = value;
    this.getNews();
  }
}
