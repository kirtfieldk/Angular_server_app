import { Component, OnInit } from '@angular/core';
import { ServersService } from '../service/servers.service';
import {Server} from '../models/servers.model'
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  servers: Server[];
  constructor(private serversService: ServersService) { }

  ngOnInit(): void {
    this.servers = this.serversService.servers;
  }

}
