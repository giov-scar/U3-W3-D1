import { Component, OnInit } from '@angular/core';
import { CommerceService } from 'src/app/commerce.service';


@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit{
 favourites: any[] = [];

 constructor(private productSvc: CommerceService) { }
 ngOnInit(): void {
   this.favourites = this.productSvc.getFavourites()
 }

 removeFromFavourites(product: any): void {
   this.productSvc.removeFavourites(product)
   this.favourites = this.productSvc.getFavourites()
 }

}
