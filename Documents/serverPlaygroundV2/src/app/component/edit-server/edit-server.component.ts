import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Server } from '../models/servers.model';
import { ServersService } from '../service/servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server:Server
  id: string
  constructor(private route: ActivatedRoute, private serversService: ServersService) { }

  ngOnInit(): void {
    this.route.params.subscribe(el => this.id = el.id)
    this.server = this.serversService.servers.filter(el => el.id === this.id)[0] 
  }

}
