import { QuoteStateService } from "./quote.state"
import { TestBed } from "@angular/core/testing";

describe('QuoteStateService', ()=>{
    let service: QuoteStateService;
    beforeEach(()=>{
        TestBed.configureTestingModule({});
        service = TestBed.inject(QuoteStateService);
    });
    it('should vote up a quote', ()=>{
        service.vote(1,1);
        service.getQuotes().subscribe(quotes => {
            expect(quotes.find(q=>q.id === 1)?.votes).toBe(1);
        });
    });
});