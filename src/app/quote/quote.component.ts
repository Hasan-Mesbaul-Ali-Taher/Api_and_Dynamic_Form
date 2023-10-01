import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Quote {
  sentence: string;
  character: {
    name: string;
  };
}

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Quote[]>('https://api.gameofthronesquotes.xyz/v1/random/2')
      .subscribe(data => {
        this.quotes = data;
      });
  }
}
