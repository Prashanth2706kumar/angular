import { Component, Inject, input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-profile',
  standalone:true,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private http: HttpClient) {}
  fileToUpload: File | null = null;
  fileName: string = '';

  handleFileInput(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.fileToUpload = input.files[0];
      this.fileName = this.fileToUpload.name;
    }
  }

  retrieveFile() {
    if (!this.fileToUpload) {
      console.log('No file selected.');
      return;
    }
    let soption = document.querySelector('input[name="fileType"]:checked') as HTMLInputElement;
    if (soption){
      console.log(soption.id);
    }
    
    console.log('Retrieved file:', this.fileToUpload.name);
    const formData=new FormData();
    formData.append('file',this.fileToUpload);
    formData.append('type',soption.id);
    this.http.post('http://127.0.0.1:5050/data', formData)
    .subscribe((response:any)=> {
     console.log("file uloaded",formData); 
    }
  );
    
  }

}