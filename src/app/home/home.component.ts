import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../datatype';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private productService: ProductService) { }
  popularProduct: undefined | Product[];
  trendyProduct: undefined | Product[];
  ngOnInit(): void {
    this.productService.popularProducts().subscribe((data) =>{
      this.popularProduct = data;
    });
    this.productService.trendyProducts().subscribe((data)=> {
      this.trendyProduct = data;
    })
  }

}
