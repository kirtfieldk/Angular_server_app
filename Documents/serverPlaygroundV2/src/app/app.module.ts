import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { ServersService } from './component/service/servers.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServersComponent } from './component/servers/servers.component';
import { ServerComponent } from './component/server/server.component';
import {AppRoutingModule} from './app.routing';
import { CreateServerComponent } from './component/create-server/create-server.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditServerComponent } from './component/edit-server/edit-server.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ServersComponent,
    ServerComponent,
    CreateServerComponent,
    EditServerComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
