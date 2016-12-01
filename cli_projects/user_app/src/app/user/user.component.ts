import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name: string;
  email: string;
  address: address;

  constructor() {
    this.name = 'Swapnil Singh';
    this.email = 'swappp7singh@gmail.com'
  }

  ngOnInit() {
  }

}

interface address {
  street: '2 Dhanawat Estate';
  city: 'Gwalior';
  state: 'Madhya Pradesh';
}
