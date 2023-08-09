import {Component, OnInit} from '@angular/core';
import {WorkListingService} from "../../services/work-listing.service";
import {set} from "lodash-es";
import {WorkerService} from "../../services/worker.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-work-list',
  templateUrl: './work-list.component.html',
  styleUrls: ['./work-list.component.scss']
})
export class WorkListComponent implements OnInit {
  worklist:any=[]
  bidValue={}
  worklistId:number=0
  workerId:any

  constructor(private workListService: WorkListingService,
              private workerService:WorkerService,
              private userservice:UserService) {
  }

  ngOnInit(): void {
    this.getWorkList()
    this.getUser()

  }

  setRuleFill(){
    for (let item of this.worklist){
      item.ruleFill=JSON.parse(item.ruleFill)
    }
    console.log(this.worklist)
  }

  getWorkList() {

    return this.workListService.getWorkList().subscribe(d => {
      const data = d as Object[];
        this.worklist=data

        console.log(this.worklist[0].ruleFill)
        console.log(this.worklist)
        console.log(data[0])
      this.setRuleFill()

      },
      err => console.log("iş listesi getirilemedi"))
  }

  sendBid() {
    const input = document.querySelector('input') as HTMLInputElement;
    const value = input.value;
    const textarea = document.querySelector('textarea') as HTMLTextAreaElement;
    const taValue = textarea.value;
    this.bidValue={
      bid:value,
      message:taValue
    }
    console.log(this.bidValue)
    this.setBidService(this.worklistId,this.workerId,+value,taValue,false)
  }
  setBidService(worklistingId:number,workerId:number,price:number,message:string,accepted:boolean){
    this.workListService.setBid( worklistingId, workerId,price,message,accepted).subscribe((data) =>{
      console.log(data)
    } , err => console.log("Hatalı bilgiler"));
  }

  setWorklistId(id:number) {
    this.worklistId=id
  }

  getUser() {
    return this.userservice.getUser().subscribe(d => {
      const data = d as any;
        console.log(data)
      const userId=data.id

      this.getWroker(userId)
      }
      , err => console.log("Hatalı bilgiler"))
  }

  getWroker(userId:number){
    return this.workerService.getWorker(userId).subscribe(d => {
        const data = d as any;
        this.workerId=data[0].workerId
        console.log(data)
      },
      err => console.log("Çalışan getirilemedi"))
  }


}
