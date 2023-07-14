import { Component, OnInit } from '@angular/core';
import { FAQNgFor } from 'src/app/types/interfaceFileForHomeandHeader';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  faq: FAQNgFor[] = [
    {
      question: 'How to book a car?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illumullam magnam adipisci vitae eum nam dolorem totam optio ipsum numquam qui sequi ut beatae, harum consequatur incidunt animihic aliquid!',
    },
    {
      question: 'Is the rent rate fuel inclusive?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illumullam magnam adipisci vitae eum nam dolorem totam optio ipsum numquam qui sequi ut beatae, harum consequatur incidunt animihic aliquid!',
    },
    {
      question: 'Are rentals refundable?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illumullam magnam adipisci vitae eum nam dolorem totam optio ipsum numquam qui sequi ut beatae, harum consequatur incidunt animihic aliquid!',
    },
    {
      question: 'What type of cars are available for rent?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illumullam magnam adipisci vitae eum nam dolorem totam optio ipsum numquam qui sequi ut beatae, harum consequatur incidunt animihic aliquid!',
    },
    {
      question: 'How to make payment?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illumullam magnam adipisci vitae eum nam dolorem totam optio ipsum numquam qui sequi ut beatae, harum consequatur incidunt animihic aliquid',
    },
    {
      question: 'Do you offer rents for inter-state use?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illumullam magnam adipisci vitae eum nam dolorem totam optio ipsum numquam qui sequi ut beatae, harum consequatur incidunt animihic aliquid!!',
    },
    {
      question: 'Do you offer self-driven rents?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illumullam magnam adipisci vitae eum nam dolorem totam optio ipsum numquam qui sequi ut beatae, harum consequatur incidunt animihic aliquid!',
    },
    {
      question: 'What type of car has the cheapest rent rate?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illumullam magnam adipisci vitae eum nam dolorem totam optio ipsum numquam qui sequi ut beatae, harum consequatur incidunt animihic aliquid!',
    },
  ];
  isAccordionOpen: boolean[] = [];

  toggleAccordion(index: number): void {
    this.isAccordionOpen[index] = !this.isAccordionOpen[index];
  }

  ngOnInit(): void {}
}
