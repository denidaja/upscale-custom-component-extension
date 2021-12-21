import { Component } from '@angular/core';

import { WishlistService } from '../services/wishlist.service.js';
import { clickedProduct } from '../script.js';
import { TimesBought } from '../models/TimesBought.js';

@Component({
  selector: 'app-wishlist-button',
  templateUrl: './wishlist-button.component.html',
  styleUrls: ['./wishlist-button.component.css'],
})
export class WishlistButtonComponent {
  timesBought = null;

  constructor(private service: WishlistService) {
    this.getData();
  }

  getData() {
    this.service.getTimesBought(clickedProduct.productID).subscribe(
      (data: TimesBought) => {
        setTimeout(() => {
          this.timesBought = data.quantity;
        }, 0);
      },
      (error: Response) => {
        console.log(error);
        alert('Transaction failed. Please try again later.');
      }
    );
  }
}
