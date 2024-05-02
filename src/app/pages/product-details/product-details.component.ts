import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent {
  productId: string | null = null;
  constructor(private route: ActivatedRoute) {
    this.productId = this.route.snapshot.paramMap.get('productId');
  }
}
