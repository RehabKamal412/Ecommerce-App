import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/Auth/login/login.component';
import { HomeComponent } from './components/home/home.component';

import { RouterModule, Routes} from '@angular/router';
// import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { RegisterationComponent } from './components/Auth/registeration/registeration.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterationComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'' , component: HomeComponent},
      {path:'login' , component: LoginComponent},
      {path:'register' , component: RegisterationComponent},
      {path:'admin/products' , component: ProcessingInstruction},
    
    ]
   )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
