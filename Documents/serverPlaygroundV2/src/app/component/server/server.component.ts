import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Server } from '../models/servers.model';
import { ServersService } from '../service/servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: Server;
  constructor(private serversService: ServersService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(el => {
      this.server = this.serversService.servers.filter(server => server.id === el.id)[0];
    })
  }
  delete(id:string):void{
    this.serversService.removeServer(id);
  }
  }
