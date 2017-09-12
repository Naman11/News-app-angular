// "use strict";
// var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
//     var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
//     if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
//     else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
//     return c > 3 && r && Object.defineProperty(target, key, r), r;
// };
// var __metadata = (this && this.__metadata) || function (k, v) {
//     if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
// };
// var core_1 = require("@angular/core");
// var news_service_1 = require("./../news.service/news.service");
// var NewsComponent = (function () {
//     function NewsComponent(newsService) {
//         this.newsService = newsService;
//         this.title = "News";
//         this.news = [];
//         this.newsName = [];
//         this.newsId = [];
//     }
//     NewsComponent.prototype.nameSearch = function () {
//         var _this = this;
//         this.newsService.nameSearch()
//             .subscribe(function (resnews) {
//             _this.news = resnews;
//             console.log(_this.news);
//             // this.channelName();
//             // console.log(this.channelName());
//         });
//     };
//     // channelName():void{
//     //    for(let i=0;i<this.news.length;i++){
//     //      this.newsId=this.news[i].id;
//     //     this.newsName.push(this.news[i].name);
//     //     // console.log(this.newsId);
//     //     console.log(this.newsName);
//     //    }   
//     // }
//     NewsComponent.prototype.ngOnInit = function () {
//         this.nameSearch();
//     };
//     return NewsComponent;
// }());
// NewsComponent = __decorate([
//     core_1.Component({
//         selector: 'news',
//         templateUrl: './news.component.html',
//         styleUrls: ['./news.component.css']
//     }),
//     __metadata("design:paramtypes", [news_service_1.NewsService])
// ], NewsComponent);
// exports.NewsComponent = NewsComponent;
// //# sourceMappingURL=news.component.js.map