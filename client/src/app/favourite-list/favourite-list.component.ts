import { Component,Input } from '@angular/core';
import { FavouriteListService } from './favourite-list.service'

@Component({
  selector: 'app-favourite-list',
  templateUrl: './favourite-list.component.html',
  styleUrls: ['./favourite-list.component.css'],
  providers: [FavouriteListService]
})
export class FavouriteListComponent {
	@Input() dispdata:any;      //Receives input from parent

	updatedata:any;
	deletedata:any;
  
  constructor(private favouriteListService:FavouriteListService ) { }

  updatefav(data){                                    //receives data when clicked on the update button
  	this.updatedata=data;
  }
  deletefav(data){                                    //deleted data when clicked on delete button
    this.favouriteListService.deletefav(data)
    .subscribe((res)=>{
      this.deletedata=res;
      alert("successfully deleted")
    })
  }
}