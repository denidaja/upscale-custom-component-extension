import { Component, OnInit } from '@angular/core';

import { WishlistService } from '../services/wishlist.service.js';
import { clickedProduct } from '../script.js';

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
      this.getData();
    }, 500);
  }

  getData() {
    this.service.getTimesBought(clickedProduct.productID).subscribe(
      (data) => {
        let parsedData = JSON.parse(JSON.stringify(data));
        setTimeout(() => {
          this.timesBought = parsedData['quantity'];
        }, 0);
      },
      (error: Response) => {
        console.log(error);
        alert('Custom Component: Failed to fetch article popularity.');
      }
    );
  }
}
