import { Component, OnInit } from '@angular/core';
import { Server } from '../models/servers.model';
import { ServersService } from '../service/servers.service';

@Component({
  selector: 'app-create-server',
  templateUrl: './create-server.component.html',
  styleUrls: ['./create-server.component.css']
})
export class CreateServerComponent implements OnInit {
  serverToAdd: Server = {name: '', id: '', region: ''};
  constructor(private serversService: ServersService) { }

  ngOnInit(): void {
  }
  public addServer():void{
    this.serversService.addServer(this.serverToAdd);
  }


}
