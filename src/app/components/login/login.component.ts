import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // ✅ This is the missing import
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgModel } from '@angular/forms';
import { subscribe } from 'node:diagnostics_channel';


@Component({
  selector: 'app-login',
  imports: [RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
constructor(private http: HttpClient,private router: Router) {}
  
  responseMessage = '';

 goToProfile(event: Event, username: string, password: string) {
  event.preventDefault(); // ✅ Prevents page reload

  const formData = { username, password };

  this.http.post('http://127.0.0.1:5000/login', formData) // ✅ Replace with your API
    .subscribe((response: any) => {
      console.log("API Response:", response);
      console.log("Form Data Sent:", formData);

      this.responseMessage = response.message; // ✅ Extract message property

      if (response.message === "succes") { 
        console.log(response)
        this.router.navigate(['/profile']); // ✅ Ensures navigation happens AFTER API call
      }
    }, error => {
      console.error("Login Error:", error);
      this.responseMessage = "Login failed. Please try again.";
    });

    
    
  }
 


}
