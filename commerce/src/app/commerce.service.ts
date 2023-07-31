import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommerceService {
  private apiUrl:string = 'https://dummyjson.com/products';
  private favourites: any[] = [];
  private cart: any[] = [];

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  addFavourites(products:any):void {
    this.favourites.push(products);
  }

  getFavourites(): any[] {
    return this.favourites;
  }

  removeFavourites(products: any): void {
    const index = this.favourites.indexOf(products);
    if (index !== -1) {
      this.favourites.splice(index, 1);
    }
  }

  addToCart(products: any): void {
    this.cart.push(products);
  }

  getCart(): any[] {
    return this.cart;
  }
}
