import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { CreateServerComponent } from './component/create-server/create-server.component';
import { EditServerComponent } from './component/edit-server/edit-server.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { ServerComponent } from './component/server/server.component';
import { ServersComponent } from './component/servers/servers.component';

const routes: Routes = [
    {path: '', component: HomepageComponent},
    {path: 'server', component: ServersComponent, children: [
        {path: 'create', component: CreateServerComponent},
        {path: 'edit/:id', component: EditServerComponent },
        {path: ':id', component: ServerComponent }
    ]}
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }