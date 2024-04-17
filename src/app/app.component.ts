import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title= '';
  responsedata = {
    message: '',
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    console.log('Hello from AppComponent');
    this.http.get<{ message: string }>('http://localhost:8000/api/test').subscribe(
      (response) => {
        this.responsedata.message = response.message;
        console.log('Response:', this.responsedata);
        this.title = this.responsedata.message;
      },
      (err) => {
        console.log('Error:', err);
      }
    );
  }
}
