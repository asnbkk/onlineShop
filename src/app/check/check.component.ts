import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {
  focused: boolean = false
  trigger: boolean = false
  full: boolean = true

  constructor(private productService: ProductService, private router: Router) { }

  public checkInfo = {
    address: '',
    name: '',
    phone: '',
    products: [],
    saveMe: 'true',
    total: 0
  }

  public products = []
  ngOnInit(): void {
    this.checkInfo.products = JSON.parse(localStorage.getItem('product') || "[]")
    this.products = JSON.parse(localStorage.getItem('product') || "[]")
    for (let product of this.products) {
      this.checkInfo.total += parseInt(product.totalPrice)
    }
  }

  onSend(): void {
    // if (
    //   this.checkInfo.address !== '' &&
    //   this.checkInfo.name !== '' &&
    //   this.phonenumber(this.checkInfo.phone)
    // ) {
    //   this.productService.OrderProducts(this.checkInfo).subscribe()
    //   this.router.navigate(['cart', 'last'])
    //   localStorage.removeItem('product')
    // }
    // else {
    //   this.full = false
    // }
      this.productService.OrderProducts(this.checkInfo).subscribe()
      this.router.navigate(['cart', 'last'])
      localStorage.removeItem('product')
  }

  onFocus() {
    this.focused = true
    this.trigger = true
  }

  onBlur() {
    setTimeout(() => {
      if (this.trigger)
        clearTimeout()
      else
        this.focused = false
    }, 200)
    this.trigger = false

    if (
      this.checkInfo.address !== '' &&
      this.checkInfo.name !== '' &&
      this.phonenumber(this.checkInfo.phone)
    ) {
      this.full = true
    }
  }

  warning() {

  }

  phonenumber(inputtxt) {
    let phoneno = /^((\+7|7|8)+([0-9]){10})$/;
    if (inputtxt.match(phoneno)) {
      return true;
    }
    else {
      return false;
    }
  }
}
