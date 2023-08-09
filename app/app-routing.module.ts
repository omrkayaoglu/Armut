import { NgModule } from '@angular/core';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./module/home-page/pages/home/home.component";
import {GirisComponent} from "./module/home-page/pages/giris/giris.component";
import {HizmetverComponent} from "./module/home-page/pages/hizmetver/hizmetver.component";
import {YardimComponent} from "./module/home-page/pages/yardim/yardim.component";
import {UyeOlComponent} from "./module/home-page/pages/uye-ol/uye-ol.component";
import {CardsComponent} from "./module/home-page/components/cards/cards.component";
import {HizmetComponent} from "./module/home-page/pages/hizmet/hizmet.component";
import {FooterComponent} from "./module/home-page/components/footer/footer.component";
import {KullaniciComponent} from "./module/home-page/pages/kullanici/kullanici.component";
import {HesabimNavbarComponent} from "./module/home-page/components/hesabim-navbar/hesabim-navbar.component";
import {HesabimComponent} from "./module/home-page/components/hesabim/hesabim.component";
import {TeklifComponent} from "./module/home-page/pages/teklif/teklif.component";
import {WorkListComponent} from "./module/home-page/pages/work-list/work-list.component";
import {TekliflerComponent} from "./module/home-page/pages/teklifler/teklifler.component";


const routes: Routes = [

  {
    path: 'card',
    component: CardsComponent
  },
  {
    path: 'uyeol',
    component: UyeOlComponent
  },
  {
    path: 'yardim',
    component: YardimComponent
  },
  {
    path: 'hizmetver',
    component: HizmetverComponent
  },
  {
    path: 'hizmet',
    component: HizmetComponent
  },
  {
    path: 'giris',
    component: GirisComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'footer',
    component: FooterComponent
  },
  {
    path: 'kullanici',
    component: KullaniciComponent
  },
  {
    path: 'hesabim-navbar',
    component: HesabimNavbarComponent
  },
  {
    path: 'hesabim',
    component: HesabimComponent
  },
  {
    path: 'teklif/:id',
    component: TeklifComponent
  },
  {
    path: 'worklist',
    component: WorkListComponent
  },
  {
    path: 'teklifler',
    component: TekliflerComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
