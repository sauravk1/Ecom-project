import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../datatype';
@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {

  constructor(private productService: ProductService) { }
  productList: undefined | Product[];
  ngOnInit(): void {
    this.getProducts();
    
  }
  deleteProduct(id:number) {
    this.productService.deleteProduct(id).subscribe((res => {
      console.log(res);
      this.getProducts();
    }))
  }
  getProducts() {
    this.productService.productList().subscribe( (res) => {
      this.productList = res;
    })
  }

}
