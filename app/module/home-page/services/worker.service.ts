import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  constructor(private http:HttpClient) {

  }
  getWorker(userId:number){
    return this.http.get("https://localhost:7058/api/worker/"+userId,{
      withCredentials:true
    })
  }
}
