import { Component } from '@angular/core';

@Component({
  selector: 'app-connected',
  templateUrl: './connected.component.html',
  styleUrls: ['./connected.component.css']
})
export class ConnectedComponent {
showrouter:boolean=false
showusage:boolean=false
data:String
showrouterdetails()
{
  this.showrouter = true
  this.showusage = false
}
showusagedetails()
{
  this.showusage=true
  this.showrouter = false
}

}
