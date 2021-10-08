import { Component, NgZone, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ProductService } from '@app/_services/product.service';
import { FormGroup, FormBuilder } from '@angular/forms';

import { AuthenticationService } from '../../_services';
import { User } from '../../_models';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  productForm: FormGroup;
  currentUser!: User;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private productService: ProductService,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(
      (x) => (this.currentUser = x)
    );
    this.productForm = this.formBuilder.group({
      name: [''],
      price: [''],
      description: [''],
      createdBy: [0],
    });
  }

  ngOnInit(): void {}

  onSubmit(): any {
    this.productForm.value.createdBy = this.currentUser.id;
    this.productService.AddProduct(this.productForm.value).subscribe(() => {
      console.log('Data added successfully');
      this.ngZone.run(() => this.router.navigateByUrl('product/index'));
    });
  }
}
