import { Injectable, signal } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export interface Quote {
    id: number;
    text: string;
    votes: number;
}
@Injectable({ providedIn: 'root' })
export class QuoteStateService {
    private quotes$ = new BehaviorSubject<Quote[]>([
        { id: 1, text: 'Be yourself', votes: 0 },
        { id: 2, text: 'Work smart', votes: 0 }
    ]);
    quotesSignal = signal<Quote[]>(this.quotes$.value);
    vote(id: number, change: number) {
        const updated = this.quotes$.value.map(q =>
            q.id === id ? { ...q, votes: q.votes + change } : q
        );
        this.quotes$.next(updated);
        this.quotesSignal.set(updated);
    }
    getQuotes() {
        return this.quotes$.asObservable();
    }
}