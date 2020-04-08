import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() inner: boolean = false
  constructor(private location: Location) { }

  ngOnInit(): void {
  }
  back() {
    this.location.back()
  }

}
