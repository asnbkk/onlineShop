import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {
  public title
  public products = [
    {"name": "product1", "category": "cat1", "img": "assets/img/1.jpg ", "price": "450", "quantity": 1, "totalPrice": 0},
    {"name": "product2", "category": "cat1", "img": "assets/img/1.jpg ", "price": "450", "quantity": 1, "totalPrice": 0},
    {"name": "product3", "category": "cat1", "img": "assets/img/1.jpg ", "price": "450", "quantity": 1, "totalPrice": 0},
    {"name": "product4", "category": "cat1", "img": "assets/img/1.jpg ", "price": "450", "quantity": 1, "totalPrice": 0},
    {"name": "product5", "category": "cat1", "img": "assets/img/1.jpg ", "price": "450", "quantity": 1, "totalPrice": 0},
    {"name": "product6", "category": "cat1", "img": "assets/img/1.jpg ", "price": "450", "quantity": 1, "totalPrice": 0},
    {"name": "product7", "category": "cat1", "img": "assets/img/1.jpg ", "price": "450", "quantity": 1, "totalPrice": 0}
  ]
  constructor(private route: ActivatedRoute, private categoryService: CategoryService) { }
  public id = this.route.snapshot.paramMap.get('id')
  
  ngOnInit(): void {
    this.categoryService.getCategory()
      .subscribe(data => {
        this.title = data.find(o => o.id == this.id)
      })

  }
  

}
