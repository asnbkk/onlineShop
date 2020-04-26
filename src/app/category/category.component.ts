import { Component, OnInit, setTestabilityGetter } from '@angular/core';
import { CategoryService } from '../category.service';
import { trigger } from '@angular/animations';
import { fadeIn } from '../router-animatins'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  animations: [
    trigger('fadeIn', fadeIn())
  ]
})
export class CategoryComponent implements OnInit {
  public categories = []
  public dataLoaded: boolean = false  
  constructor(private categoryService: CategoryService) { }
  ngOnInit(): void {
    this.categoryService.getCategory()
      .subscribe(data => {
        this.categories = data
        console.log(this.categories)
        setTimeout(() => {
          this.dataLoaded = true
        }, 300)
      })
    }

}
