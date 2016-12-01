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
  user_hobbies: string[];
  showHobbies: boolean;

  constructor() {
    this.name = 'Swapnil Singh';
    this.email = 'swappp7singh@gmail.com';
    this.address = {
      street: '2 Dhanawat Estate',
      city: 'Gwalior',
      state: 'Madhya Pradesh'
    };
    this.user_hobbies = ['Music', "Coding", 'Soccer', 'Movies'];
    this.showHobbies = false;
  }

  ngOnInit() {
  }

  clearInfo() {
    this.name = '';
    this.email = '';
    this.address = {
      street: '',
      city: '',
      state: ''
    }
  }

  hobbies() {
    this.showHobbies = !this.showHobbies;
  }

}

interface address {
  street: string;
  city: string;
  state: string;
}
