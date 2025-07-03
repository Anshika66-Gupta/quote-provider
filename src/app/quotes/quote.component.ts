import { Component, OnInit, Signal } from "@angular/core";
import { Quote, QuoteStateService } from './quote.state';

@Component({selector: 'app-quote', templateUrl:'./quote.component.html'})
export class QuoteComponent implements OnInit{
    quotes:Signal<Quote[]>;
    constructor(public state: QuoteStateService){
        this.quotes = state.quotesSignal;
    }
    ngOnInit(){
        console.log('QuoteComponent initialized')
    }
    upvote(id:number){
        this.state.vote(id,1);
    }
    downvote(id:number){
        this.state.vote(id,-1)
    }
}