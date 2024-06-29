import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuType: string = 'default';
  sellerdetails: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((res: any) => {
      if(res.url) {
        if(localStorage.getItem('seller') && res.url.includes('seller')) {
          this.menuType = 'seller';
          let seller = localStorage.getItem('seller');
          this.sellerdetails = seller && JSON.parse(seller)[0];
        } else {
          this.menuType = 'default';
        }
      }
    })
  }
  logout() {
    localStorage.removeItem('seller');
    this.router.navigate(['/']);
  }

}
