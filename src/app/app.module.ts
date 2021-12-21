import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WishlistButtonComponent } from './wishlist-button/wishlist-button.component';
import { WishlistService } from './services/wishlist.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, WishlistButtonComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [WishlistService],
  bootstrap: [AppComponent],
})
export class AppModule {}
