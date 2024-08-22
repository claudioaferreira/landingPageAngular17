import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { IProduct } from '../../models/product.model';

@Component({
  selector: 'app-products-detail',
  standalone: true,
  imports: [],
  templateUrl: './products-detail.component.html',
  styleUrl: './products-detail.component.css'
})
export class ProductsDetailComponent implements OnInit{

  private _route = inject(ActivatedRoute)
  private _apiService = inject(ApiService);
  public product?: IProduct

  loading: boolean = true;

  ngOnInit(): void {
      this._route.params.subscribe(params => {
        this._apiService.getproductById(params['id']).subscribe((data: IProduct) => {
          this.product = data;
          this.loading = false;
        });
      });

  }


}
