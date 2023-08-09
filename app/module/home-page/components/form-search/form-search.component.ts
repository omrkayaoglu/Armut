import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { pickBy, identity,isEmpty } from 'lodash-es';
@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.scss']
})
export class FormSearchComponent implements OnInit {

  params={}
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {
   this.params={
        hizmet:"",
        sayfa:""

    }
  }

  getSearch(searchInput:string){
    let mainPage="hizmet"
    if (searchInput=="giris"||searchInput=="giriş"||searchInput=="giris yap"||searchInput=="giriş yap"){
      mainPage="giris"
    }
    else if (searchInput=="üye"||searchInput=="üye ol"||searchInput=="uye"||searchInput=="uye ol"){
      mainPage="giris"
    }
    else if (searchInput=="yardim"||searchInput=="yardım"){
      mainPage="yardim"
    }
    else if (searchInput=="hizmet ver"||searchInput=="hızmet ver"){
      mainPage="hizmetver"
    }

    this.params={
      sayfa:searchInput
    }
      /*this.router.navigateByUrl('/'+searchInput);*/
    this.router.navigate(["/"+mainPage], {
      relativeTo: this.activatedRoute,
      queryParams: pickBy(this.params, identity)
    });
  }

}
