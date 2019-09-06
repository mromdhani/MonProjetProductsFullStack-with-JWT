import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/domain/iproduct';
import { ProductsService } from 'src/app/services/products.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  data: IProduct[] ;

  constructor(private _service: ProductsService) { }   // DI

  ngOnInit() {
      this._service.getAllProducts().subscribe(
        resp => this.data = resp,
        erreur => console.log (`ATTENTION, Il y a l'erreur ${erreur}`)
      );
  }

}
