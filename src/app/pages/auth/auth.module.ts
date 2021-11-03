import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RecordTypeComponent } from './record-type/record-type.component';
import { RegisterCollectorComponent } from './register-collector/register-collector.component';
import { RegisterFreelancerComponent } from './register-freelancer/register-freelancer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LoginComponent,
    RecordTypeComponent,
    RegisterCollectorComponent,
    RegisterFreelancerComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    RecordTypeComponent,
    LoginComponent,
    RegisterCollectorComponent,
    RegisterFreelancerComponent
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
