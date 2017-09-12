// import { Component,OnInit } from '@angular/core';
// import { NewsService } from './../news.service/news.service';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// @Component({
// 	selector:'news',
// 	templateUrl: './news.component.html',
// 	styleUrls:['./news.component.css']
// })
// export class NewsComponent implements OnInit{
//   title="News";
//   news:any=[];
//   // newsName:string[]=[];
//   newsId:any[]=[];  
//   selected:any;
//   data:any;

//     constructor(private newsService: NewsService) { }
//     nameSearch(): void {   
//     this.newsService.nameSearch()

//     .subscribe(resnews=> {
//        this.news=resnews;
//        console.log(this.news);
//        });
//   }
//   getNews(){           
//    this.newsService.newSearch(this.selected)
//      .subscribe(data=>{
//        console.log(data); 
//        this.data = data;
//      });
//   }
//    ngOnInit(): void {
//     this.nameSearch();
//   }
//   onSelect(value: any): void {
//     this.selected = value;
//     this.getNews();
//     // console.log(this.selected);
//   }
// }