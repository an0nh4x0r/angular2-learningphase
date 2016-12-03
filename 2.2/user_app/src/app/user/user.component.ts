import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;

  constructor() {
    this.name = 'Swapnil Singh';
    this.email = 'swappp7singh@gmail.com';
    this.address = {
      street: '2 dhanawat estate',
      city: 'Gwalior',
      state: 'Madhya Pradesh'
    };
    this.hobbies = ['Music', 'Movies', 'Sports'];
    this.showHobbies = false;
  }

  ngOnInit() {
  }

  toggleHobbies() {
    this.showHobbies = !this.showHobbies;
  }

}

interface address {
  street: string;
  city: string;
  state: string;
}
