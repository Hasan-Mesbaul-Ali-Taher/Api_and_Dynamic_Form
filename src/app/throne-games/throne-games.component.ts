import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-throne-games',
  templateUrl: './throne-games.component.html',
  styleUrls: ['./throne-games.component.scss']
})
export default class ThroneGamesComponent {
  // constructor(
  //   private myHttp: HttpClient
  // ) { }

  // add(a: number, b: number): number{
  //   return a+b;
  // }

  // public getQuotes(): Observable <any> {
  //   return this.myHttp.get<any>('https://api.gameofthronesquotes.xyz/v1/random/5');
  // }

  // quotes:any = this.getQuotes();
  
  
}
