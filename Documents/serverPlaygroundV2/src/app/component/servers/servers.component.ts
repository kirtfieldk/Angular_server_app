import { Component, OnInit } from '@angular/core';
import { Server } from '../models/servers.model';
import { ServersService } from '../service/servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servers: Server[];
  constructor(public serversService: ServersService) { }

  ngOnInit(): void {
    this.servers = this.serversService.servers;
  }

}
