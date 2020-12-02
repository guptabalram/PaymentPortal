import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  email: string;
  password: string;

  url = "https://uciymkiwjg.execute-api.ap-south-1.amazonaws.com/dev/login";

  ngOnInit(): void {
  }

  loginalert(){
    alert("this is alert");
  //  console.log(environment.baseUrl);    
  //return HttpClient.post(environment.baseUrl + 'login', { "email": "aditya@7classes.com", "password": "9819184664"});
  }

  postData = {
      email:this.email;
      password:this.password;         
    }
     
  };

  /*postData = {
    test : 'my content'
  };

  urltest = 'https://httpbin.org/post';*/

  constructor(private http:HttpClient) {
    this.http.post(this.url, this.postData).toPromise().then(data => {
      console.log(data, typeof(data));
      console.log(JSON.parse(data.data));
      console.log(data);
    });
  }
   
    
}


