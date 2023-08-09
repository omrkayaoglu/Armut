import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import {HomePageRoutingModule} from "./home-page-routing.module";
import { NavbarInputButtonComponent } from './components/navbar-input-button/navbar-input-button.component';
import { FormSearchComponent } from './components/form-search/form-search.component';
import { CardsComponent } from './components/cards/cards.component';
import { HizmetlerLinkComponent } from './components/hizmetler-link/hizmetler-link.component';
import { GirisComponent } from './pages/giris/giris.component';
import { HizmetverComponent } from './pages/hizmetver/hizmetver.component';
import { YardimComponent } from './pages/yardim/yardim.component';
import { UyeOlComponent } from './pages/uye-ol/uye-ol.component';
import {FormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";
import { HizmetComponent } from './pages/hizmet/hizmet.component';
import { FooterComponent } from './components/footer/footer.component';
import { SimpleNavbarComponent } from './components/simple-navbar/simple-navbar.component';
import {RouterLinkWithHref} from "@angular/router";
import { KullaniciComponent } from './pages/kullanici/kullanici.component';
import { HesabimComponent } from './components/hesabim/hesabim.component';
import { HesabimNavbarComponent } from './components/hesabim-navbar/hesabim-navbar.component';
import { TeklifComponent } from './pages/teklif/teklif.component';
import { WorkListComponent } from './pages/work-list/work-list.component';
import { TekliflerComponent } from './pages/teklifler/teklifler.component';




@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    NavbarInputButtonComponent,
    FormSearchComponent,
    CardsComponent,
    HizmetlerLinkComponent,
    GirisComponent,
    HizmetverComponent,
    YardimComponent,
    UyeOlComponent,
    HizmetComponent,
    FooterComponent,
    SimpleNavbarComponent,
    KullaniciComponent,
    HesabimComponent,
    HesabimNavbarComponent,
    TeklifComponent,
    WorkListComponent,
    TekliflerComponent

  ],
  exports: [
    NavbarComponent,
    HomeComponent
  ],
    imports: [
        CommonModule,
        HomePageRoutingModule,
        FormsModule,
        NgxPaginationModule,
        RouterLinkWithHref

    ]
})
export class HomePageModule { }

