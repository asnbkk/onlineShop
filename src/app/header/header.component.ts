import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() inner: boolean = false
  @Input() home: boolean = false
  public selectToggle: boolean = false
  public logged: boolean = false
  constructor(private location: Location) { }
    cities = [
      "Алматы", "Уральск", "Астана", "Кокшетау"
    ]

  public selectedCity = this.cities[0]


  ngOnInit(): void {
    let token = localStorage.getItem('token')
    if(token) {
      this.logged = true
    }
  }
   
  back() {
    this.location.back()
  }

  selectCity(city) {
    this.selectedCity = city
  }

  onLogout() {
    localStorage.clear()
    this.logged = false
  }

}
