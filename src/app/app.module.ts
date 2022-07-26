import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { FinancialAssetsComponent } from './components/financial-assets/financial-assets.component';
import { FiltersComponent } from './components/financial-assets/filters/filters.component';
import { AssetsListComponent } from './components/financial-assets/assets-list/assets-list.component';
import { AssetsItemComponent } from './components/financial-assets/assets-list/assets-item/assets-item.component';
import { AddAssetFormComponent } from './components/financial-assets/assets-list/addAsset-form.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TitleComponent } from './components/shared/title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    FinancialAssetsComponent,
    FiltersComponent,
    AssetsListComponent,
    AssetsItemComponent,
    AddAssetFormComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
