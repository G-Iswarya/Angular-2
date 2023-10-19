import { Component } from '@angular/core';

@Component({
  selector: 'app-connected',
  templateUrl: './connected.component.html',
  styleUrls: ['./connected.component.css']
})
export class ConnectedComponent {
showrouter:boolean=false
showusage:boolean=false
showrouterdetails()
{
  this.showrouter = !this.showrouter
}
showusagedetails()
{
  this.showusage=!this.showusage
}
}
