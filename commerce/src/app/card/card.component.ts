import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() product:any
  @Output() addToFavorites = new EventEmitter<any>();
  @Output() addToCart = new EventEmitter<any>();

  onAddToFavorites(): void {
    this.addToFavorites.emit(this.product);
  }

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }


}
