import { Component, OnInit, DoCheck, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, DoCheck, OnChanges {
  public products = []
  public finalPrice: number = 0

  ngOnInit(): void {
    
  }

  ngOnChanges(): void {
    
  }
  
  ngDoCheck() {
    this.products = JSON.parse(localStorage.getItem('product') || "[]")
    this.finalPrice = 0
    for (let product of this.products){
      this.finalPrice += parseInt(product.totalPrice)
    }  
  }


}
