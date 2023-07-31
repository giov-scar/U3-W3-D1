import { Component } from '@angular/core';
import { CommerceService } from 'src/app/commerce.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cart:any[] = [];

  constructor(private cartSvc:CommerceService) { }

  ngOnInit(): void{
    this.cart = this.cartSvc.getCart();
  }

  removeFromCart(product:any): void{
    const index = this.cart.indexOf(product);
    if(index !== -1){
      this.cart.splice(index,1);
  }
  }
}
