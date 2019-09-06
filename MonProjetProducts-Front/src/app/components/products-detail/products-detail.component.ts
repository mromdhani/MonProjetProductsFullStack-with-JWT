import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { IProduct } from 'src/app/domain/iproduct';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss']
})
export class ProductsDetailComponent implements OnInit {

  id: string ; // = 'P1000';

  produit: IProduct;

  constructor(private _service: ProductsService,
            private _route: ActivatedRoute) { }

  ngOnInit() {
      this.id = this._route.snapshot.paramMap.get('id');
      this._service.getProductById(this.id)
            .subscribe(
                reponse => this.produit = reponse,
                err => console.log ('ATTENTION, Erreur : ' + err)
    );
  }
}
