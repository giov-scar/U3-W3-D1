import { Component, OnInit } from '@angular/core';
import { CommerceService } from 'src/app/commerce.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  products: any[] = [];

  constructor(private productSvc: CommerceService) { }

  ngOnInit(): void {
    this.productSvc.getProducts().subscribe(
      (res: any) => {
      if (Array.isArray(res.products)) {
        this.products = res.products;
    } else {
      console.error('Errore', res);
    }
  },
  (error) => {
    console.error('Errore', error);
  }
)
}

addFavourites(product: any): void {
  this.productSvc.addFavourites(product)
}

addToCart(product: any): void {
  this.productSvc.addToCart(product)
}



}
