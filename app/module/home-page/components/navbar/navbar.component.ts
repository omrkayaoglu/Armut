import { Component, OnInit } from '@angular/core';
import {WorkCategoryService} from "../../services/work-category.service";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  sideNavVis:string="width: 0px;"
  workCategoryList:any

  constructor(private workCategoryService:WorkCategoryService) { }

  ngOnInit(): void {
    this.workCategory()
  }

  openNav(){
    this.sideNavVis ="width: 350px;"
  }
  closeNav(){
    this.sideNavVis ="width: 0px;"
  }
  workCategory(){

    return this.workCategoryService.getWorkCategory().subscribe(data=> console.log(), err => console.log("Category verileri getirilemedi"))
  }
}
