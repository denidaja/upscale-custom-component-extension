import { Component, OnInit } from '@angular/core';

import { WishlistService } from '../services/wishlist.service.js';
import { clickedProduct } from '../script.js';
import { TimesBought } from '../models/TimesBought.js';

@Component({
  selector: 'app-wishlist-button',
  templateUrl: './wishlist-button.component.html',
  styleUrls: ['./wishlist-button.component.css'],
})
export class WishlistButtonComponent implements OnInit {
  timesBought = null;

  constructor(private service: WishlistService) {}

  ngOnInit() {
    setTimeout(() => {
      console.log('Received data:', clickedProduct);
      this.getData();
    }, 500);
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
        alert('Custom Component: Failed to fetch article popularity.');
      }
    );
  }
}
