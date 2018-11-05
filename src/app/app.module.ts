import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule} from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppComponent } from './app.component';

import { LoginComponent } from './components/login/login.component';
import { FileTableComponent } from './components/file-table/file-table.component';
import { FileDropModule } from 'ngx-file-drop'

import { UserService } from "./services/user.service";
import { EncryptionService } from "./services/encryption.service";
import { FileService } from "./services/file.service"
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { AuthGuard } from './helpers/auth.guard'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FileTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    FileDropModule
  ],
  providers: [
    UserService,
    EncryptionService,
    FileService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
