import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  constructor(private sellerService: SellerService) { }
  signUpForm!: FormGroup;

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      name: new FormControl('',[Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password:  new FormControl('',[Validators.required]),
    })
  }
  onSubmit(){
    
    console.log(this.signUpForm.value);
    this.sellerService.userSignUp(this.signUpForm.value).subscribe((res) => {
      console.log(res);
    } )
    this.signUpForm.reset();
  }

}
