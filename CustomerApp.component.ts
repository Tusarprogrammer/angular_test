import { Component } from '@angular/core';
import {Customer} from './CustomerApp.model'
import {UserService} from '../services/UserService';

@Component({
  selector: 'app-root',
  templateUrl: './CustomerApp.view.html',
  styleUrls: ['./CustomerApp.component.css']
})
export class CustomerComponent {

  constructor(private userService: UserService) { }
  title = 'test-project';
  customerModel:Customer = new Customer();
  customerModelList:Array<Customer> = new Array<Customer>();
  userList:Array<any> = [];
  add() {
    this.customerModelList.push(this.customerModel);
    this.customerModel = new Customer();
    const resp = this.userService.httpGetRequest();
    //mydata:any = {};
    //console.log("this.userList");
    //console.log(this.userList);
    //console.log(this.userList.data);
    resp.subscribe(
      data => {
        this.userList = data;
        console.log("this.userList ==== here");
        console.log(data);
      },
        error => {
          console.log("Error during backend API all");
        }
      )
      console.log("Outside");
      console.log(this.userList);
  }
  
}
