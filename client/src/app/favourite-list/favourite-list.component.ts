import { Component,Input } from '@angular/core';
import { FavouriteListService } from './favourite-list.service'

@Component({
  selector: 'app-favourite-list',
  templateUrl: './favourite-list.component.html',
  styleUrls: ['./favourite-list.component.css'],
  providers: [FavouriteListService]
})
export class FavouriteListComponent {
	@Input() dispdata:any;

	updatedata:any;
	deletedata:any;
  
  constructor(private favouriteListService:FavouriteListService ) { }

  updatefav(data){
  	this.updatedata=data;
  }
  deletefav(data){
    this.favouriteListService.deletefav(data)
    .subscribe((res)=>{
      this.deletedata=res;
      alert("successfully deleted")
    })
  }
}