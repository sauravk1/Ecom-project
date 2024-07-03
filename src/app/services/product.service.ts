import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../datatype';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  addProduct(product:Product) {
    return this.http.post("http://localhost:3000/products",product);
  }
  productList() {
    return this.http.get<Product[]>("http://localhost:3000/products");
  }
  deleteProduct(id: number) {
    return this.http.delete(`http://localhost:3000/products/${id}` );
  }
  getProduct(id: string) {
    return this.http.get<Product>(`http://localhost:3000/products/${id}`);
  }
  updateProduct(product: Product) {
    console.log(product)
    return this.http.put(`http://localhost:3000/products/${product.id}`, product);
  }
  popularProducts() {
    return this.http.get<Product[]>("http://localhost:3000/products?_limit=3");
  }
  trendyProducts() {
    return this.http.get<Product[]>("http://localhost:3000/products?_limit=8");
  }
}
