import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  focused: boolean = false
  constructor(private productService: ProductService) { 
  }

  searchRes = []
  
  ngOnInit(): void {
  }

  onFocus() {
    this.focused = true
  }

  onBlur() {
    setTimeout(() => {
      this.focused = false
    }, 200)
  }
  onSearchChange(value) {
    if(value !== null && value.length > 1) {
      this.productService.Search(value).subscribe( data => {
        this.searchRes = data
      })
    }
    else if(value.length <= 1) {
      this.searchRes = []
    }
  }

}
