import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public badge
  @Input() focused: boolean = false
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterContentChecked() {
    
    this.badge = JSON.parse(localStorage.getItem('product') || "[]")
  }

}
