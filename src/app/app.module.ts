import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ApiListCompComponent } from './api-list-comp/api-list-comp.component';
import { StudentServiceService } from './student-service.service';
// import { InterceptorModule } from './interceptor/interceptor.module';

@NgModule({
  declarations: [
    AppComponent,
    ApiListCompComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, FormsModule, ReactiveFormsModule
  ],
  providers: [StudentServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
