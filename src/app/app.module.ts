import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component'; // Assuming you have an AppComponent
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent, // Add other components here if needed
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Add other imported modules here
    RouterOutlet,
  ],
  providers: [],
  bootstrap: [AppComponent],
  // Do not include AppComponent in the bootstrap array here
})
export class AppModule {}
