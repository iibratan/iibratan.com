import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { AccountComponent } from './components/account/account.component';
import { BuilderComponent } from './components/builder/builder.component';
import { CartComponent } from './components/cart/cart.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PartnersComponent } from './components/partners/partners.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { ProductComponent } from './components/product/product.component';
import { SearchComponent } from './components/search/search.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TermsConditionsComponent } from './components/terms-conditions/terms-conditions.component';
import { TestingComponent } from './components/testing/testing.component';
import { FirebaseService } from './services/firebase.service';
import { AccountService } from './services/account.service';
import { CartService } from './services/cart.service';
import { ProductService } from './services/product.service';
import { SearchService } from './services/search.service';
import { SidebarService } from './services/sidebar.service';
import { SmallCategoryCardComponent } from './components/cards/small-category-card/small-category-card.component';
import { MediumProductCardComponent } from './components/cards/medium-product-card/medium-product-card.component';
import { SidebarTabComponent } from './components/sidebar/sidebar-tab/sidebar-tab.component';
import { SidebarCatalogueTabComponent } from './components/sidebar/sidebar-tab/sidebar-catalogue-tab/sidebar-catalogue-tab.component';
import { SidebarCartTabComponent } from './components/sidebar/sidebar-tab/sidebar-cart-tab/sidebar-cart-tab.component';
import { SidebarHomeTabComponent } from './components/sidebar/sidebar-tab/sidebar-home-tab/sidebar-home-tab.component';
import { SidebarSettingsTabComponent } from './components/sidebar/sidebar-tab/sidebar-settings-tab/sidebar-settings-tab.component';
import { SidebarAccountTabComponent } from './components/sidebar/sidebar-tab/sidebar-account-tab/sidebar-account-tab.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'account', component: AccountComponent},
  {path: 'cart', component: CartComponent},
  {path: 'catalogue/:id', component: CatalogueComponent},
  {path: 'partners', component: PartnersComponent},
  {path: 'privacy', component: PrivacyPolicyComponent},
  {path: 'products/:id', component: ProductComponent},
  {path: 'testing', component: TestingComponent},
  {path: 'terms', component: TermsConditionsComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    TestingComponent,
    HeaderComponent,
    SearchBarComponent,
    FooterComponent,
    HomeComponent,
    ProductComponent,
    AboutComponent,
    TermsConditionsComponent,
    PrivacyPolicyComponent,
    PartnersComponent,
    PageNotFoundComponent,
    SidebarComponent,
    CatalogueComponent,
    CartComponent,
    SearchComponent,
    AccountComponent,
    BuilderComponent,
    SmallCategoryCardComponent,
    MediumProductCardComponent,
    SidebarTabComponent,
    SidebarCatalogueTabComponent,
    SidebarCartTabComponent,
    SidebarHomeTabComponent,
    SidebarSettingsTabComponent,
    SidebarAccountTabComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      // {enableTracing: true}
    ),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    FirebaseService,
    AccountService,
    CartService,
    ProductService,
    SearchService,
    SidebarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
