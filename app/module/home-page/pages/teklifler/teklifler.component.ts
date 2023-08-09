import {Component, OnInit} from '@angular/core';
import {WorkListingService} from "../../services/work-listing.service";
import {UserService} from "../../services/user.service";
import {HttpClient} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-teklifler',
  templateUrl: './teklifler.component.html',
  styleUrls: ['./teklifler.component.scss']
})
export class TekliflerComponent implements OnInit {
  worklistBids: any[] = []
  userId: number = 1
  user: any = []
  sessionValue:any

  constructor(private worklistservice: WorkListingService,
              private userservice: UserService) {
  }


  ngOnInit(): void {
    this.getUser()
    this.sessionValue = this.getCookie('session');
    console.log(this.sessionValue);


  }

  getBid(worklistid: number) {
    return this.worklistservice.getWorklistBids(worklistid).subscribe(
      d => {
        const data = d as any[];
        this.worklistBids.push(data);
        console.log(this.worklistBids);
      },
      err => console.log("Teklifler getirilemedi"))
  }

  getWorklistAll() {
    return this.worklistservice.getWorkList().subscribe(
      d => {
        const data = d as any[];
        //this.worklistBids = data;
        console.log(data);
        this.worklistUserControl(data)
      },
      err => console.log("Teklifler getirilemedi"))
  }


  getUser() {
    return this.userservice.getUser().subscribe(data => {
        this.user = data
        console.log(this.user)
        this.getWorklistAll()

      }
      , err => console.log("Hatalı bilgiler"))
  }

  worklistUserControl(data: any) {
    for (let item of data) {
      if (item.userId == this.user.id) {
        this.getBid(item.id)
      }
    }
  }

  getCookie(cname:any) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

}
