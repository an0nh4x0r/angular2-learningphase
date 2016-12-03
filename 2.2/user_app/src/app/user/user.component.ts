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
  new_hobby: string;

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
    this.new_hobby = '';
  }

  ngOnInit() {
  }

  toggleHobbies() {
    this.showHobbies = !this.showHobbies;
  }

  add_new_hobby() {
    if (this.new_hobby != ''){
      this.hobbies.push(this.new_hobby);
      this.new_hobby = '';
    }
  }

  remove_hobby(index: number) {
    this.hobbies.splice(index, 1);
  }

}

interface address {
  street: string;
  city: string;
  state: string;
}
