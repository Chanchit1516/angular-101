import { Component, OnInit } from '@angular/core';
import { ProductService } from '@app/_services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  Products: any = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.GetProducts().subscribe((res) => {
      console.log(res);
      console.log('testtssss');
      this.Products = res;
    });
  }

  delete(id: any, i: any) {
    console.log(id);
    if (window.confirm('Do you want to go ahead?')) {
      this.productService.DeleteProduct(id).subscribe((res) => {
        this.Products.splice(i, 1);
      });
    }
  }
}
