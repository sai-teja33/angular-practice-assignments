import { Component,inject } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userObj:any={
    userName:'',
    password:''
   }
  
  constructor(private router:Router){}

    //static hardcore credentials
    onLogin(){
    if(this.userObj.userName=="admin" &&this.userObj.password=="1234" ){
      alert("Login Success")
      localStorage.setItem('loginuser',this.userObj.userName)
       this.router.navigateByUrl('/electronics')
       
    }else{
      alert("Wrong Credentials")
    }
   }
}
