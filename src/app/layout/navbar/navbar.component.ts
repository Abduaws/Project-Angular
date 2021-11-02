import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{

    navber_name = "ahmed";
    input_type = "text";
    content = "";
    
    changeinput(){
      if(this.input_type=="text"){
        this.input_type="password";
      }
      else{
        this.input_type="text";
      }
    }

    getcontent(content:any){
      this.content=content;
    }
}
