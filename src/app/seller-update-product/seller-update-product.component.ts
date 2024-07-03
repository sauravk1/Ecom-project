import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../datatype';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private productService: ProductService) { }
  updateProduct! :FormGroup;
  productData: undefined | Product;
  productMessage: undefined | string;
  ngOnInit(): void {
    let productId = this.activatedRoute.snapshot.paramMap.get('id');
    productId && this.productService.getProduct(productId).subscribe((data) =>{
      this.productData = data;
      this.updateProduct.patchValue(data);
  })
  this.updateProduct = new FormGroup({
    name: new FormControl(this.productData?.name),
    price: new FormControl(this.productData?.price),
    color: new FormControl(this.productData?.color),
    category: new FormControl(this.productData?.category),
    description: new FormControl(this.productData?.description),
    image: new FormControl(this.productData?.image),
  })
  }
  onUpdateProduct(product: Product) {
    console.log(product)
    if(this.productData) {
      product.id = this.productData.id;
    }
    this.productService.updateProduct(product).subscribe((res) => {
      if(res) {
        this.productMessage = "Product has been Updated"
      }
    });
    this.router.navigate(['/seller-home']);
    setTimeout(() => {
      this.productMessage = undefined;
    },3000)
  }

}
