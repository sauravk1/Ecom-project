import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit {
  addproduct!: FormGroup;
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.addproduct = new FormGroup({
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      color: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
    })
  }
  onAddProduct() {
    this.productService.addProduct(this.addproduct.value).subscribe(res =>{
      console.log(res);
      this.router.navigate(['seller-home']);
    })
  }

}
