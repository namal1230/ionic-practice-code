import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false,
})
export class RegisterPage implements OnInit {

  email!:string;
  fullName!:string;
  password!:string;

  constructor() { }

  ngOnInit() {
  }

  cretate(){
    if(this.email && this.password && this.fullName){

    }else{
      alert('Please fill all the fields');
    }

  }

}
