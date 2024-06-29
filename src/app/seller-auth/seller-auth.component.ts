import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  constructor(private sellerService: SellerService, private router: Router) { }
  signUpForm!: FormGroup;
  loginForm!: FormGroup;
  showLogin: boolean = false;
  authError = '';  
  ngOnInit(): void {
    this.sellerService.reloadSeller();
    this.signUpForm = new FormGroup({
      name: new FormControl('',[Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password:  new FormControl('',[Validators.required]),
    })
    this.loginForm =new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required])
    })
  }
  onSubmit(){
    if(this.signUpForm.valid) {
    this.sellerService.userSignUp(this.signUpForm.value);
  }
 
}
onLoginSubmit() {
  if(this.loginForm.valid) {
    this.sellerService.userLogin(this.loginForm.value);
    this.sellerService.isLoginError.subscribe(error =>{
      if(error) {
        this.authError = "Email or password is incorrect";
      }
    })
  }
}
toggle() {
  this.showLogin = !this.showLogin;
}

}
