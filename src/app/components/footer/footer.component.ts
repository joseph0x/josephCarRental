import { Component, OnInit } from '@angular/core';
import { footerNgFor } from 'src/app/types/interfaceFileForHomeandHeader';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor() {}
  footerItem: footerNgFor[] = [
    {
      head: 'Company',
      item1: 'About',
      item2: 'Partnerships',
      item3: 'Advertisements',
      item4: 'Media',
      item5: 'Consequatur',
    },
    {
      head: 'Company',
      item1: 'About',
      item2: 'Partnerships',
      item3: 'Advertisements',
      item4: 'Media',
      item5: 'Consequatur',
    },
    {
      head: 'Company',
      item1: 'About',
      item2: 'Partnerships',
      item3: 'Advertisements',
      item4: 'Media',
      item5: 'Consequatur',
    },
  ];
  ngOnInit(): void {}
}
