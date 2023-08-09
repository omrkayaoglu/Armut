import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WorkCategoryService {

  constructor(private http: HttpClient) { }

  getWorkCategory(){
    return this.http.get("https://localhost:7058/api/Workcategories")
  }

}
