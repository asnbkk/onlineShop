import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ProductService } from '../product.service';
import { trigger } from '@angular/animations';
import { fadeIn } from '../router-animatins'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeIn', fadeIn())
  ]
})
export class HomeComponent implements OnInit {

  public dataLoaded: boolean = false  

  public products = []
  public subcategories = [
    'Приправы/Соусы',
    'Шоколад',
    'Энергетики',
    'Негазированые Напитки ',
    'Натуральный сок'
  ]
  categories = []

  constructor(private productService: ProductService, private router: Router) { }

  // ngAfterViewChecked() {
    // window.scrollTo(0, 0);
    // }
  

  ngOnInit(): void {
        window.scrollTo(0, 0);
    this.subcategories.forEach(subcat => {
      this.productService.GetBySubcat(subcat).subscribe(data => {
        this.products.push(...data.slice(0, 5))
        this.categories.push(data[0].category)
        
        setTimeout(() => {
          this.dataLoaded = true
        }, 300)
      })
      
    });
  }

  onSee(subcat): void {
    console.log(this.categories[this.subcategories.indexOf(subcat)])
    let id = this.categories[this.subcategories.indexOf(subcat)]
    this.router.navigate(['/category/see-all/', id, encodeURI(subcat)])
  }
}
