import { Component, OnInit } from '@angular/core';
import {WorkCategoryService} from "../../services/work-category.service";
import {ActivatedRoute} from "@angular/router";
import {WorkListingService} from "../../services/work-listing.service";

@Component({
  selector: 'app-teklif',
  templateUrl: './teklif.component.html',
  styleUrls: ['./teklif.component.scss']
})
export class TeklifComponent implements OnInit {
  workCategoryList:any[]=[]
  category:any=[]
  ruleTemplate:any[]=[]
  id:number=0
  question:string=""
  choices:string=""
  counter:number=0
  progressbarWidth:number=0;
  progressbarStyle:string="";
  inputVisibility:boolean=false
  data={}

  sorular: String[]=[]
  cevaplar: String[]=[]

  upButtonVisibility:boolean=true
  teklifButtonVisibility: boolean=false;
  textareaValue: any;
  firstClickSave:boolean=true



  constructor(private workCategoryService:WorkCategoryService,
              private route:ActivatedRoute,
              private service:WorkListingService) { }

  ngOnInit(): void {

    this.workCategory().add(() => {
      this.getCategoryQuestions(this.counter)
    })
    this.progressbarStyle="width: "+ this.progressbarWidth+"%"

  }

  setWorkList(categoryId: number, state: string, ruleFill:string,userId:number){
    this.service.setWorkListing(categoryId,state,ruleFill,userId).subscribe((data) =>{

      console.log(data)

    } , err => console.log("Hatalı bilgiler"));
  }

  workCategory(){
    return this.workCategoryService.getWorkCategory().subscribe(
      data=>{
        this.workCategoryList.push(data)
      } ,
      err => console.log("Category verileri getirilemedi"))
  }

   getCategoryQuestions(value:number){
    this.id = Number( this.route.snapshot.paramMap.get('id'))
    var veri=this.workCategoryList[0][this.id-1].ruleTemplate
    this.ruleTemplate  = JSON.parse(veri);
    this.question=this.ruleTemplate[value].question
    this.choices=this.ruleTemplate[value].choices
     this.category=this.workCategoryList[0][this.id-1].name
    //console.log(this.ruleTemplate)
    //console.log(this.workCategoryList)
    //console.log(this.ruleTemplate[value])
    //console.log(this.question)
    if (this.choices==""){
      this.inputVisibility=true
    }
    else{
      this.inputVisibility=false
    }
  }


  setCounter() {
    console.log(this.workCategoryList)

    const selectedRadioButton = document.querySelector('input[type="radio"]:checked') as HTMLInputElement;
    if (selectedRadioButton) {
      const radioButtonLabel = selectedRadioButton.nextElementSibling as HTMLLabelElement;
      let labelText:String|null = radioButtonLabel.textContent;
      if (labelText !==null ){
        this.cevaplar.push(labelText)
        console.log(typeof labelText)
       this.counterUp()
      }
      this.sorular.push(this.question)
      console.log(`Selected radio button label: ${labelText}`);
    } else {
      //this.cevaplar.push("")
      //this.sorular.push(this.question)
      console.log('No radio button is selected ');
    }

    try {
      const textarea = document.querySelector('textarea') as HTMLTextAreaElement;
       this.textareaValue = textarea.value;
      if ( this.textareaValue.length>1)
      {
        console.log(`Textarea value: ${(this.textareaValue)}`);
        this.counterUp()

        if (this.counter<=(this.ruleTemplate.length-1)){
          this.sorular.push(this.question)
          this.cevaplar.push( this.textareaValue)
        }
          textarea.value=""
      }
    }
    catch (e) {

    }
    console.log(this.cevaplar)
    console.log(this.sorular)
    if (this.counter==this.ruleTemplate.length-1){
      this.upButtonVisibility=false
      this.teklifButtonVisibility=true
    }

    this.getCategoryQuestions(this.counter)

  }
  setCounterGeri(){
    this.counterDown()
    if (this.inputVisibility){
      const textarea = document.querySelector('textarea') as HTMLTextAreaElement;
      this.textareaValue = textarea.value;
      textarea.value=""
    }

    this.upButtonVisibility=true
    this.teklifButtonVisibility=false
    console.log(this.counter,this.progressbarWidth)
    console.log(this.workCategoryList)

    this.cevaplar.pop()
    this.sorular.pop()

    this.getCategoryQuestions(this.counter)
  }

  counterUp(){
    if (this.counter<=this.ruleTemplate.length-2){
      this.counter+=1
    }
    if (this.progressbarWidth<100){
      this.progressbarWidth+=(100/(this.ruleTemplate.length-1))
    }
    this.progressbarStyle="width: "+ this.progressbarWidth+"%"
  }
  counterDown(){

    if (this.counter>=1){
      this.counter-=1
    }
    if (this.progressbarWidth-(100/(this.ruleTemplate.length-1))>=0){
      this.progressbarWidth-=(100/(this.ruleTemplate.length-1))
    }
    else if (this.progressbarWidth-(100/(this.ruleTemplate.length-1))<0){
      this.progressbarWidth=0
    }
    this.progressbarStyle="width: "+ this.progressbarWidth+"%"
  }

  saveData(){
    const textarea = document.querySelector('textarea') as HTMLTextAreaElement;
    this.textareaValue = textarea.value;
    if (this.firstClickSave){
      this.sorular.push(this.question)
      this.cevaplar.push( this.textareaValue)
      this.firstClickSave=false
    }
    else if (!this.firstClickSave) {
      this.cevaplar.pop()
      this.sorular.pop()
      this.sorular.push(this.question)
      this.cevaplar.push( this.textareaValue)
    }
   // console.log(this.sorular)
   // console.log(this.cevaplar)

    this.data={
      sorular:this.sorular,
      cevaplar:this.cevaplar
    }
    console.log(this.data)

    var newData=JSON.stringify(this.data);
    this.setWorkList(1,"waiting_approval",newData,1)
  }

}

