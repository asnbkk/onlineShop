import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {

  constructor(private productService: ProductService) { }

  public checkInfo = {
    address: '',
    name: '',
    phone: ''
  }

  ngOnInit(): void {
  }

  public products = [
    {
      name: "apples"
    }
  ]//TODO: make coming from product card

  onSend(): void {
    console.log(this.checkInfo)
    this.productService.OrderProducts(this.products, this.checkInfo)
  }

}
