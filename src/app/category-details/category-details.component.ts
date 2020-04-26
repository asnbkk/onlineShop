import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { ProductService } from '../product.service';
import { trigger } from '@angular/animations';
import { fadeIn } from '../router-animatins'
import { fromEvent} from 'rxjs';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css'],
  animations: [
    trigger('fadeIn', fadeIn())
  ]
})
export class CategoryDetailsComponent implements OnInit {
  public title
  public dataLoaded: boolean = false  
  public products = []
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService,
    private productService: ProductService  
  ) { }
  
  public id = this.route.snapshot.paramMap.get('id')
  public subs = []
  public path
  ngOnInit(): void {
    this.categoryService.getCategory()
      .subscribe(data => {
        this.title = data.find(o => o.id == this.id)
        console.log(this.title)
      })
      
      this.productService.GetByCategory(this.id).subscribe(data => {
        this.products = data
        for(let p of this.products) {
          if(!this.subs.find(sub => sub == p.subcategory.name)) {
            this.subs.push(p.subcategory.name)
          }
        }
        console.log(this.products)
        setTimeout(() => {
          this.dataLoaded = true
        }, 300)
      })

  }


  onNavigate(id, subcat): void {
    // console.log(encodeURI(subcat))
    this.router.navigate(['/category/see-all/', id, encodeURI(subcat)])
  }

}
