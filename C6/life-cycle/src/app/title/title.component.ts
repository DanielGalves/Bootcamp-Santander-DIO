import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  nome:string = 'Daniel'


  constructor(){ }
 
  ngOnInit(): void {
    this.nome = `Ola ${this.nome}`
  }
}