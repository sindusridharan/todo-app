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
    this.http.get<{ message: string }>('http://localhost:8000/api/test').subscribe(
      (response: any) => {
        this.responsedata.message = response.message;
        this.title = this.responsedata.message;
      },
      (err: any) => {
        console.log('Error:', err);
      }
    );
  }
}
