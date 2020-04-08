import { Component, OnChanges, OnInit, AfterContentInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentChecked {
  title = 'online-shop';
  badge
  ngAfterContentChecked() {
    
    this.badge = JSON.parse(localStorage.getItem('product') || "[]")
  }
}
