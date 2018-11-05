import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { FileTableComponent } from "./components/file-table/file-table.component";
import { LoginComponent } from "./components/login/login.component";


const routes: Routes = [
  { path: "files", component: FileTableComponent },
  { path: "login", component: LoginComponent },
  { path: "**", redirectTo: "/files" }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
