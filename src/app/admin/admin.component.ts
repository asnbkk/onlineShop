import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private prodcutService: ProductService) { }

  public productModel = {
    name: '',
    image: '',
    subcategory:'',
    price: 0
  }

  ngOnInit(): void {
  }

  onCreate(): void {
    console.log(this.productModel)
    this.prodcutService.Create(this.productModel)
  }

}
