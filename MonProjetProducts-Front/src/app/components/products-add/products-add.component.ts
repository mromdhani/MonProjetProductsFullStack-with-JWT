import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { IProduct } from 'src/app/domain/iproduct';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.scss']
})
export class ProductsAddComponent implements OnInit {

  form: FormGroup;

  constructor(private _fb: FormBuilder,
              private _servie: ProductsService,
              private _router: Router) { }

  ngOnInit() {
     this.form = this._fb.group({
       id : new FormControl('', Validators.required),
       nom: new FormControl('', Validators.required),
       prixUnitaire: new
       FormControl('', [Validators.required,
                        Validators.pattern('[+-]?[0-9.]+')]),
     });
  }

  addProduct(prod: IProduct) {
     this._servie.addProduct(prod).subscribe(
       resp => this._router.navigateByUrl('/list'),
       err => console.log(`ATTENTION- Il y a eu l erreur ${err}`)
     );


  }

}
