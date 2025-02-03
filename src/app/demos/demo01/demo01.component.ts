import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo01',
  templateUrl: './demo01.component.html',
  styleUrl: './demo01.component.css'
})
export class Demo01Component implements OnInit {
  ngOnInit(): void {
    this.maVariable2='Hello World!';
  }
  maVariable1:string='Hello World!';// Definite Assignment Assertion
  maVariable2!:string;
  maVariable3!:boolean;
  maVariable4:number=24;
  maVariable5:string[]=['Hello','World'];
  maVariable7:any[]=['Hello','World',42,true];
  maVariable6:any=24;
  maVariable8:{nom:string,prenom:string}={nom:'Doe',prenom:'John'};
  maVariable9:(a:number,b:number)=>number=(a,b)=>a+b;
  maVariable10:null=null;
  maVariable11:unknown='Hello world';
  maVariable12:string | number='Hello world';
}
