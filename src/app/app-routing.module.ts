import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { FileTableComponent } from "./components/file-table/file-table.component";
import { LoginComponent } from "./components/login/login.component";

import { AuthGuard } from "./helpers/auth.guard"
import { HomeLayoutComponent } from "./components/home-layout/home-layout.component";

const routes: Routes = [
  { path: "files", 
    component: HomeLayoutComponent, 
    canActivate: [AuthGuard],
  },
  { 
    path: "login", 
    component: LoginComponent 
  },
  { 
    path: "**", 
    redirectTo: "/files" 
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
