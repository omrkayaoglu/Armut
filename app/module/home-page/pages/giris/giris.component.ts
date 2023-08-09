import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {UserService} from "../../services/user.service";
import {identity, pickBy} from "lodash-es";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-giris',
  templateUrl: './giris.component.html',
  styleUrls: ['./giris.component.scss']
})
export class GirisComponent implements OnInit {

  buttonClass: string = "";
  data: any;
  name: string = ""
  surname: string = ""
  phoneNumber: string = ""
  email: string = ""
  password: string = ""
  adress:string=""
  userType:string="user";
  usertype:string=""
  adresClass:string=""
  params={}



  constructor(private authService:AuthService,
              private userService:UserService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {

  }


  signUpButton() {
    this.buttonClass = "right-panel-active";
  }

  signInButton() {
    this.buttonClass = "";
  }

  signUp(name:string,surname:string,phoneNumber:string,email:string,password:string,userType:string, adress:string) {
  this.name=name;
  this.surname=surname;
  this.phoneNumber=phoneNumber;
  this.email=email;
  this.password=password;
  this.adress=adress;
  this.usertype=userType;
  this.authService.signUp(this.name,this.surname,this.phoneNumber,this.email,this.password,this.usertype,this.adress).subscribe(data=> console.log("üye olundu"), err => console.log("Hatalı bilgiler"))
  }
  signIn(email:string,password:string) {
    this.email=email;
    this.password=password;
    this.authService.login(this.email,this.password).subscribe((data) =>{

      this.setRouterParams()
      console.log("Giriş yapıldı")
      console.log(data)


    } , err => console.log("Hatalı bilgiler"));
  }

  setRouterParams() {
    this.router.navigate(["/hesabim"], {
      relativeTo: this.activatedRoute,
      queryParams: pickBy(this.params, identity)
    });
  }
}

