import { Component, NgZone, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '@app/_services/product.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css'],
})
export class UpdateProductComponent implements OnInit {
  getId: any;
  updateForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.getId);
    this.productService.GetProduct(this.getId).subscribe((res) => {
      this.updateForm.setValue({
        name: res['name'],
        price: res['price'],
        description: res['description'],
      });
    });
    this.updateForm = this.formBuilder.group({
      name: [''],
      price: [''],
      description: [''],
    });
  }

  ngOnInit(): void {}

  onUpdate(): any {
    this.productService
      .UpdateProduct(this.getId, this.updateForm.value)
      .subscribe(() => {
        console.log('Data Updated Successfully');
        this.ngZone.run(() => this.router.navigateByUrl('product/index'));
      });
  }
}
