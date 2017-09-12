import { Component } from '@angular/core';
import { SearchnewsService } from './../searchnews.service/searchnews.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css'],
  providers: [SearchnewsService]
})
export class HeadComponent {

  data:any={};
  title="News";
  newsdata(data) {this.data=data;}

}
