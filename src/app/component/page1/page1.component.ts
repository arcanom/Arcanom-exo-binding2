
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
 valeur: boolean= false;
 random : number = 0
compteur : Date[] = []
date : any
color: string = "text-dark"

afficher(){
  this.random = Math.floor(Math.random()*10)
  if(this.random == 1){
  this.valeur = ! this.valeur
  } else {
    this.date = new Date()
    this.compteur.push(this.date)

  }
  if(this.compteur.length >4){
    this.color = "text-light"
  }
}

  constructor() { }

  ngOnInit(): void {
  }

}
