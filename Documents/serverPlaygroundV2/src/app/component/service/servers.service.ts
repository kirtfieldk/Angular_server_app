import { Injectable } from '@angular/core';
import { Server } from '../models/servers.model'

@Injectable({
  providedIn: 'root'
})
export class ServersService {
  public servers: Server[] =[
    { name: "sever One", id: 'wefew32r3', region: 'us-east-1'},
    { name: "sever Two", id: '4t34twefqewf', region: 'us-west-1'},
    { name: "sever Three", id: 'weg34y5theg', region: 'us-east-1'}
  ]
  constructor() { }
  public addServer(s: Server): void{
    this.servers.push(s)
  }
  public removeServer(id: string): void{
    this.servers = this.servers.filter(ser => ser.id !== id)
  }
}
