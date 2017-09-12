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

  @Output() childEvent= new EventEmitter();

  constructor(private searchnewsservice:SearchnewsService) { }

  nameSearch(): void {   
    this.searchnewsservice.nameSearch()
    .subscribe(resnews=> {
       this.news=resnews;});
  }
  getNews(){           
   this.searchnewsservice.newSearch(this.selected)
     .subscribe(data=>{
       this.childEvent.emit(data);
     });
  }
  ngOnInit() {
    this.nameSearch();
  }
   onSelect(value: any): void {
    this.selected = value;
    this.getNews();
  }
}
