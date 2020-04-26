import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../category.service';
import { ProductService } from '../product.service';
import { trigger } from '@angular/animations';
import { fadeIn } from '../router-animatins'


@Component({
  selector: 'app-see-all',
  templateUrl: './see-all.component.html',
  styleUrls: ['./see-all.component.css'],
  animations: [
    trigger('fadeIn', fadeIn())
  ]
})
export class SeeAllComponent implements OnInit, AfterViewChecked {
  public title
  public subcat
  public products = []

  public dataLoaded: boolean = false  

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService  
  ) { }


  public id = this.route.snapshot.paramMap.get('id')
  public subcategory = decodeURI(this.route.snapshot.paramMap.get('subcat'))


  ngAfterViewChecked() {
    // window.scrollTo(0, 0);
    }
  
  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.categoryService.getCategory()
      .subscribe(data => {
        this.title = data.find(o => o.id == this.id)
      })
    
    this.productService.GetBySubcat(this.subcategory).subscribe(data => {
      console.log(this.subcategory)
      this.products = data
      setTimeout(() => {
        this.dataLoaded = true
      }, 300)
    })
  }

}
