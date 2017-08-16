import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import * as firebase from 'firebase';
import { Product } from '../models/productModels/product.model';
import { Category } from '../models/category.model';

@Injectable()
export class FirebaseService {
  productsUpdated = new Subject<Product[]>();
  categoriesUpdated = new Subject<Category[]>();

  constructor() { }

  productsListener() {
    console.log('productsListener Fired')
    firebase.database().ref('products').on('value', (data: firebase.database.DataSnapshot) => {
      const products: Product[] = [];
      data.forEach(element => {
        products.push(element.val());
        return false;
      });
      this.productsUpdated.next(products);
    });
  }

  categoriesListener() {
    console.log('categoriesListener Fired')
    firebase.database().ref('categories').on('value', (data: firebase.database.DataSnapshot) => {
      const categories: Category[] = [];
      data.forEach(element => {
        categories.push(element.val());
        return false;
      });
      this.categoriesUpdated.next(categories);
    });
  }
}
