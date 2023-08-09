import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";


@Component({
  selector: 'app-hesabim',
  templateUrl: './hesabim.component.html',
  styleUrls: ['./hesabim.component.scss']
})
export class HesabimComponent implements OnInit {

  user: any
  name: any
  surname: any
  telNo: any
  email: any
  sifre: any
  adres: any

  constructor(private userService: UserService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              public cookie: CookieService) {
  }

  ngOnInit(): void {
    this.getUser()

  }

  getUser() {
    return this.userService.getUser().subscribe(data => {
        this.user = data
        console.log(this.user)
        this.name = this.user.name
        this.surname = this.user.surname
        this.telNo = this.user.phoneNumber
        this.email = this.user.email
        this.sifre = this.user.password
      }
      , err => console.log("Hatalı bilgiler"))
  }

}
