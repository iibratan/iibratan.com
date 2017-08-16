import { Component, OnDestroy, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Subscription } from 'rxjs/Subscription';
import { Product } from '../../models/productModels/product.model';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit, OnDestroy {
  firebaseProductsSubscription: Subscription;
  firebaseCategoriesSubscription: Subscription;
  products: Product[];
  categories: Category[];

  constructor(private __firebase: FirebaseService) { }

  ngOnInit() {
    this.__firebase.productsListener();
    this.__firebase.categoriesListener();
    this.firebaseProductsSubscription = this.__firebase.productsUpdated.subscribe(
      (products: Product[]) => {
        this.products = products;
      }
    );
    this.firebaseCategoriesSubscription = this.__firebase.categoriesUpdated.subscribe(
      (categories: Category[]) => {
        this.categories = categories;
      }
    );
  }

  ngOnDestroy() {
    this.firebaseProductsSubscription.unsubscribe();
    this.firebaseCategoriesSubscription.unsubscribe();
  }

}
