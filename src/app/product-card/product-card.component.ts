import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { api_url, root_url } from '../../assets/data/env'

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit{
  @Input() product
  @Input() seeAll: boolean = false
  @Input() cart: boolean = false

  public url = root_url
  // public status
  constructor() { }


  ngOnInit(): void {
  }


  addItem(data) {
    


    let products = JSON.parse(localStorage.getItem("product") || "[]")
    console.log(products)
    console.log(data)

    if(products.find(o => o.name == data.name)){
      // this.showMessage('exists')
      // setTimeout(() => {
      //   this.showMessage(null)
      // }, 2000);
      let i = products.findIndex(o => o.name == data.name)
      products[i].quantity += 1
      console.log('Products id: ' + i)
      products[i].totalPrice = products[i].price * products[i].quantity
    } else {
      data.totalPrice = data.price
      products.push(data)
    }
    
    localStorage.setItem("product", JSON.stringify(products))
  }

  deleteItem(productName) {
      let products = JSON.parse(localStorage.getItem("product") || "[]")
      for (var i = 0; i < products.length; i++) {
        let items = products[i];
        if (items.name == productName) {
          products.splice(i, 1);
          break
        }
      }
      products = JSON.stringify(products);
      localStorage.setItem("product", products);
    
  }

  onAdd(): void {
    let products = JSON.parse(localStorage.getItem("product") || "[]")
    let i = products.findIndex(o => o.name == this.product.name)
    products[i].quantity += 1  
    products[i].totalPrice = products[i].price * products[i].quantity  

    localStorage.setItem("product", JSON.stringify(products))
  }

  decreaseCounter() {
    let products = JSON.parse(localStorage.getItem("product") || "[]")
    let i = products.findIndex(o => o.name == this.product.name)
    if(this.product.quantity > 1){
      products[i].quantity -= 1  
      products[i].totalPrice = products[i].price * products[i].quantity  

      localStorage.setItem("product", JSON.stringify(products))
    }
  }

  // showMessage(info) {
  //   this.status = info
  // }

}
