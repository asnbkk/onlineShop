import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../category.service';


@Component({
  selector: 'app-see-all',
  templateUrl: './see-all.component.html',
  styleUrls: ['./see-all.component.css']
})
export class SeeAllComponent implements OnInit {
  public title
  public products = [
    {"name": "product1", "category": "cat1", "img": "assets/img/1.jpg ", "price": "450", "quantity": 1, "totalPrice": 0},
    {"name": "product2", "category": "cat1", "img": "assets/img/1.jpg ", "price": "450", "quantity": 1, "totalPrice": 0},
    {"name": "product3", "category": "cat1", "img": "assets/img/1.jpg ", "price": "450", "quantity": 1, "totalPrice": 0}
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
